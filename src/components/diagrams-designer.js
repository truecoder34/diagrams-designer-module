// import React, { useState } from 'react';
// import { Button, Checkbox, Form } from 'semantic-ui-react'

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import G6 from '@antv/g6';

import {v4 as uuidv4} from 'uuid';


export default function DiagramsDesigner() {
    const ref = React.useRef(null);
    let graph = null;

    let ELEMENTS_STORAGE = []

    const data = {
        id: 'root',
        // nodes: [
        //     {
        //         id: 'node1',
        //         label: 'Circle1',
        //         x: 150,
        //         y: 150,
        //     },
        //     {
        //         id: 'node2',
        //         label: 'Circle2',
        //         x: 400,
        //         y: 150,
        //     },
        //     {
        //         id: 'node3',
        //         x: 100,
        //         y: 100,
        //         label: 'rect',
        //         type: 'rect',
        //         style: {
        //             // The style for the keyShape
        //             fill: 'lightblue',
        //             stroke: '#888',
        //             lineWidth: 4,
        //             radius: 7,
        //         },
        //         linkPoints: {
        //             top: true,
        //             bottom: true,
        //             left: true,
        //             right: true,
        //             // ... Styles for linkPoints can be assigned here
        //         },
        //     }

        // ],
        // edges: [
        //   {
        //     source: 'node1',
        //     target: 'node2',
        //   },
        //   {
        //     source: 'node2',
        //     target: 'node3',
        //   },
        // ],
      };
  
    useEffect(() => {
      if (!graph) {
        graph = new G6.Graph({
          container: ReactDOM.findDOMNode(ref.current),
          width: 1200,
          height: 800,
          modes: {
            default: ['drag-canvas', 'drag-node',  'drag-combo', 'collapse-expand-combo'],
            addEdge: ['click-add-edge', 'click-select'],
            addDashedEdge: ['click-add-edge-dashed', 'click-select'],
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
          defaultCombo: {
            type: 'rect',
            /* The minimum size of the combo. combo 最小大小 */
            size: [50, 50],
            /* style for the keyShape */
            style: {
              lineWidth: 1,
               fill: 'white',
              stroke: 'red',
              lineWidth: 2,
              lineDash: [8]
            },
            labelCfg: {
              /* label's offset to the keyShape */
              // refY: 10,
              /* label's position, options: center, top, bottom, left, right */
              position: 'top',
              /* label's style */
              // style: {
              //   fontSize: 18,
              // },
            },
          },
          nodeStateStyles: {
            // The state styles defined as following will take effect on keyShape only. To define state styles on other shapes, refer to the link Configure Styles for State above
            hover: {
              fillOpacity: 0.1,
              lineWidth: 10,
            },
          },
        });
      }
      graph.data(data);
      graph.render();

      graph.on('node:mouseenter', (evt) => {
        const { item } = evt;
        graph.setItemState(item, 'active', true);
      });
      
      graph.on('node:mouseleave', (evt) => {
        const { item } = evt;
        graph.setItemState(item, 'active', false);
      });
      
      graph.on('node:click', (evt) => {
        const { item } = evt;
        graph.setItemState(item, 'selected', true);
      });
      
      graph.on('canvas:click', (evt) => {
        graph.getNodes().forEach((node) => {
          graph.clearItemStates(node);
        });
      });


      graph.on('combo:mouseenter', (evt) => {
        const { item } = evt;
        graph.setItemState(item, 'active', true);
      });
      
      graph.on('combo:mouseleave', (evt) => {
        const { item } = evt;
        graph.setItemState(item, 'active', false);
      });
      graph.on('combo:click', (evt) => {
        const { item } = evt;
        graph.setItemState(item, 'selected', true);
      });
      graph.on('canvas:click', (evt) => {
        graph.getCombos().forEach((combo) => {
          graph.clearItemStates(combo);
        });
      });


      let addedCount = 0;
      G6.registerBehavior('click-add-edge', {
        getEvents() {
          return {
            'node:click': 'onClick',
            mousemove: 'onMousemove',
            'edge:click': 'onEdgeClick' // 点击空白处，取消边
          };
        },
        onClick(ev) {
          const node = ev.item;
          const graph = this.graph;
          const point = {
            x: ev.x,
            y: ev.y
          };
          const model = node.getModel();
          if (this.addingEdge && this.edge) {
            graph.updateItem(this.edge, {
              target: model.id
            });
            // graph.setItemState(this.edge, 'selected', true);
            this.edge = null;
            this.addingEdge = false;
          } else {
            this.edge = graph.addItem('edge', {
              source: model.id,
              type: 'polyline',
              target: point,
              style: {
                stroke: 'black',
                lineWidth: 3,
                endArrow: {
                  path: G6.Arrow.triangle(10, 20, 0), // Using the built-in edges for the path, parameters are the width, length, offset (0 by default, corresponds to d), respectively
                  d: 0,
                  fill: 'black',
                  stroke: 'white',
                  lineWidth: 1,
                }
              }
            });
            this.addingEdge = true;
          }
        },
        onMousemove(ev) {
          const point = {
            x: ev.x,
            y: ev.y
          };
          if (this.addingEdge && this.edge) {
            this.graph.updateItem(this.edge, {
              target: point
            });
          }
        },
        onEdgeClick(ev) {
          const currentEdge = ev.item;
          // 拖拽过程中，点击会点击到新增的边上
          if (this.addingEdge && this.edge == currentEdge) {
            graph.removeItem(this.edge);
            this.edge = null;
            this.addingEdge = false;
          }
        }
      });

      G6.registerBehavior('click-add-edge-dashed', {
        getEvents() {
          return {
            'node:click': 'onClick',
            mousemove: 'onMousemove',
            'edge:click': 'onEdgeClick' // 点击空白处，取消边
          };
        },
        onClick(ev) {
          const node = ev.item;
          const graph = this.graph;
          const point = {
            x: ev.x,
            y: ev.y
          };
          const model = node.getModel();
          if (this.addingEdge && this.edge) {
            graph.updateItem(this.edge, {
              target: model.id
            });
            // graph.setItemState(this.edge, 'selected', true);
            this.edge = null;
            this.addingEdge = false;
          } else {
            this.edge = graph.addItem('edge', {
              source: model.id,
              type: 'polyline',
              target: point,
              style: {
                lineDash: [8],
                stroke: 'black',
                lineWidth: 3,
                endArrow: {
                  path: G6.Arrow.vee(10, 20, 0), // Using the built-in edges for the path, parameters are the width, length, offset (0 by default, corresponds to d), respectively
                  d: 0,
                  fill: 'black',
                  stroke: 'white',
                  lineWidth: 1,
                }
              }
            });
            this.addingEdge = true;
          }
        },
        onMousemove(ev) {
          const point = {
            x: ev.x,
            y: ev.y
          };
          if (this.addingEdge && this.edge) {
            this.graph.updateItem(this.edge, {
              target: point
            });
          }
        },
        onEdgeClick(ev) {
          const currentEdge = ev.item;
          // 拖拽过程中，点击会点击到新增的边上
          if (this.addingEdge && this.edge == currentEdge) {
            graph.removeItem(this.edge);
            this.edge = null;
            this.addingEdge = false;
          }
        }
      });

    }, []);

    const addNode = () => {
      let newElemUuid = uuidv4();
      console.log('[INFO] New node UUID is: ' + newElemUuid);
      ELEMENTS_STORAGE.push(newElemUuid)

      const modelCircle = {
        id: newElemUuid,
        label: 'node',
        address: 'cq',
        x: 200,
        y: 150,
        style: {
          fill: 'white',
          stroke: 'black',
          lineWidth: 2
        },
        linkPoints: {
          top: true,
          right: false,
          bottom: true,
          left: false,
          // circle的大小
          size: 5,
          lineWidth: 1,
          fill: '#fff',
          stroke: '#1890FF'
        },
        size : 50,

      };
      graph.addItem('node', modelCircle);
    };

    const addNodeEllipse = () => {
      let newElemUuid = uuidv4();
      console.log('[INFO] New node ellipse UUID is: ' + newElemUuid);
      ELEMENTS_STORAGE.push(newElemUuid)

      const modelEllipse = {
        id: newElemUuid,
        x: 100,
        y: 100,
        type: 'ellipse',
        label: 'ellipse',
        style: {
          fill: 'white',
          stroke: 'black',
          lineWidth: 2
        },
      };
      graph.addItem('node', modelEllipse);
    };

    const addObject = () => {
      let newElemUuid = uuidv4();
      console.log('[INFO] New object UUID is: ' + newElemUuid);
      ELEMENTS_STORAGE.push(newElemUuid)

      const modelRectangle = {
        id: newElemUuid,
        x: 100,
        y: 100,
        type: 'rect',
        label: 'rect',
        style: {
          fill: 'white',
          stroke: 'black',
          lineWidth: 2
        },
      };
      graph.addItem('node', modelRectangle);
    };

    const addFunctionalModule = () => {
      let newElemUuid = uuidv4();
      console.log('[INFO] New object UUID is: ' + newElemUuid);
      ELEMENTS_STORAGE.push(newElemUuid)

      const modelFuncModule = {
        id: newElemUuid,
        x: 100,
        y: 100,
        type: 'rect',
        label: 'functional module',
        style: {
          fill: 'white',
          stroke: 'red',
          lineWidth: 2
        },
        size: 70
      };
      graph.addItem('node', modelFuncModule);
    };

    const addFunctionalModuleDashed = () => {
      let newElemUuid = uuidv4();
      console.log('[INFO] New object UUID is: ' + newElemUuid);
      ELEMENTS_STORAGE.push(newElemUuid)

      const modelFuncModuleDashed = {
        id: newElemUuid,
        x: 100,
        y: 100,
        type: 'rect',
        label: 'functional module',
        style: {
          fill: 'white',
          stroke: 'red',
          lineWidth: 2,
          lineDash: [8]
        },
        size: [120, 80]
      };
      graph.addItem('node', modelFuncModuleDashed);
    };

    const addIsolationElement = () => {
      let newElemUuid = uuidv4();
      console.log('[INFO] New object UUID is: ' + newElemUuid);
      ELEMENTS_STORAGE.push(newElemUuid)

      const modelFuncModuleDashed = {
        id: newElemUuid,
        x: 100,
        y: 100,
        type: 'rect',
        label: 'isolation element',
        style: {
          fill: 'white',
          stroke: 'blue',
          lineWidth: 4,
        },
        size: [100, 80]
      };
      graph.addItem('node', modelFuncModuleDashed);
    };


    const addComboElement = () => {
      let newElemUuid = uuidv4();
      console.log('[INFO] New object UUID is: ' + newElemUuid);
      ELEMENTS_STORAGE.push(newElemUuid)

      const modelFuncModuleDashed = {
        id: newElemUuid,

        label: 'combo',

      };
      graph.addItem('combo', modelFuncModuleDashed);
    };



    const setAddEdgeMode = () => {
      console.log('[INFO] Current elements UUIDs : ' + ELEMENTS_STORAGE);
      graph.setMode("addEdge");
      console.log(graph)
    }

    const setAddDashedEdgeMode = () => {
      console.log('[INFO] Current elements UUIDs : ' + ELEMENTS_STORAGE);
      graph.setMode("addDashedEdge");
      console.log(graph)
    }

    const setDefaultMode = () => {
      console.log('[INFO] Current elements UUIDs : ' + ELEMENTS_STORAGE);
      graph.setMode("default");
      console.log(graph)
    }
  
    return (
      <div>
          <h1>Diagrams Designer</h1> 
          <div ref={ref}>
            <button onClick={addNode}>Характерная точка 1</button>
            <button onClick={addNodeEllipse}>Характерная точка 2</button>
            <button onClick={addObject}>Объект окружения</button>
            <button onClick={addFunctionalModule}>Функциональный модуль</button>
            <button onClick={addFunctionalModuleDashed}>Функциональный модуль пунктир</button>
            <button onClick={addIsolationElement}>Элемент изоляции</button>
            <button onClick={setAddEdgeMode}>Режим добавления граней</button>
            <button onClick={setAddDashedEdgeMode}>Режим добавления прерывистых граней</button>
            <button onClick={setDefaultMode}>Режим добавления элементов</button>
            <button onClick={addComboElement}>Добавялем комбо</button>
          </div>
      </div>
    );
}

