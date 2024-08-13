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
    onLoad: { action: 'onLoad' },
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
