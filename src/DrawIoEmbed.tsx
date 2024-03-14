import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react';
import { DrawIoEmbedProps, DrawIoEmbedRef } from './types';
import { getEmbedUrl } from './utils/getEmbedUrl';
import { handleEvent } from './utils/handleEvent';
import { useActions } from './hooks/useActions';
import React from 'react';

export const DrawIoEmbed = forwardRef<DrawIoEmbedRef, DrawIoEmbedProps>(
  (props, ref) => {
    const {
      baseUrl,
      urlParameters,
      configuration,
      xml,
      exportFormat,
      onSave,
      onClose,
      onLoad,
      onConfigure,
      onDraft,
      onExport,
      onMerge,
      onPrompt,
      onTemplate
    } = props;

    const iframeRef = useRef<HTMLIFrameElement>(null);
    const action = useActions(iframeRef);
    const iframeUrl = getEmbedUrl(baseUrl, urlParameters, !!configuration);
    const [isInitialized, setIsInitialized] = useState(false);

    const messageHandler = (evt: MessageEvent) => {
      handleEvent(evt, {
        init: () => {
          setIsInitialized(true);
        },
        load: (data) => {
          if (onLoad) {
            onLoad(data);
          }
        },
        configure: (data) => {
          if (configuration) {
            action.configure({ config: configuration });
          }

          if (onConfigure) {
            onConfigure(data);
          }
        },
        save: (data) => {
          action.exportDiagram({
            format: exportFormat || 'xmlsvg',
            // @ts-ignore not allowed normally, but only for internal use
            exit: data.exit
          });
        },
        exit: (data) => {
          if (onClose) {
            onClose(data);
          }
        },
        draft: (data) => {
          if (onDraft) {
            onDraft(data);
          }
        },
        export: (data) => {
          if (onSave) {
            onSave({
              event: 'save',
              xml: data.data
            });
          }

          if (onExport) {
            onExport(data);
          }

          // @ts-ignore not allowed normally, but only for internal use
          if (data.message.exit && onClose) {
            onClose({
              event: 'exit',
              modified: true
            });
          }
        },
        merge: (data) => {
          if (onMerge) {
            onMerge(data);
          }
        },
        prompt: (data) => {
          if (onPrompt) {
            onPrompt(data);
          }
        },
        template: (data) => {
          if (onTemplate) {
            onTemplate(data);
          }
        }
      }, baseUrl);
    };

    useImperativeHandle(
      ref,
      () => ({
        ...action
      }),
      []
    );

    useEffect(() => {
      if (isInitialized) {
        if (xml) {
          if (exportFormat === 'xmlpng') {
            action.load({ xmlpng: xml });
          } else {
            action.load({ xml });
          }
        } else {
          action.load({ xml: '' });
        }
      }
    }, [isInitialized, xml]);

    // Initial load
    useEffect(() => {
      window.addEventListener('message', messageHandler);

      return () => {
        window.removeEventListener('message', messageHandler);
      };
    }, []);

    return (
      <iframe
        className="diagrams-iframe"
        src={iframeUrl}
        ref={iframeRef}
        title="Diagrams.net"
        style={{
          width: '100%',
          height: '100%',
          minWidth: '400px',
          minHeight: '400px',
          border: 'none'
        }}
      />
    );
  }
);
