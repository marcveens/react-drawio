import { Meta, StoryObj } from '@storybook/react';
import { DrawIoEmbed } from '../src/DrawIoEmbed';
import { useEffect, useRef, useState } from 'react';
import { DrawIoEmbedRef } from '../src/types';
import React from 'react';
import { useRemoteFile } from './hooks/useRemoteFile';

const meta: Meta<typeof DrawIoEmbed> = {
  title: 'Components/DrawIoEmbed',
  component: DrawIoEmbed,
  parameters: {
    layout: 'centered'
  },
  args: {
    urlParameters: {
      ui: 'kennedy',
      spin: true,
      libraries: true,
      saveAndExit: true
    }
  },
  argTypes: {
    baseUrl: { control: 'text' },
    onLoad: { action: 'onLoad' },
    onAutoSave: { action: 'onAutoSave' },
    onSave: { action: 'onSave' },
    onClose: { action: 'onClose' },
    onConfigure: { action: 'onConfigure' },
    onDraft: { action: 'onDraft' },
    onExport: { action: 'onExport' },
    onMerge: { action: 'onMerge' },
    onPrompt: { action: 'onPrompt' },
    onTemplate: { action: 'onTemplate' }
  },
  decorators: [
    (Story) => (
      <div className="box" style={{ width: '800px', height: '500px' }}>
        <Story />
      </div>
    )
  ]
};
export default meta;

type Story = StoryObj<typeof DrawIoEmbed>;

export const NewCanvas: Story = {};

export const WithData: Story = {
  args: {
    xml: '<mxfile host="embed.diagrams.net" modified="2023-08-27T13:05:56.668Z" agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36" etag="GK7-tOtf0hGFVXvr0iag" version="21.6.9" type="embed"><diagram id="Y9a7kf5wORv1aMeNYXJv" name="Pagina-1"><mxGraphModel dx="482" dy="314" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="827" pageHeight="1169" math="0" shadow="0"><root><mxCell id="0" /><mxCell id="1" parent="0" /><mxCell id="-r8ZIlIq8bq7zP4vNG12-16" value="" style="ellipse;shape=cloud;whiteSpace=wrap;html=1;fillStyle=zigzag-line;fillColor=#F7F7F7;" vertex="1" parent="1"><mxGeometry x="150" y="60" width="460" height="360" as="geometry" /></mxCell><mxCell id="-r8ZIlIq8bq7zP4vNG12-11" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="1" source="-r8ZIlIq8bq7zP4vNG12-9" target="-r8ZIlIq8bq7zP4vNG12-10"><mxGeometry relative="1" as="geometry" /></mxCell><mxCell id="-r8ZIlIq8bq7zP4vNG12-9" value="Actor" style="shape=umlActor;verticalLabelPosition=bottom;verticalAlign=top;html=1;outlineConnect=0;" vertex="1" parent="1"><mxGeometry x="380" y="270" width="30" height="60" as="geometry" /></mxCell><mxCell id="-r8ZIlIq8bq7zP4vNG12-10" value="" style="rounded=0;whiteSpace=wrap;html=1;" vertex="1" parent="1"><mxGeometry x="335" y="160" width="120" height="60" as="geometry" /></mxCell><mxCell id="-r8ZIlIq8bq7zP4vNG12-13" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="1" source="-r8ZIlIq8bq7zP4vNG12-12" target="-r8ZIlIq8bq7zP4vNG12-9"><mxGeometry relative="1" as="geometry" /></mxCell><mxCell id="-r8ZIlIq8bq7zP4vNG12-12" value="" style="ellipse;whiteSpace=wrap;html=1;aspect=fixed;" vertex="1" parent="1"><mxGeometry x="240" y="240" width="80" height="80" as="geometry" /></mxCell><mxCell id="-r8ZIlIq8bq7zP4vNG12-15" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="1" source="-r8ZIlIq8bq7zP4vNG12-14" target="-r8ZIlIq8bq7zP4vNG12-9"><mxGeometry relative="1" as="geometry" /></mxCell><mxCell id="-r8ZIlIq8bq7zP4vNG12-14" value="" style="rhombus;whiteSpace=wrap;html=1;" vertex="1" parent="1"><mxGeometry x="480" y="240" width="80" height="80" as="geometry" /></mxCell></root></mxGraphModel></diagram></mxfile>'
  }
};

export const WithRemotePng: Story = {
  decorators: [
    (Story) => {
      const { inputXml, urlToBase64 } = useRemoteFile();

      useEffect(() => {
        urlToBase64('/mydrawio.png');
      }, []);

      return <Story args={{ xml: inputXml }} />;
    }
  ],
  args: {}
};

export const WithRemoteVsdx: Story = {
  decorators: [
    (Story) => {
      const { inputXml, urlToBase64 } = useRemoteFile();

      useEffect(() => {
        urlToBase64('/mydrawio.vsdx', {
          isVisio: true
        });
      }, []);

      return <Story args={{ xml: inputXml }} />;
    }
  ],
  args: {}
};

export const WithRemoteCsv: Story = {
  decorators: [
    (Story) => {
      const { inputCsv, loadCsv } = useRemoteFile();

      useEffect(() => {
        loadCsv('/mydrawio.csv');
      }, []);

      return <Story args={{ csv: inputCsv }} />;
    }
  ],
  args: {}
};

export const WithConfigurations: Story = {
  args: {
    xml: '<mxfile host="embed.diagrams.net" modified="2023-08-27T13:33:23.800Z" agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36" version="21.6.9" etag="xthbfrarG6SmZwCYJPbt" type="embed"><diagram id="kaqXdMjmixOsNJA9w4jU" name="Page-1"><mxGraphModel dx="314" dy="361" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0" /><mxCell id="1" parent="0" /><mxCell id="2" value="" style="shape=cube;whiteSpace=wrap;html=1;boundedLbl=1;backgroundOutline=1;darkOpacity=0.05;darkOpacity2=0.1;fillColor=#99FFFF;strokeColor=#0066CC;" vertex="1" parent="1"><mxGeometry x="110" y="150" width="120" height="80" as="geometry" /></mxCell></root></mxGraphModel></diagram></mxfile>',
    configuration: {
      customColorSchemes: [[null, { fill: '#99FFFF', stroke: '#0066CC' }]]
    }
  }
};

export const FlexibleSize: Story = {
  args: {},
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [
    (Story) => {
      useEffect(() => {
        const boxElem = document.querySelector<HTMLDivElement>('.box');

        if (boxElem) {
          boxElem.style.width = '100vw';
          boxElem.style.height = '100vh';
        }
      }, []);

      return (
        <div style={{ width: '100%', height: '100%' }}>
          <Story />
        </div>
      );
    }
  ]
};

export const ShowDialog: Story = {
  args: {},
  decorators: [
    (Story) => {
      const [isLoaded, setIsLoaded] = useState(false);
      const drawioRef = useRef<DrawIoEmbedRef>(null);

      useEffect(() => {
        if (drawioRef.current && isLoaded) {
          drawioRef.current.dialog({
            title: 'My test dialog',
            message: 'My message',
            button: 'OK'
          });
        }
      }, [drawioRef.current, isLoaded]);

      return (
        <Story args={{ onLoad: () => setIsLoaded(true), ref: drawioRef }} />
      );
    }
  ]
};

export const ShowPrompt: Story = {
  args: {},
  decorators: [
    (Story) => {
      const [isLoaded, setIsLoaded] = useState(false);
      const drawioRef = useRef<DrawIoEmbedRef>(null);

      useEffect(() => {
        if (drawioRef.current && isLoaded) {
          drawioRef.current.prompt({
            title: 'What color?',
            defaultValue: 'blue',
            ok: 'Save'
          });
        }
      }, [drawioRef.current, isLoaded]);

      return (
        <Story args={{ onLoad: () => setIsLoaded(true), ref: drawioRef }} />
      );
    }
  ]
};

export const PickTemplate: Story = {
  args: {},
  decorators: [
    (Story) => {
      const [isLoaded, setIsLoaded] = useState(false);
      const drawioRef = useRef<DrawIoEmbedRef>(null);

      useEffect(() => {
        if (drawioRef.current && isLoaded) {
          drawioRef.current.template({});
        }
      }, [drawioRef.current, isLoaded]);

      return (
        <Story args={{ onLoad: () => setIsLoaded(true), ref: drawioRef }} />
      );
    }
  ]
};

export const PickLayout: Story = {
  args: {},
  decorators: [
    (Story) => {
      const [isLoaded, setIsLoaded] = useState(false);
      const drawioRef = useRef<DrawIoEmbedRef>(null);

      useEffect(() => {
        if (drawioRef.current && isLoaded) {
          drawioRef.current.layout({
            layouts: []
          });
        }
      }, [drawioRef.current, isLoaded]);

      return (
        <Story args={{ onLoad: () => setIsLoaded(true), ref: drawioRef }} />
      );
    }
  ]
};

export const SetStatus: Story = {
  args: {},
  decorators: [
    (Story) => {
      const [isLoaded, setIsLoaded] = useState(false);
      const drawioRef = useRef<DrawIoEmbedRef>(null);

      useEffect(() => {
        if (drawioRef.current && isLoaded) {
          drawioRef.current.status({
            message: 'My status message'
          });
        }
      }, [drawioRef.current, isLoaded]);

      return (
        <Story args={{ onLoad: () => setIsLoaded(true), ref: drawioRef }} />
      );
    }
  ]
};

export const SetSpinner: Story = {
  args: {},
  decorators: [
    (Story) => {
      const [isLoaded, setIsLoaded] = useState(false);
      const drawioRef = useRef<DrawIoEmbedRef>(null);

      useEffect(() => {
        if (drawioRef.current && isLoaded) {
          drawioRef.current.spinner({
            message: 'Spinner spinner spinner',
            enabled: true,
            show: true
          });
        }
      }, [drawioRef.current, isLoaded]);

      return (
        <Story args={{ onLoad: () => setIsLoaded(true), ref: drawioRef }} />
      );
    }
  ]
};

export const ExportDataSvg: Story = {
  args: WithData.args,
  decorators: [
    (Story, context) => {
      const [isLoaded, setIsLoaded] = useState(false);
      const [imgData, setImgData] = useState<string | null>(null);
      const drawioRef = useRef<DrawIoEmbedRef>(null);

      useEffect(() => {
        if (drawioRef.current && isLoaded) {
          drawioRef.current.exportDiagram({
            format: 'xmlsvg'
          });
        }
      }, [drawioRef.current, isLoaded]);

      return (
        <>
          <Story
            args={{
              ...context.args,
              onLoad: () => setIsLoaded(true),
              onExport(data) {
                console.log('onExport', data);
                setImgData(data.data);
              },
              onSave(data) {
                console.log('onSave', data);
              },
              onClose(data) {
                console.log('onClose', data);
              },
              ref: drawioRef
            }}
          />
          <div style={{ marginTop: '10px' }}>
            <strong>Result as SVG</strong>
            <br />
            {imgData && <img src={imgData} />}
          </div>
        </>
      );
    }
  ]
};

export const ExportDataPng: Story = {
  args: WithData.args,
  decorators: [
    (Story, context) => {
      const [isLoaded, setIsLoaded] = useState(false);
      const [imgData, setImgData] = useState<string | null>(null);
      const drawioRef = useRef<DrawIoEmbedRef>(null);

      useEffect(() => {
        if (drawioRef.current && isLoaded) {
          drawioRef.current.exportDiagram({
            format: 'png',
            transparent: false,
            grid: true,
            scale: 1.5,
            shadow: true
          });
        }
      }, [drawioRef.current, isLoaded]);

      return (
        <>
          <Story
            args={{
              ...context.args,
              onLoad: () => setIsLoaded(true),
              onExport(data) {
                console.log('onExport', data);
                setImgData(data.data);
              },
              onSave(data) {
                console.log('onSave', data);
              },
              onClose(data) {
                console.log('onClose', data);
              },
              ref: drawioRef
            }}
          />
          <div style={{ marginTop: '10px' }}>
            <strong>Result as transparent PNG (with extra options)</strong>
            <br />
            <div style={{ backgroundColor: '#DDD' }}>
              {imgData && <img src={imgData} />}
            </div>
          </div>
        </>
      );
    }
  ]
};

export const AutoSave: Story = {
  args: {
    autosave: true
  }
};

export const NoSaveAndExit: Story = {
  args: {
    urlParameters: {
      saveAndExit: false,
      noExitBtn: true,
      noSaveBtn: true
    }
  }
};

export const CustomStyles: Story = {
  args: {
    xml: WithData.args?.xml,
    configuration: {
      css: `
:root { --panel-color: #DCEBE5 !important; --border-color: #b9d6cb !important; }
html .gePrimaryBtn { background: #528a79 !important; }
.geMenubarContainer { background: #3b665a !important; }
.geMenubarContainer a { color: #fff !important; }
      `
    }
  }
};

export const ReadOnly: Story = {
  args: {
    urlParameters: {
      lightbox: true
    }
  },
  decorators: [
    (Story) => {
      const { inputXml, urlToBase64 } = useRemoteFile();
      const [editMode, setEditMode] = useState(false);

      useEffect(() => {
        urlToBase64('/mydrawio.png');
      }, []);

      return (
        <>
          <button onClick={() => setEditMode(!editMode)}>
            Toggle view/edit
          </button>
          <Story
            args={{
              // Key was only added for rerendering the component properly
              key: editMode ? 'draw-edit' : 'draw-view',
              urlParameters: { lightbox: !editMode },
              xml: inputXml
            }}
          />
        </>
      );
    }
  ]
};

export const OtherLanguage: Story = {
  args: {
    urlParameters: {
      lang: 'nl'
    }
  }
};

export const MergeMultiple: Story = {
  args: {
    autosave: true,
    xml: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IGNvbG9yLXNjaGVtZTogbGlnaHQgZGFyazsiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMjFweCIgaGVpZ2h0PSI2MXB4IiB2aWV3Qm94PSItMC41IC0wLjUgMTIxIDYxIiBjb250ZW50PSImbHQ7bXhmaWxlIGhvc3Q9JnF1b3Q7ZW1iZWQuZGlhZ3JhbXMubmV0JnF1b3Q7IGFnZW50PSZxdW90O01vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwLjE1OyBydjoxMzcuMCkgR2Vja28vMjAxMDAxMDEgRmlyZWZveC8xMzcuMCZxdW90OyB2ZXJzaW9uPSZxdW90OzI2LjIuMTMmcXVvdDsmZ3Q7Jmx0O2RpYWdyYW0gaWQ9JnF1b3Q7QlRPRHNpbGZucTFna0trcXFENlMmcXVvdDsgbmFtZT0mcXVvdDtQYWdlLTEmcXVvdDsmZ3Q7alpMSmJzUWdESWFmaGpzSmFqVG5wdFAyVXZXUVE4OG91QUdKaElnaFc1KytUakZaTkJxcEYyUi9Yb0RmWnFKczV6Y3ZlLzNoRkZpV2N6VXo4Y0x5WFBBTG5pdFlDQlJGQkkwM0txSnNCNVg1QVlLYzZHQVUzRTZKd1RrYlRIK0d0ZXM2cU1PSlNlL2RkRTc3ZHZaOGF5OGJ1QU5WTGUwOS9USXE2RWd2VDN6bjcyQWFuVzdPT0VWYW1aSUozTFJVYmpvZ2NXV2k5TTZGYUxWekNYYlZMdWtTNjE0ZlJMZUhlZWpDZndyeVdEQktPOURmV0Y1WUxIMVdaa1N6V2MxUGxJY29kam9FNkE5aFNjSjROM1FLMXQ0Y3c1TTJBYXBlMW10MHdrMUFwa05yMGN1MjZoRjhnUG5oODdOTkZGd21jQzBFdjJCS0traVNMMmxCeUovMnNXUkphMzBZU1VGTTBpWTBXK3RkTERSSXIrVHVjL21MSFpaYlhIOEImbHQ7L2RpYWdyYW0mZ3Q7Jmx0Oy9teGZpbGUmZ3Q7Ij48ZGVmcy8+PGc+PGcgZGF0YS1jZWxsLWlkPSIwIj48ZyBkYXRhLWNlbGwtaWQ9IjEiPjxnIGRhdGEtY2VsbC1pZD0iMiI+PGc+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2ZmZmZmZiIgc3R5bGU9ImZpbGw6IGxpZ2h0LWRhcmsoI2ZmZmZmZiwgdmFyKC0tZ2UtZGFyay1jb2xvciwgIzEyMTIxMikpOyBzdHJva2U6IGxpZ2h0LWRhcmsocmdiKDAsIDAsIDApLCByZ2IoMjU1LCAyNTUsIDI1NSkpOyIgc3Ryb2tlPSIjMDAwMDAwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PC9nPjxnPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyIgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAxMThweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiAzMHB4OyBtYXJnaW4tbGVmdDogMXB4OyI+PGRpdiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGNvbG9yOiAjMDAwMDAwOyAiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogJnF1b3Q7SGVsdmV0aWNhJnF1b3Q7OyBjb2xvcjogbGlnaHQtZGFyaygjMDAwMDAwLCAjZmZmZmZmKTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IGFsbDsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgd29yZC13cmFwOiBub3JtYWw7ICI+PGRpdj5PbGQ8L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iNjAiIHk9IjM0IiBmaWxsPSJsaWdodC1kYXJrKCMwMDAwMDAsICNmZmZmZmYpIiBmb250LWZhbWlseT0iJnF1b3Q7SGVsdmV0aWNhJnF1b3Q7IiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk9sZDwvdGV4dD48L3N3aXRjaD48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48c3dpdGNoPjxnIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIvPjxhIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTUpIiB4bGluazpocmVmPSJodHRwczovL3d3dy5kcmF3aW8uY29tL2RvYy9mYXEvc3ZnLWV4cG9ydC10ZXh0LXByb2JsZW1zIiB0YXJnZXQ9Il9ibGFuayI+PHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxMHB4IiB4PSI1MCUiIHk9IjEwMCUiPlRleHQgaXMgbm90IFNWRyAtIGNhbm5vdCBkaXNwbGF5PC90ZXh0PjwvYT48L3N3aXRjaD48L3N2Zz4='
  },
  decorators: [
    (Story, context) => {
      const xmlToMerge =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IGNvbG9yLXNjaGVtZTogbGlnaHQgZGFyazsiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMjFweCIgaGVpZ2h0PSI4MXB4IiB2aWV3Qm94PSItMC41IC0wLjUgMTIxIDgxIiBjb250ZW50PSImbHQ7bXhmaWxlIGhvc3Q9JnF1b3Q7ZW1iZWQuZGlhZ3JhbXMubmV0JnF1b3Q7IGFnZW50PSZxdW90O01vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwLjE1OyBydjoxMzcuMCkgR2Vja28vMjAxMDAxMDEgRmlyZWZveC8xMzcuMCZxdW90OyB2ZXJzaW9uPSZxdW90OzI2LjIuMTMmcXVvdDsmZ3Q7Jmx0O2RpYWdyYW0gaWQ9JnF1b3Q7X1hiZjRuSXFNRnVVZC1LQkZkMkomcXVvdDsgbmFtZT0mcXVvdDtQYWdlLTEmcXVvdDsmZ3Q7alpKTmI4TWdESVovRGZja2FGWE96YnJ0MGwxeTJCa0ZMeUNSRUZFM0pQdjFjd2JrUTFXbFhaRDkrQU40YmNhcmJucDNZbEJYSzhHd0lwTVQ0NitzS0hoVzBybUFPWUxUS1lEV2FSbFF2b0ZhLzBDRVdhUjNMZUYyU0VSckRlcmhDQnZiOTlEZ2dRbm5yRCttZlZ0enZIVVFMVHlBdWhIbWtYNXBpU3JROGlYYitBZm9WcVdiOHl4R09wR1NJN2dwSWEzZklYNWh2SExXWXJDNnFRS3phSmQwQ1hWdlQ2THJ3eHowK0orQ0loU013dHpqMzFoeE1sUjZsbm9rczEzTVQvQ0pVcWRkSVA0QjV5UU1OYWNaa0hQMlNpUFVnMmlXaUtjdElLYXdNK1RsYStVSURtRjYrdlI4RllRV0NXd0g2R1pLU1FWSjdyaEV0RmJCOTl0SThxU3oybzJqakV6RUxXalgxcHRRWkVTdGtydk41QysyVzJ4KytRVT0mbHQ7L2RpYWdyYW0mZ3Q7Jmx0Oy9teGZpbGUmZ3Q7Ij48ZGVmcy8+PGc+PGcgZGF0YS1jZWxsLWlkPSIwIj48ZyBkYXRhLWNlbGwtaWQ9IjEiPjxnIGRhdGEtY2VsbC1pZD0iMiI+PGc+PGVsbGlwc2UgY3g9IjYwIiBjeT0iNDAiIHJ4PSI2MCIgcnk9IjQwIiBmaWxsPSIjZmZmZmZmIiBzdHlsZT0iZmlsbDogbGlnaHQtZGFyaygjZmZmZmZmLCB2YXIoLS1nZS1kYXJrLWNvbG9yLCAjMTIxMjEyKSk7IHN0cm9rZTogbGlnaHQtZGFyayhyZ2IoMCwgMCwgMCksIHJnYigyNTUsIDI1NSwgMjU1KSk7IiBzdHJva2U9IiMwMDAwMDAiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48L2c+PGc+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7IiBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDExOHB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDQwcHg7IG1hcmdpbi1sZWZ0OiAxcHg7Ij48ZGl2IHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDA7IHRleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6ICMwMDAwMDA7ICI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiAmcXVvdDtIZWx2ZXRpY2EmcXVvdDs7IGNvbG9yOiBsaWdodC1kYXJrKCMwMDAwMDAsICNmZmZmZmYpOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyB3b3JkLXdyYXA6IG5vcm1hbDsgIj48ZGl2Pk5ldzwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSI2MCIgeT0iNDQiIGZpbGw9ImxpZ2h0LWRhcmsoIzAwMDAwMCwgI2ZmZmZmZikiIGZvbnQtZmFtaWx5PSImcXVvdDtIZWx2ZXRpY2EmcXVvdDsiIGZvbnQtc2l6ZT0iMTJweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TmV3PC90ZXh0Pjwvc3dpdGNoPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjxzd2l0Y2g+PGcgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ii8+PGEgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtNSkiIHhsaW5rOmhyZWY9Imh0dHBzOi8vd3d3LmRyYXdpby5jb20vZG9jL2ZhcS9zdmctZXhwb3J0LXRleHQtcHJvYmxlbXMiIHRhcmdldD0iX2JsYW5rIj48dGV4dCB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEwcHgiIHg9IjUwJSIgeT0iMTAwJSI+VGV4dCBpcyBub3QgU1ZHIC0gY2Fubm90IGRpc3BsYXk8L3RleHQ+PC9hPjwvc3dpdGNoPjwvc3ZnPg==';

      const [isLoaded, setIsLoaded] = useState(false);
      const drawioRef = useRef<DrawIoEmbedRef>(null);

      useEffect(() => {
        if (drawioRef.current && isLoaded) {
          drawioRef.current.merge({
            xml: xmlToMerge
          });
        }
      }, [drawioRef.current, isLoaded]);

      return (
        <Story
          args={{
            ...context.args,
            onLoad: () => setIsLoaded(true),
            ref: drawioRef
          }}
        />
      );
    }
  ]
};
