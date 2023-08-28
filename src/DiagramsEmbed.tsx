import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react';
import { DiagramsEmbedProps, DiagramsEmbedRef } from './types';
import { getEmbedUrl } from './utils/getEmbedUrl';
import { handleEvent } from './utils/handleEvent';
import { useActions } from './hooks/useActions';

export const DiagramsEmbed = forwardRef<DiagramsEmbedRef, DiagramsEmbedProps>(
  (props, ref) => {
    const {
      urlParameters,
      configuration,
      xml,
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
    const iframeUrl = getEmbedUrl(urlParameters, !!configuration);
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
          if (onSave) {
            onSave(data);
          }
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
          if (onExport) {
            onExport(data);
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
      });
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
          action.load({ xml });
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
          border: 'none'
        }}
      />
    );
  }
);
