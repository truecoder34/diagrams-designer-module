// import React, { useState } from 'react';
// import { Button, Checkbox, Form } from 'semantic-ui-react'

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import G6 from '@antv/g6';
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


import { faInfo,faCircle} from '@fortawesome/free-solid-svg-icons';
//import { faRectangleWide } from '@fortawesome/free-regular-svg-icons';
//import { faRectangleWide } from '@fortawesome/free-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';


import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import TollIcon from '@mui/icons-material/Toll';
import Crop32Icon from '@mui/icons-material/Crop32';
import Crop75Icon from '@mui/icons-material/Crop75';
import DashboardCustomizeSharpIcon from '@mui/icons-material/DashboardCustomizeSharp';
import RectangleTwoToneIcon from '@mui/icons-material/RectangleTwoTone';
import ImageAspectRatioIcon from '@mui/icons-material/ImageAspectRatio';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import SubdirectoryArrowRight from '@mui/icons-material/SubdirectoryArrowRight';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


import {v4 as uuidv4} from 'uuid';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';




export default function DiagramsDesigner() {
    const ref = React.useRef(null);
    let graph = null;

    const [inputs, setInputs] = useState({});
    const [elementName, setElementName] = useState('');
    const [elementType, setElementType] = useState('');
    const [elementSizeX, setElementSizeX] = useState('');
    const [elementSizeY, setElementSizeY] = useState('');

    let ELEMENTS_STORAGE = []


    
    const handleSubmit = (event) => {
        console.log(graph)
        event.preventDefault();
        console.log(elementName, elementType, elementSizeX, elementSizeY);
    }

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
        // nodes: [
        //   {
        //     id: 'node1',
        //     x: 100,
        //     y: 200,
        //     anchorPoints: [
        //       [0, 0.3],
        //       [1, 0.7],
        //     ],
        //   },
        //   {
        //     id: 'node2',
        //     x: 200,
        //     y: 100,
        //     anchorPoints: [
        //       [0, 0.5],
        //       [1, 0.5],
        //     ],
        //   },
        //   {
        //     id: 'node3',
        //     x: 200,
        //     y: 300,
        //     anchorPoints: [
        //       [0, 0.5],
        //       [1, 0.5],
        //     ],
        //   },
        // ],
        // edges: [
        //   {
        //     id: 'edge1',
        //     target: 'node2',
        //     source: 'node1',
        //     shape: 'hvh',
        //   },
        //   {
        //     id: 'edge2',
        //     target: 'node3',
        //     source: 'node1',
        //     shape: 'hvh',
        //   },
        // ],
      };
  
    useEffect(() => {
      if (!graph) {
        graph = new G6.Graph({
          container: ReactDOM.findDOMNode(ref.current),
          width: 1200,
          height: 750,
          modes: {
            default: ['drag-canvas', 'drag-node',  'drag-combo', 'collapse-expand-combo'],
            addEdge: ['click-add-edge', 'click-select'],
            addDashedEdge: ['click-add-edge-dashed', 'click-select'],
            addBoldBlueEdge: ['click-add-edge-bold-blue', 'click-select'],
            addBoldPurpleEdge: ['click-add-edge-bold-purple', 'click-select'],
            addBoldYellowEdge: ['click-add-edge-bold-yellow', 'click-select'],
            addBoldBlueBrokenEdge: ['click-add-edge-broken-bold-blue', 'click-select'],
            addBoldPurpleBrokenEdge: ['click-add-edge-broken-bold-purple', 'click-select'],
            addBoldYellowBrokenEdge: ['click-add-edge-broken-bold-yellow', 'click-select'],
            editNoode: [ { type: 'click-select', trigger: 'ctrl', }, ]
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
        console.log('NODE IS SELECTED', item)
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
              type: 'line', //'polyline',
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
            'edge:click': 'onEdgeClick'
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
          if (this.addingEdge && this.edge == currentEdge) {
            graph.removeItem(this.edge);
            this.edge = null;
            this.addingEdge = false;
          }
        }
      });

      G6.registerBehavior('click-add-edge-broken-bold-blue', {
        getEvents() {
          return {
            'node:click': 'onClick',
            mousemove: 'onMousemove',
            'edge:click': 'onEdgeClick'
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
                stroke: 'blue',
                lineWidth: 6,
                endArrow: {
                  path: G6.Arrow.vee(10, 20, 0), // Using the built-in edges for the path, parameters are the width, length, offset (0 by default, corresponds to d), respectively
                  d: 0,
                  fill: 'black',
                  stroke: 'blue',
                  lineWidth: 6,
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
          if (this.addingEdge && this.edge == currentEdge) {
            graph.removeItem(this.edge);
            this.edge = null;
            this.addingEdge = false;
          }
        }
      });
      G6.registerBehavior('click-add-edge-bold-blue', {
        getEvents() {
          return {
            'node:click': 'onClick',
            mousemove: 'onMousemove',
            'edge:click': 'onEdgeClick'
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
                stroke: 'blue',
                lineWidth: 6,
                endArrow: {
                  path: G6.Arrow.vee(10, 20, 0), // Using the built-in edges for the path, parameters are the width, length, offset (0 by default, corresponds to d), respectively
                  d: 0,
                  fill: 'black',
                  stroke: 'blue',
                  lineWidth: 6,
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
          if (this.addingEdge && this.edge == currentEdge) {
            graph.removeItem(this.edge);
            this.edge = null;
            this.addingEdge = false;
          }
        }
      });

      G6.registerBehavior('click-add-edge-broken-bold-purple', {
        getEvents() {
          return {
            'node:click': 'onClick',
            mousemove: 'onMousemove',
            'edge:click': 'onEdgeClick'
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
                stroke: 'purple',
                lineWidth: 6,
                endArrow: {
                  path: G6.Arrow.vee(10, 20, 0), // Using the built-in edges for the path, parameters are the width, length, offset (0 by default, corresponds to d), respectively
                  d: 0,
                  fill: 'black',
                  stroke: 'purple',
                  lineWidth: 6,
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
          if (this.addingEdge && this.edge == currentEdge) {
            graph.removeItem(this.edge);
            this.edge = null;
            this.addingEdge = false;
          }
        }
      });

      G6.registerBehavior('click-add-edge-bold-purple', {
        getEvents() {
          return {
            'node:click': 'onClick',
            mousemove: 'onMousemove',
            'edge:click': 'onEdgeClick'
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
                stroke: 'purple',
                lineWidth: 6,
                endArrow: {
                  path: G6.Arrow.vee(10, 20, 0), // Using the built-in edges for the path, parameters are the width, length, offset (0 by default, corresponds to d), respectively
                  d: 0,
                  fill: 'black',
                  stroke: 'purple',
                  lineWidth: 6,
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
          if (this.addingEdge && this.edge == currentEdge) {
            graph.removeItem(this.edge);
            this.edge = null;
            this.addingEdge = false;
          }
        }
      });

      G6.registerBehavior('click-add-edge-broken-bold-yellow', {
        getEvents() {
          return {
            'node:click': 'onClick',
            mousemove: 'onMousemove',
            'edge:click': 'onEdgeClick'
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
                stroke: 'yellow',
                lineWidth: 6,
                endArrow: {
                  path: G6.Arrow.vee(10, 20, 0), // Using the built-in edges for the path, parameters are the width, length, offset (0 by default, corresponds to d), respectively
                  d: 0,
                  fill: 'black',
                  stroke: 'yellow',
                  lineWidth: 6,
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
          if (this.addingEdge && this.edge == currentEdge) {
            graph.removeItem(this.edge);
            this.edge = null;
            this.addingEdge = false;
          }
        }
      });

      G6.registerBehavior('click-add-edge-bold-yellow', {
        getEvents() {
          return {
            'node:click': 'onClick',
            mousemove: 'onMousemove',
            'edge:click': 'onEdgeClick'
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
              type: 'line',
              target: point,
              style: {
                stroke: 'yellow',
                lineWidth: 6,
                endArrow: {
                  path: G6.Arrow.vee(10, 20, 0), // Using the built-in edges for the path, parameters are the width, length, offset (0 by default, corresponds to d), respectively
                  d: 0,
                  fill: 'black',
                  stroke: 'yellow',
                  lineWidth: 6,
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
          if (this.addingEdge && this.edge == currentEdge) {
            graph.removeItem(this.edge);
            this.edge = null;
            this.addingEdge = false;
          }
        }
      });

    }, []);

    G6.registerEdge('hvh', {
      draw(cfg, group) {
        const startPoint = cfg.startPoint;
        const endPoint = cfg.endPoint;
        const shape = group.addShape('path', {
          attrs: {
            stroke: '#333',
            path: [
              ['M', startPoint.x, startPoint.y],
              ['L', endPoint.x / 3 + (2 / 3) * startPoint.x, startPoint.y], // 1/3
              ['L', endPoint.x / 3 + (2 / 3) * startPoint.x, endPoint.y], // 2/3
              ['L', endPoint.x, endPoint.y],
            ],
          },
        });
        return shape;
      },
    });
    

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
        anchorPoints: [
          [0.5, 0],
          [0, 0.5],
          [1, 0.5],
          [0.5, 1],
        ],
        // linkPoints: {
        //   top: true,
        //   right: false,
        //   bottom: true,
        //   left: false,
        //   // circle的大小
        //   size: 5,
        //   lineWidth: 1,
        //   fill: '#fff',
        //   stroke: '#1890FF'
        // },
        size : 60,

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
        size : [90, 60],
        anchorPoints: [
          [0.5, 0],
          [0, 0.5],
          [1, 0.5],
          [0.5, 1],
        ], 
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
        size: [140, 90],
        anchorPoints: [
          [0.5, 0],
          [0, 0.5],
          [1, 0.5],
          [0.5, 1],
          // angles
          [0, 0] ,
          [1, 0] ,
          [1, 1] ,
          [0, 1] ,
        ],
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
        size: [140, 90],
        anchorPoints: [
          [0.5, 0],
          [0, 0.5],
          [1, 0.5],
          [0.5, 1],
          // angles
          [0, 0] ,
          [1, 0] ,
          [1, 1] ,
          [0, 1] ,
        ],
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
        size: [140, 90],
        anchorPoints: [
          [0.5, 0],
          [0, 0.5],
          [1, 0.5],
          [0.5, 1],
          // angles
          [0, 0] ,
          [1, 0] ,
          [1, 1] ,
          [0, 1] ,
        ],
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
        size: [140, 90],
        anchorPoints: [
          [0.5, 0],
          [0, 0.5],
          [1, 0.5],
          [0.5, 1],
          // angles
          [0, 0] ,
          [1, 0] ,
          [1, 1] ,
          [0, 1] ,
        ],
        
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

    const addComboGreenElement = () => {
      let newElemUuid = uuidv4();
      console.log('[INFO] New object UUID is: ' + newElemUuid);
      ELEMENTS_STORAGE.push(newElemUuid)

      const modelComboGreen = {
        id: newElemUuid,
        style: {
          stroke: 'green',
          lineWidth: 4,
        },
        label: 'combo',

      };
      graph.addItem('combo', modelComboGreen);
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

    
    const setAddBoldBlueEdgeMode = () => {
      console.log('[INFO] Current elements UUIDs : ' + ELEMENTS_STORAGE);
      graph.setMode("addBoldBlueEdge");
      console.log(graph)
    }

    const setAddBoldBlueBrokenEdgeMode = () => {
      console.log('[INFO] Current elements UUIDs : ' + ELEMENTS_STORAGE);
      graph.setMode("addBoldBlueBrokenEdge");
      console.log(graph)
    }

    const setAddBoldPurpleEdgeMode = () => {
      console.log('[INFO] Current elements UUIDs : ' + ELEMENTS_STORAGE);
      graph.setMode("addBoldPurpleEdge");
      console.log(graph)
    }

    const setAddBoldPurpleBrokenEdgeMode = () => {
      console.log('[INFO] Current elements UUIDs : ' + ELEMENTS_STORAGE);
      graph.setMode("addBoldPurpleBrokenEdge");
      console.log(graph)
    }

    const setAddBoldYellowBrokenEdgeMode = () => {
      console.log('[INFO] Current elements UUIDs : ' + ELEMENTS_STORAGE);
      graph.setMode("addBoldYellowBrokenEdge");
      console.log(graph)
    }

    const setAddBoldYellowEdgeMode = () => {
      console.log('[INFO] Current elements UUIDs : ' + ELEMENTS_STORAGE);
      graph.setMode("addBoldYellowEdge");
      console.log(graph)
    }

    const setDefaultMode = () => {
      console.log('[INFO] Current elements UUIDs : ' + ELEMENTS_STORAGE);
      graph.setMode("default");
      console.log(graph)
    }

    function createData(name, calories, fat, carbs) {
      return { name, calories, fat, carbs };
    }

    const rows = [
      createData('1', 1, 1, 1),
      createData('2', 2, 2, 2),
    ];

  
    return (
        <div>
            <h1>Конструктор диаграмм</h1> 
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button  sx={{ color: 'white','&:hover': {
                                                backgroundColor: '#59bb7b',
                                                color: "white", },
                                backgroundColor: '#125b30', 
                                borderColor: '#125b30 !important', }} 
                        onClick={addNode}>
                    <PanoramaFishEyeIcon></PanoramaFishEyeIcon>
                    Характерная точка. Круг 
                </Button>
                <Button  sx={{ color: 'white', '&:hover': {
                                                backgroundColor: '#59bb7b',
                                                color: "white", },
                                backgroundColor: '#477b59', 
                                borderColor: '#125b30 !important' }} 
                        onClick={addNodeEllipse}> 
                        <TollIcon></TollIcon> 
                        Характерная точка. Овал 
                </Button>
                <Button  sx={{ color: 'white','&:hover': {
                                                backgroundColor: '#59bb7b',
                                                color: "white", },
                                backgroundColor: '#125b30', 
                                borderColor: '#125b30 !important', }}  
                        onClick={addObject}> 
                        <Crop32Icon> </Crop32Icon> 
                        Объект окружения
                </Button>
                <Button  sx={{ color: 'white', '&:hover': {
                                                backgroundColor: '#59bb7b',
                                                color: "white", },
                                backgroundColor: '#477b59', 
                                borderColor: '#125b30 !important' }} 
                        onClick={addFunctionalModule}> 
                        <Crop75Icon> </Crop75Icon>
                        Функциональный модуль
                </Button>
                <Button  sx={{ color: 'white','&:hover': {
                                                backgroundColor: '#59bb7b',
                                                color: "white", },
                                backgroundColor: '#125b30', 
                                borderColor: '#125b30 !important', }}  
                                onClick={addFunctionalModuleDashed}> 
                        <DashboardCustomizeSharpIcon></DashboardCustomizeSharpIcon> 
                        Функциональный модуль пунктир
                </Button>
                <Button  sx={{ color: 'white', '&:hover': {
                                                backgroundColor: '#59bb7b',
                                                color: "white", },
                                backgroundColor: '#477b59', 
                                borderColor: '#125b30 !important' }} 
                        onClick={addIsolationElement}> 
                        <RectangleTwoToneIcon></RectangleTwoToneIcon>Элемент изоляции
                </Button>
                <Button sx={{ color: '#11f36f','&:hover': {
                                                backgroundColor: '#59bb7b',
                                                color: "white", },
                                backgroundColor: '#125b30', 
                                borderColor: '#125b30 !important', }} 
                            onClick={addComboGreenElement}>
                        <ImageAspectRatioIcon></ImageAspectRatioIcon>
                                Комбо
                </Button>
                <Button sx={{ color: 'red', '&:hover': {
                                                backgroundColor: '#59bb7b',
                                                color: "white", },
                                backgroundColor: '#477b59', 
                                borderColor: '#125b30 !important' }} 
                            onClick={addComboElement}>
                        <ImageAspectRatioIcon></ImageAspectRatioIcon>
                                Комбо
                </Button>
            </ButtonGroup>
            <br/>
            <br/>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button sx={{ color: 'black', '&:hover': {
                                                backgroundColor: '#59bb7b',
                                                color: "white", },
                            backgroundColor: 'white', borderColor: '#125b30 !important' }} 
                        onClick={setAddEdgeMode}>Режим добавления ребер
                </Button>
                <Button sx={{ color: 'black', '&:hover': {
                                                backgroundColor: '#59bb7b',
                                                color: "white", },
                            backgroundColor: 'white', borderColor: '#125b30 !important' }} 
                        onClick={setAddDashedEdgeMode}>Режим добавления прерывистых ребер
                </Button>
                <Button sx={{ color: 'black', '&:hover': {
                                                backgroundColor: '#59bb7b',
                                                color: "white", },
                                backgroundColor: 'white', borderColor: '#125b30 !important' }} 
                        onClick={setDefaultMode}>Режим добавления элементов
                </Button>
            </ButtonGroup>
            <br/>
            <br/>
            <Grid container spacing={1} justifyContent="flex-start">
                <Grid item xs={4}>
                    <Grid container spacing={0.5} justifyContent="flex-start"> 
                        <Grid item xs={6}>
                            <Button sx={{ color: 'blue', backgroundColor: 'white', borderColor: '#125b30 !important' }} >
                                <DoubleArrowIcon></DoubleArrowIcon> Ребро синее 
                            </Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button sx={{ color: 'blue', '&:hover': {
                                                        backgroundColor: '#59bb7b',
                                                        color: "white", },
                                    backgroundColor: 'white', borderColor: '#125b30 !important' }} 
                                onClick={setAddBoldBlueEdgeMode}> 
                                <ArrowOutwardIcon></ArrowOutwardIcon>
                            </Button>
                        </Grid>
                        <Grid item xs={3}> 
                            <Button sx={{ color: 'blue', '&:hover': {
                                                        backgroundColor: '#59bb7b',
                                                        color: "white", },
                                    backgroundColor: 'white', borderColor: '#125b30 !important' }} 
                                onClick={setAddBoldBlueBrokenEdgeMode}> 
                                <SubdirectoryArrowRight> </SubdirectoryArrowRight> 
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid container spacing={0.5} justifyContent="flex-start"> 
                        <Grid item xs={6}>
                            <Button sx={{ color: 'purple', backgroundColor: 'white', borderColor: '#125b30 !important' }} >
                                <DoubleArrowIcon></DoubleArrowIcon> Ребро фиолетовое
                            </Button>
                        </Grid>
                        <Grid item xs={3}> 
                            <Button sx={{ color: 'purple', '&:hover': {
                                                    backgroundColor: '#59bb7b',
                                                    color: "white", },
                                    backgroundColor: 'white', borderColor: '#125b30 !important' }} 
                                onClick={setAddBoldPurpleEdgeMode}>
                                <ArrowOutwardIcon></ArrowOutwardIcon>
                            </Button>
                        </Grid>
                        <Grid item xs={3}> 
                            <Button sx={{ color: 'purple', '&:hover': {
                                                backgroundColor: '#59bb7b',
                                                color: "white", },
                                backgroundColor: 'white', borderColor: '#125b30 !important' }} 
                                onClick={setAddBoldPurpleBrokenEdgeMode}>
                                <SubdirectoryArrowRight></SubdirectoryArrowRight>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid container spacing={0.5} justifyContent="flex-start"> 
                        <Grid item xs={6}>
                            <Button sx={{ color: '#bdba00',backgroundColor: 'white', borderColor: '#125b30 !important' }} >
                                <DoubleArrowIcon></DoubleArrowIcon>Ребро желтое
                            </Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button sx={{ color: '#bdba00', '&:hover': {
                                                        backgroundColor: '#59bb7b',
                                                        color: "white", },
                                    backgroundColor: 'white', borderColor: '#125b30 !important' }} 
                                onClick={setAddBoldYellowEdgeMode}>
                                <ArrowOutwardIcon></ArrowOutwardIcon>
                            </Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button sx={{ color: '#bdba00', '&:hover': {
                                                        backgroundColor: '#59bb7b',
                                                        color: "white", },
                                    backgroundColor: 'white', borderColor: '#125b30 !important' }} 
                                onClick={setAddBoldYellowBrokenEdgeMode}>
                                <SubdirectoryArrowRight></SubdirectoryArrowRight>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


            <hr/>
            <br/>

            <div class="row">
                <div class="column-1" ref={ref}>

                </div>

                <div class="column-2">
                    <h3>Характеристики элемента</h3>
                    <form onSubmit={handleSubmit}>
                        <label for="elementLabel">Название элемента</label>
                        <br/>
                        <input
                            type="text"
                            name="elementLabel"
                            value={elementName}
                            onChange={e => setElementName(e.target.value)}
                            placeholder="Label"
                            // required
                        />
                        <br/>
                        <label for="elementType">Название элемента</label>
                        <br/>
                        <input
                            type="text"
                            name="elementType"
                            value={elementType}
                            onChange={e => setElementType(e.target.value)}
                            placeholder="Type"
                            // required
                        />
                        <br/>
                        <label for="elementSizeX">X</label>
                        <br/>
                        <input
                            type="text"
                            name="elementSizeX"
                            value={elementSizeX}
                            onChange={e => setElementSizeX(e.target.value)}
                            placeholder="X"
                            // required
                        />
                        <br/>
                        <label for="elementSizeY">Y</label>
                        <br/>
                        <input
                            type="text"
                            name="elementSizeY"
                            value={elementSizeY}
                            onChange={e => setElementSizeY(e.target.value)}
                            placeholder="Y"
                            // required
                        />
                        <br/>
                        <input type="submit" />
                    </form>
                    <br/>
                    <TableContainer component={Paper}>
                        <Table>
                        <TableHead>
                            <TableRow>            
                            <TableCell>#</TableCell>
                            <TableCell align="right">Значение</TableCell>
                            <TableCell align="right">Верхний Индекс</TableCell>
                            <TableCell align="right">Нижний Индекс</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div> 

            
        </div>
    );
}

