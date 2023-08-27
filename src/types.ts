// All of the definitions are based on https://www.drawio.com/doc/faq/embed-mode

export type DiagramsEmbedProps = {
  urlParameters?: UrlParameters;
  /**
   * For configuration options, see https://www.drawio.com/doc/faq/configure-diagram-editor
   */
  configure?: { [key: string]: any };
};

export type UrlParameters = {
  /**
   * Theme of the editor
   */
  ui?: 'min' | 'atlas' | 'kennedy' | 'dark';
  /**
   * Shows a Loading… spinner while waiting for the diagram data to load in embed mode.
   *
   * @default false
   */
  spin?: boolean;
  /**
   * Disables the update of the modified state in embed mode after Save is selected and enables the update of the status message after changes are made. If 0 is used, the status bar is cleared after the changes. Otherwise, the value of this is used as the resource key.
   *
   * @default true
   */
  modified?: boolean;
  /**
   * If modified specifies a resource key, this is used to maintain the modified state after Save is selected.
   *
   * @default false
   */
  keepmodified?: boolean;
  /**
   * Specifies whether libraries should be enabled in embed mode.
   *
   * @default false
   */
  libraries?: boolean;
  /**
   * Displays a Save and Exit button instead of a Save button. Instead of using this URL parameter, you can specify this setting in the load message. If this is used, then the saveAndExit parameter is ignored.
   *
   * @default false
   */
  noSaveBtn?: boolean;
  /**
   * Displays an additional Save and Exit button. Instead of using this URL parameter, you can specify this setting in the load message. If noSaveBtn=1 is used, this can be disabled with saveAndExit=0.
   *
   * @default false
   */
  saveAndExit?: boolean;
  /**
   * Hides the Exit button. Instead of using this URL parameter, you can specify this setting in the load message.
   *
   * @default false
   */
  noExitBtn?: boolean;
};
