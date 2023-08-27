import './styles.css';

import { useEffect, useRef } from 'react';
import { DiagramsEmbedProps } from './types';
import { getEmbedUrl } from './utils/getEmbedUrl';

// Docs: https://www.drawio.com/doc/faq/embed-mode
const frameUrl =
  'https://embed.diagrams.net/?embed=1&ui=atlas&spin=1&libraries=1&proto=json&saveAndExit=1';

const testData = `
<mxfile host="embed.diagrams.net" modified="2023-08-25T10:22:33.565Z" agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36" etag="ff6eGTAEbCDDQ05o1_NX" version="21.6.9" type="embed" pages="2"><diagram id="Y9a7kf5wORv1aMeNYXJv" name="Pagina-1"><mxGraphModel dx="1141" dy="450" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="827" pageHeight="1169" math="0" shadow="0"><root><mxCell id="0" /><mxCell id="1" parent="0" /><mxCell id="4" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;" parent="1" source="2" target="3" edge="1"><mxGeometry relative="1" as="geometry" /></mxCell><mxCell id="6" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;entryPerimeter=0;" parent="1" source="2" target="5" edge="1"><mxGeometry relative="1" as="geometry" /></mxCell><mxCell id="2" value="test" style="rounded=1;whiteSpace=wrap;html=1;" parent="1" vertex="1"><mxGeometry x="-50" y="110" width="120" height="60" as="geometry" /></mxCell><mxCell id="3" value="Actor" style="shape=umlActor;verticalLabelPosition=bottom;verticalAlign=top;html=1;outlineConnect=0;" parent="1" vertex="1"><mxGeometry x="10" y="280" width="30" height="60" as="geometry" /></mxCell><mxCell id="7" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.75;exitY=0;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" parent="1" source="5" target="2" edge="1"><mxGeometry relative="1" as="geometry" /></mxCell><mxCell id="5" value="" style="shape=tape;whiteSpace=wrap;html=1;" parent="1" vertex="1"><mxGeometry x="120" y="160" width="120" height="100" as="geometry" /></mxCell><mxCell id="9" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0;entryY=1;entryDx=0;entryDy=0;" parent="1" source="8" target="2" edge="1"><mxGeometry relative="1" as="geometry" /></mxCell><mxCell id="8" value="&lt;font face=&quot;Courier New&quot;&gt;&lt;b&gt;&lt;i&gt;&lt;u&gt;Cloud&lt;/u&gt;&lt;/i&gt;&lt;/b&gt;&lt;/font&gt;" style="ellipse;shape=cloud;whiteSpace=wrap;html=1;" parent="1" vertex="1"><mxGeometry x="120" y="290" width="120" height="160" as="geometry" /></mxCell></root></mxGraphModel></diagram><diagram id="BYNOC0Kj7NqMg8wi-kfD" name="Test page"><mxGraphModel dx="314" dy="450" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="827" pageHeight="1169" math="0" shadow="0"><root><mxCell id="0" /><mxCell id="1" parent="0" /><mxCell id="WR8zg7e484vd7CGjJGep-1" value="&lt;h1&gt;Heading&lt;/h1&gt;&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&lt;/p&gt;" style="text;html=1;strokeColor=none;fillColor=none;spacing=5;spacingTop=-20;whiteSpace=wrap;overflow=hidden;rounded=0;" vertex="1" parent="1"><mxGeometry x="70" y="170" width="190" height="120" as="geometry" /></mxCell><mxCell id="WR8zg7e484vd7CGjJGep-2" value="Actor" style="shape=umlActor;verticalLabelPosition=bottom;verticalAlign=top;html=1;outlineConnect=0;" vertex="1" parent="1"><mxGeometry x="150" y="350" width="30" height="60" as="geometry" /></mxCell></root></mxGraphModel></diagram></mxfile>
`;

export const DiagramsEmbed = (props: DiagramsEmbedProps) => {
  const { urlParameters } = props;

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const iframeUrl = getEmbedUrl(urlParameters);

  const messageHandler = (evt: any) => {
    const data = evt.data;

    try {
      const msg = JSON.parse(data);

      console.log('msg', msg);

      if (iframeRef.current) {
        if (msg.event === 'init') {
          console.log('go');
          iframeRef.current.contentWindow?.postMessage(
            JSON.stringify({
              action: 'load',
              xml: testData
            }),
            '*'
          );
        }
      }
    } catch {
      //
    }
  };

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
    />
  );
};
