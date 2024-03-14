import { RefObject } from 'react';
import {
  ActionConfigure,
  ActionDialog,
  ActionDraft,
  ActionExport,
  ActionLayout,
  ActionLoad,
  ActionMerge,
  ActionPrompt,
  ActionSpinner,
  ActionStatus,
  ActionTemplate,
  EmbedActions
} from '../types';

type UniqueActionProps<T> = Omit<T, 'action'>;

export const useActions = (iframeRef: RefObject<HTMLIFrameElement | null>) => {
  const sendAction = (
    action: string,
    data: UniqueActionProps<EmbedActions>
  ) => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({
        action,
        ...data
      }),
      '*'
    );
  };

  /**
   * Load the contents of a diagram
   */
  const load = (data: UniqueActionProps<ActionLoad>) => {
    sendAction('load', data);
  };

  const configure = (data: UniqueActionProps<ActionConfigure>) => {
    sendAction('configure', data);
  };

  /**
   * Merge the contents of the given XML into the current file
   */
  const merge = (data: UniqueActionProps<ActionMerge>) => {
    sendAction('merge', data);
  };

  /**
   * Display a dialog in the editor window
   */
  const dialog = (data: UniqueActionProps<ActionDialog>) => {
    sendAction('dialog', data);
  };

  /**
   * Display a prompt in the editor window
   */
  const prompt = (data: UniqueActionProps<ActionPrompt>) => {
    sendAction('prompt', data);
  };

  /**
   * Show the template dialog
   */
  const template = (data: UniqueActionProps<ActionTemplate>) => {
    sendAction('template', data);
  };

  /**
   * Runs an array of layouts using the same format as Arrange > Layout > Apply.
   */
  const layout = (data: UniqueActionProps<ActionLayout>) => {
    sendAction('layout', data);
  };

  /**
   * Show a draft dialog
   */
  const draft = (data: UniqueActionProps<ActionDraft>) => {
    sendAction('draft', data);
  };

  /**
   * Display a message in the status bar
   */
  const status = (data: UniqueActionProps<ActionStatus>) => {
    sendAction('status', data);
  };

  /**
   * Display a spinner with a message or hide the current spinner if show is set to false
   */
  const spinner = (data: UniqueActionProps<ActionSpinner>) => {
    sendAction('spinner', data);
  };

  const exportDiagram = (data: UniqueActionProps<ActionExport>) => {
    sendAction('export', data);
  };

  return {
    load,
    configure,
    merge,
    dialog,
    prompt,
    template,
    layout,
    draft,
    status,
    spinner,
    exportDiagram
  };
};
