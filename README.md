# react-drawio

[![npm](https://img.shields.io/npm/v/react-drawio.svg?style=flat)](https://www.npmjs.com/package/react-drawio)
[![Build](https://github.com/marcveens/react-drawio/actions/workflows/build.yml/badge.svg)](https://github.com/marcveens/react-drawio/actions/workflows/build.yml)

React component for integrating the <a href="https://app.diagrams.net">Diagrams</a> (<a href="https://www.drawio.com/">draw.io</a>) embed iframe.

This is an unofficial best-effort package based on the embedding documentation that can be found at https://www.drawio.com/doc/faq/embed-mode. 

## Table of Contents

* [Installation](#installation)
* [Examples](#examples)
* [API documentation](#api-documentation)

## Installation

Install this library:

```bash
pnpm add react-drawio
# or
yarn add react-drawio
# or
npm i react-drawio
```

## Examples 
### Simple rendering
```tsx
import { DiagramsEmbed } from 'react-drawio';

function App() {
  return (
    <DiagramsEmbed />
  );
}
```

### Start with a few settings enabled
```tsx
import { DiagramsEmbed } from 'react-drawio';

function App() {
  return (
    <DiagramsEmbed urlParameters={{
      ui: 'kennedy',
      spin: true,
      libraries: true,
      saveAndExit: true
    }} />
  );
}
```

### Start with existing diagram
```tsx
import { DiagramsEmbed } from 'react-drawio';

function App() {
  return (
    <DiagramsEmbed xml="..." />
  );
}
```

### Export diagram programmatically
```tsx
import { DiagramsEmbed, DrawIoEmbedRef } from 'react-drawio';
import { useRef, useState } from 'react';

function App() {
  const [imgData, setImgData] = useState<string | null>(null);
  const drawioRef = useRef<DrawIoEmbedRef>(null);

  const export = () => {
    if (drawioRef.current) {
      drawioRef.current.exportDiagram({
        format: 'xmlsvg'
      });
    }
  };

  return (
    <>
      <button onClick={export}>Export</button>

      <DiagramsEmbed 
        ref={drawioRef}
        onExport={(data) =>  setImgData(data.data)} 
      />
      
      {imgData && <img src={imgData} />}
    </>
  );
}
```

## API Documentation
All options are based on the documentation at <a href="https://www.drawio.com/doc/faq/embed-mode">draw.io/doc/faq/embed-mode</a>. If something is off, please let me know by creating an <a href="https://github.com/marcveens/react-drawio/issues/new">issue</a>.

### `props`
- `urlParameters` (`UrlParameters`, default: `undefined`)\
  Parameters documented at https://www.drawio.com/doc/faq/embed-mode
- `xml` (`string`, default: `undefined`)\
  XML structure for prefilling the editor
- `configuration` (`Object`, default: `undefined`)\
  For configuration options, see https://www.drawio.com/doc/faq/configure-diagram-editor

- `onLoad` (`(data: EventLoad) => void`, optional)
- `onSave` (`(data: EventSave) => void`, optional)
- `onClose` (`(data: EventExit) => void`, optional)
- `onConfigure` (`(data: EventConfigure) => void`, optional)
- `onMerge` (`(data: EventMerge) => void`, optional)
- `onPrompt` (`(data: EventPrompt) => void`, optional)
- `onTemplate` (`(data: EventTemplate) => void`, optional)
- `onDraft` (`(data: EventDraft) => void`, optional)
- `onExport` (`(data: EventExport) => void`, optional)

### Actions
It is possible to send actions to the Diagrams iframe. These actions are available as functions bound to the `ref` of the component, see [examples](#examples).

- `load` (`(obj: ActionLoad) => void`)\
  Load the contents of a diagram
- `configure` (`(obj: ActionConfigure) => void`)\
Send configuration option to the iframe. Read more about it at https://www.drawio.com/doc/faq/configure-diagram-editor
- `merge` (`(obj: ActionMerge) => void`)\
Merge the contents of the given XML into the current file
- `dialog` (`(obj: ActionDialog) => void`)\
Display a dialog in the editor window
- `prompt` (`(obj: ActionPrompt) => void`)\
Display a prompt in the editor window
- `template` (`(obj: ActionTemplate) => void`)\
Show the template dialog
- `layout` (`(obj: ActionLayout) => void`)\
Runs an array of layouts using the same format as Arrange > Layout > Apply.
- `draft` (`(obj: ActionDraft) => void`)\
Show a draft dialog
- `status` (`(obj: ActionStatus) => void`)\
Display a message in the status bar
- `spinner` (`(obj: ActionSpinner) => void`)\
Display a spinner with a message or hide the current spinner if show is set to false
- `exportDiagram` (`(obj: ActionExport) => void`)