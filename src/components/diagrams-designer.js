// import React, { useState } from 'react';
// import { Button, Checkbox, Form } from 'semantic-ui-react'

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import G6 from '@antv/g6';



export default function DiagramsDesigner() {
    const ref = React.useRef(null);
    let graph = null;

    const data = {
        nodes: [
          {
            id: 'node1',
            label: 'Circle1',
            x: 150,
            y: 150,
          },
          {
            id: 'node2',
            label: 'Circle2',
            x: 400,
            y: 150,
          },
        ],
        edges: [
          {
            source: 'node1',
            target: 'node2',
          },
        ],
      };
  
    useEffect(() => {
      if (!graph) {
        graph = new G6.Graph({
          container: ReactDOM.findDOMNode(ref.current),
          width: 1200,
          height: 800,
          modes: {
            default: ['drag-node'],
          },
          layout: {
            type: 'dagre',
            direction: 'LR',
          },
          defaultNode: {
            type: 'node',
            labelCfg: {
              style: {
                fill: '#000000A6',
                fontSize: 10,
              },
            },
            style: {
              stroke: '#72CC4A',
              width: 150,
            },
          },
          defaultEdge: {
            type: 'polyline',
          },
        });
      }
      graph.data(data);
      graph.render();
    }, []);
  
    return <div ref={ref}></div>;
        <div>
            <h1>Diagrams Designer</h1>  
        </div>
        //   <Graph fitView="cc" animate={true} height={window.innerHeight} data={data}></Graph>
}

