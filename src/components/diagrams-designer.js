// import React, { useState } from 'react';
// import { Button, Checkbox, Form } from 'semantic-ui-react'

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import G6 from '@antv/g6';

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

import {v4 as uuidv4} from 'uuid';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';




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
            addBoldBlueEdge: ['click-add-edge-bold-blue', 'click-select'],
            addBoldPurpleEdge: ['click-add-edge-bold-purple', 'click-select'],
            addBoldYellowEdge: ['click-add-edge-bold-yellow', 'click-select'],
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

      G6.registerBehavior('click-add-edge-bold-blue', {
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
          // 拖拽过程中，点击会点击到新增的边上
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
          // 拖拽过程中，点击会点击到新增的边上
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

    const setAddBoldPurpleEdgeMode = () => {
      console.log('[INFO] Current elements UUIDs : ' + ELEMENTS_STORAGE);
      graph.setMode("addBoldPurpleEdge");
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
                      onClick={addNodeEllipse}>
              <PanoramaFishEyeIcon></PanoramaFishEyeIcon>Характерная точка. Круг 
            </Button>
            <Button  sx={{ color: 'white', '&:hover': {
                                            backgroundColor: '#59bb7b',
                                            color: "white", },
                            backgroundColor: '#477b59', 
                            borderColor: '#125b30 !important' }} 
                      onClick={addNode}> <TollIcon></TollIcon> Характерная точка. Овал </Button>
            <Button  sx={{ color: 'white','&:hover': {
                                            backgroundColor: '#59bb7b',
                                            color: "white", },
                            backgroundColor: '#125b30', 
                            borderColor: '#125b30 !important', }}  
                      onClick={addObject}> <Crop32Icon> </Crop32Icon> Объект окружения</Button>
            <Button  sx={{ color: 'white', '&:hover': {
                                            backgroundColor: '#59bb7b',
                                            color: "white", },
                            backgroundColor: '#477b59', 
                            borderColor: '#125b30 !important' }} 
                      onClick={addFunctionalModule}> <Crop75Icon> </Crop75Icon>Функциональный модуль</Button>
            <Button  sx={{ color: 'white','&:hover': {
                                            backgroundColor: '#59bb7b',
                                            color: "white", },
                            backgroundColor: '#125b30', 
                            borderColor: '#125b30 !important', }}  onClick={addFunctionalModuleDashed}> 
              <DashboardCustomizeSharpIcon></DashboardCustomizeSharpIcon> Функциональный модуль пунктир
            </Button>
            <Button  sx={{ color: 'white', '&:hover': {
                                            backgroundColor: '#59bb7b',
                                            color: "white", },
                            backgroundColor: '#477b59', 
                            borderColor: '#125b30 !important' }} 
                      onClick={addIsolationElement}> 
              <RectangleTwoToneIcon></RectangleTwoToneIcon>Элемент изоляции
            </Button>
            <Button sx={{ color: 'red','&:hover': {
                                            backgroundColor: '#59bb7b',
                                            color: "white", },
                            backgroundColor: '#125b30', 
                            borderColor: '#125b30 !important', }} 
                          onClick={addComboElement}>
                    <ImageAspectRatioIcon></ImageAspectRatioIcon>
                               Комбо</Button>
            <Button sx={{ color: '#11f36f', '&:hover': {
                                            backgroundColor: '#59bb7b',
                                            color: "white", },
                            backgroundColor: '#477b59', 
                            borderColor: '#125b30 !important' }} 
                          onClick={addComboGreenElement}>
                    <ImageAspectRatioIcon></ImageAspectRatioIcon>
                               Комбо</Button>
                               

          </ButtonGroup>
          <br/>
          <br/>

          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button sx={{ color: 'black', '&:hover': {
                                            backgroundColor: '#59bb7b',
                                            color: "white", },
                          backgroundColor: 'white', borderColor: '#125b30 !important' }} 
                    onClick={setAddEdgeMode}>Режим добавления ребер</Button>
            <Button sx={{ color: 'black', '&:hover': {
                                            backgroundColor: '#59bb7b',
                                            color: "white", },
                          backgroundColor: 'white', borderColor: '#125b30 !important' }} 
                    onClick={setAddDashedEdgeMode}>Режим добавления прерывистых ребер</Button>
            <Button sx={{ color: 'black', '&:hover': {
                                            backgroundColor: '#59bb7b',
                                            color: "white", },
                          backgroundColor: 'white', borderColor: '#125b30 !important' }} 
                    onClick={setDefaultMode}>Режим добавления элементов</Button>
          </ButtonGroup>
          <br/>
          <br/>
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button sx={{ color: 'blue', '&:hover': {
                                            backgroundColor: '#59bb7b',
                                            color: "white", },
                          backgroundColor: 'white', borderColor: '#125b30 !important' }} 
                    onClick={setAddBoldBlueEdgeMode}>
                    <DoubleArrowIcon></DoubleArrowIcon> Ребро толстое синее 
            </Button>
            <Button sx={{ color: 'purple', '&:hover': {
                                            backgroundColor: '#59bb7b',
                                            color: "white", },
                          backgroundColor: 'white', borderColor: '#125b30 !important' }} 
                    onClick={setAddBoldPurpleEdgeMode}>
                    <DoubleArrowIcon></DoubleArrowIcon> Ребро толстое фиолетовое
            </Button>
            <Button sx={{ color: '#bdba00', '&:hover': {
                                            backgroundColor: '#59bb7b',
                                            color: "white", },
                          backgroundColor: 'white', borderColor: '#125b30 !important' }} 
                    onClick={setAddBoldYellowEdgeMode}>
                      <DoubleArrowIcon></DoubleArrowIcon>Ребро толстое Желтое
            </Button>
          </ButtonGroup>

          <hr/>
          <br/>

          <div class="row">
            <div class="column-1" ref={ref} ></div>
            <div class="column-2">
              <h3>Характеристики элемента</h3>
              <form>
                <label for="fname">Название элемента</label><br/>
                <input type="text" id="fname" name="fname" value="x"/><br/>
                <label for="fname">Тип элемента</label><br/>
                <input type="text" id="fname" name="fname" value="x"/><br/>
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

