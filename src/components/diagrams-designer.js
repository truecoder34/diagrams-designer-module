// import React, { useState } from 'react';
// import { Button, Checkbox, Form } from 'semantic-ui-react'

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import G6 from '@antv/g6';
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


import { faInfo, faCircle } from '@fortawesome/free-solid-svg-icons';
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


import { v4 as uuidv4 } from 'uuid';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';


import {initModelCircle, initModelEllipse, 
  initModelObject, initFunctionalModule, initIsolationElement,
  initComboElement, updateModel} from "./elements-config"





export default function DiagramsDesigner() {
  const ref = React.useRef(null);
  const graph = React.useRef(null);
  //let graph = null;

  const initialList = [
    {
      id: 'a',
      name: 'Robin',
    },
    {
      id: 'b',
      name: 'Dennis',
    },
  ];

  const graphStorageInitial = []
  const [listStorage, setListStorage] = React.useState(graphStorageInitial);


  const [elementName, setElementName] = useState('');
  const [elementType, setElementType] = useState('');
  const [elementSizeX, setElementSizeX] = useState('');
  const [elementSizeY, setElementSizeY] = useState('');
  const [elementUpperIndex, setElementUpperIndex] = useState('');
  const [elementLowerIndex, setElementLowerIndex] = useState('');
  const [elementSemanticDescription, setElementSemanticDescription] = useState('');



  const [list, setList] = React.useState(initialList);
  const [name, setName] = React.useState('');




  // ***************** example start *****************
  function handleChange(event) {
    setName(event.target.value);
  }
  function handleAdd() {
    const newList = list.concat({ name, id: uuidv4() });
    setList(newList);
    setName('');
  }
  // ***************** example finish *****************




  const ELEMENTS_STORAGE = []

  const handleSubmitButton = (event) => {
    console.log(graph)
    event.preventDefault();
    console.log(elementName, elementType, elementSizeX, elementSizeY);
  }

  const data = {
    id: 'root',
  };




  useEffect(() => {
    if (!graph.current) {
      graph.current = new G6.Graph({
        container: ReactDOM.findDOMNode(ref.current),
        width: 1200,
        height: 750,
        modes: {
          default: ['drag-canvas', 'drag-node', 'drag-combo', 'collapse-expand-combo'],
          addEdge: ['click-add-edge', 'click-select'],
          addDashedEdge: ['click-add-edge-dashed', 'click-select'],
          addBoldBlueEdge: ['click-add-edge-bold-blue', 'click-select'],
          addBoldPurpleEdge: ['click-add-edge-bold-purple', 'click-select'],
          addBoldYellowEdge: ['click-add-edge-bold-yellow', 'click-select'],
          addBoldBlueBrokenEdge: ['click-add-edge-broken-bold-blue', 'click-select'],
          addBoldPurpleBrokenEdge: ['click-add-edge-broken-bold-purple', 'click-select'],
          addBoldYellowBrokenEdge: ['click-add-edge-broken-bold-yellow', 'click-select'],
          editNoode: [{ type: 'click-select', trigger: 'ctrl', },]
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
    graph.current.data(data);
    graph.current.render();

    graph.current.on('node:mouseenter', (evt) => {
      const { item } = evt;
      graph.current.setItemState(item, 'active', true);
    });
    graph.current.on('node:mouseleave', (evt) => {
      const { item } = evt;
      graph.current.setItemState(item, 'active', false);
    });
    graph.current.on('node:click', (evt) => {
      const { item } = evt;
      graph.current.setItemState(item, 'selected', true);
      console.log('NODE IS SELECTED', item)
    });
    graph.current.on('canvas:click', (evt) => {
      graph.current.getNodes().forEach((node) => {
        graph.current.clearItemStates(node);
      });
    });


    graph.current.on('combo:mouseenter', (evt) => {
      const { item } = evt;
      graph.current.setItemState(item, 'active', true);
    });
    graph.current.on('combo:mouseleave', (evt) => {
      const { item } = evt;
      graph.current.setItemState(item, 'active', false);
    });
    graph.current.on('combo:click', (evt) => {
      const { item } = evt;
      graph.current.setItemState(item, 'selected', true);
    });
    graph.current.on('canvas:click', (evt) => {
      graph.current.getCombos().forEach((combo) => {
        graph.current.clearItemStates(combo);
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
          // graph.current.setItemState(this.edge, 'selected', true);
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
          // graph.current.setItemState(this.edge, 'selected', true);
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
            type: 'line',
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
            type: 'line',
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

  console.log("---GRAPH INIT", graph);

  const setElementsEmpty = () => {
    setElementName('');
    setElementType('');
    setElementSizeX('');
    setElementSizeY('');
    setElementUpperIndex('')
    setElementLowerIndex('')
    setElementSemanticDescription('')
  }

  const addNode = () => {
    console.log("GRAPH BEFORE", graph)
    let newElemUuid = uuidv4();
    const newListStorage = listStorage.concat({
      name: elementName,
      type: elementType,
      x: elementSizeX,
      y: elementSizeY,
      id: newElemUuid,
      lowerIndex: elementLowerIndex,
      upperIndex: elementUpperIndex,
      semanticDescription: elementSemanticDescription
    });
    setListStorage(newListStorage);

    setElementsEmpty();
    
    let mc = initModelCircle();
    let mc_upd = updateModel(mc, elementName, elementSizeX, elementSizeY,newElemUuid)

    graph.current.addItem('node', mc_upd);
  };

  const addNodeEllipse = () => {
    console.log("GRAPH BEFORE", graph)
    let newElemUuid = uuidv4();
    console.log('[INFO] New node ellipse UUID is: ' + newElemUuid);

    const newListStorage = listStorage.concat({
      name: elementName,
      type: elementType,
      x: elementSizeX,
      y: elementSizeY,
      id: newElemUuid,
      lowerIndex: elementLowerIndex,
      upperIndex: elementUpperIndex,
      semanticDescription: elementSemanticDescription
    });
    setListStorage(newListStorage);

    setElementsEmpty();

    let me = initModelEllipse();
    let me_upd = updateModel(me, elementName, elementSizeX, 
                          elementSizeY, newElemUuid);

    graph.current.addItem('node', me_upd);
  };

  const addObject = () => {
    let newElemUuid = uuidv4();
    console.log('[INFO] New object UUID is: ' + newElemUuid);
    ELEMENTS_STORAGE.push(newElemUuid)
    const newListStorage = listStorage.concat({
      name: elementName,
      type: elementType,
      x: elementSizeX,
      y: elementSizeY,
      id: newElemUuid,
      lowerIndex: elementLowerIndex,
      upperIndex: elementUpperIndex,
      semanticDescription: elementSemanticDescription
    });
    setListStorage(newListStorage);

    setElementsEmpty();

    let mo = initModelObject();
    let mo_upd = updateModel(mo, elementName, elementSizeX, 
                          elementSizeY, newElemUuid);
    graph.current.addItem('node', mo_upd);
  };

  const addFunctionalModule = () => {

    let newElemUuid = uuidv4();
    console.log('[INFO] New object UUID is: ' + newElemUuid);
    const newListStorage = listStorage.concat({
      name: elementName,
      type: elementType,
      x: elementSizeX,
      y: elementSizeY,
      id: newElemUuid,
      lowerIndex: elementLowerIndex,
      upperIndex: elementUpperIndex,
      semanticDescription: elementSemanticDescription
    });
    setListStorage(newListStorage);

    setElementsEmpty();

    let mf = initFunctionalModule(false);
    let mf_upd = updateModel(mf, elementName, elementSizeX, 
                          elementSizeY, newElemUuid);

    graph.current.addItem('node', mf_upd);
  };

  const addFunctionalModuleDashed = () => {
    let newElemUuid = uuidv4();
    console.log('[INFO] New object (Functional Moduke Dashed) UUID is: ' + newElemUuid);
    const newListStorage = listStorage.concat({
      name: elementName,
      type: elementType,
      x: elementSizeX,
      y: elementSizeY,
      id: newElemUuid,
      lowerIndex: elementLowerIndex,
      upperIndex: elementUpperIndex,
      semanticDescription: elementSemanticDescription
    });
    setListStorage(newListStorage);

    setElementsEmpty();
    let mf = initFunctionalModule(true);
    let mf_upd = updateModel(mf, elementName, elementSizeX, 
                          elementSizeY, newElemUuid);

    graph.current.addItem('node', mf_upd);
  };

  const addIsolationElement = () => {
    let newElemUuid = uuidv4();
    console.log('[INFO] New object UUID is: ' + newElemUuid);
    const newListStorage = listStorage.concat({
      name: elementName,
      type: elementType,
      x: elementSizeX,
      y: elementSizeY,
      id: newElemUuid,
      lowerIndex: elementLowerIndex,
      upperIndex: elementUpperIndex,
      semanticDescription: elementSemanticDescription
    });
    setListStorage(newListStorage);
    setElementsEmpty();

    let ioe = initIsolationElement();
    let ioe_upd = updateModel(ioe, elementName, elementSizeX, 
                          elementSizeY, newElemUuid);

    graph.current.addItem('node', ioe_upd);
  };


  const addComboElement = () => {
    let newElemUuid = uuidv4();
    console.log('[INFO] New combo element UUID is: ' + newElemUuid);
    const newListStorage = listStorage.concat({
      name: elementName,
      type: elementType,
      x: elementSizeX,
      y: elementSizeY,
      id: newElemUuid,
      lowerIndex: elementLowerIndex,
      upperIndex: elementUpperIndex,
      semanticDescription: elementSemanticDescription
    });
    setListStorage(newListStorage);
    setElementsEmpty();
    let ce = initComboElement(false);
    let ce_upd = updateModel(ce, elementName, elementSizeX, 
      elementSizeY, newElemUuid);

    graph.current.addItem('combo', ce_upd);
  };

  const addComboGreenElement = () => {
    let newElemUuid = uuidv4();
    console.log('[INFO] New combo (green) element UUID is: ' + newElemUuid);
    const newListStorage = listStorage.concat({
      name: elementName,
      type: elementType,
      x: elementSizeX,
      y: elementSizeY,
      id: newElemUuid,
      lowerIndex: elementLowerIndex,
      upperIndex: elementUpperIndex,
      semanticDescription: elementSemanticDescription
    });
    setListStorage(newListStorage);
    setElementsEmpty();
    let ce = initComboElement(true);
    let ce_upd = updateModel(ce, elementName, elementSizeX, 
      elementSizeY, newElemUuid);

    graph.current.addItem('combo', ce_upd);
  };


  const setUserMode = (mode) => {
    console.log("[INFO] set mode - ", mode)
    if (graph.current != null) {
      graph.current.setMode(mode);
    }
    console.log("[DEBUG] graph", graph)
  }





  return (
    <div>
      <h3>Конструктор диаграмм</h3>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button sx={{
          color: 'white', '&:hover': {
            backgroundColor: '#59bb7b',
            color: "white",
          },
          backgroundColor: '#125b30',
          borderColor: '#125b30 !important',
        }}
          onClick={addNode}>
          <PanoramaFishEyeIcon></PanoramaFishEyeIcon>
          Характерная точка. Круг
        </Button>
        <Button sx={{
          color: 'white', '&:hover': {
            backgroundColor: '#59bb7b',
            color: "white",
          },
          backgroundColor: '#477b59',
          borderColor: '#125b30 !important'
        }}
          onClick={addNodeEllipse}>
          <TollIcon></TollIcon>
          Характерная точка. Овал
        </Button>
        <Button sx={{
          color: 'white', '&:hover': {
            backgroundColor: '#59bb7b',
            color: "white",
          },
          backgroundColor: '#125b30',
          borderColor: '#125b30 !important',
        }}
          onClick={addObject}>
          <Crop32Icon> </Crop32Icon>
          Объект окружения
        </Button>
        <Button sx={{
          color: 'white', '&:hover': {
            backgroundColor: '#59bb7b',
            color: "white",
          },
          backgroundColor: '#477b59',
          borderColor: '#125b30 !important'
        }}
          onClick={addFunctionalModule}>
          <Crop75Icon> </Crop75Icon>
          Функциональный модуль
        </Button>
        <Button sx={{
          color: 'white', '&:hover': {
            backgroundColor: '#59bb7b',
            color: "white",
          },
          backgroundColor: '#125b30',
          borderColor: '#125b30 !important',
        }}
          onClick={addFunctionalModuleDashed}>
          <DashboardCustomizeSharpIcon></DashboardCustomizeSharpIcon>
          Функциональный модуль пунктир
        </Button>
        <Button sx={{
          color: 'white', '&:hover': {
            backgroundColor: '#59bb7b',
            color: "white",
          },
          backgroundColor: '#477b59',
          borderColor: '#125b30 !important'
        }}
          onClick={addIsolationElement}>
          <RectangleTwoToneIcon></RectangleTwoToneIcon>Элемент изоляции
        </Button>
        <Button sx={{
          color: '#11f36f', '&:hover': {
            backgroundColor: '#59bb7b',
            color: "white",
          },
          backgroundColor: '#125b30',
          borderColor: '#125b30 !important',
        }}
          onClick={addComboGreenElement}>
          <ImageAspectRatioIcon></ImageAspectRatioIcon>
          Комбо
        </Button>
        <Button sx={{
          color: 'red', '&:hover': {
            backgroundColor: '#59bb7b',
            color: "white",
          },
          backgroundColor: '#477b59',
          borderColor: '#125b30 !important'
        }}
          onClick={addComboElement}>
          <ImageAspectRatioIcon></ImageAspectRatioIcon>
          Комбо
        </Button>
      </ButtonGroup>
      <br />
      <br />
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button sx={{
          color: 'black', '&:hover': {
            backgroundColor: '#59bb7b',
            color: "white",
          },
          backgroundColor: 'white', borderColor: '#125b30 !important'
        }}
          onClick={() => setUserMode("addEdge")}>Режим добавления ребер
        </Button>
        <Button sx={{
          color: 'black', '&:hover': {
            backgroundColor: '#59bb7b',
            color: "white",
          },
          backgroundColor: 'white', borderColor: '#125b30 !important'
        }}
          onClick={() => setUserMode("addDashedEdge")}>Режим добавления прерывистых ребер
        </Button>
        <Button sx={{
          color: 'black', '&:hover': {
            backgroundColor: '#59bb7b',
            color: "white",
          },
          backgroundColor: 'white', borderColor: '#125b30 !important'
        }}
          onClick={() => setUserMode("default")}>Режим добавления элементов
        </Button>
      </ButtonGroup>
      <br />
      <br />



      <Grid container spacing={1} justifyContent="flex-start">
        <Grid item xs={4}>
          <Grid container spacing={0.5} justifyContent="flex-start">
            <Grid item xs={6}>
              <Button sx={{ color: 'blue', backgroundColor: 'white', borderColor: '#125b30 !important' }} >
                <DoubleArrowIcon></DoubleArrowIcon> Ребро синее
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button sx={{
                color: 'blue', '&:hover': {
                  backgroundColor: '#59bb7b',
                  color: "white",
                },
                backgroundColor: 'white', borderColor: '#125b30 !important'
              }}
                onClick={() => setUserMode("addBoldBlueEdge")}>
                <ArrowOutwardIcon></ArrowOutwardIcon>
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button sx={{
                color: 'blue', '&:hover': {
                  backgroundColor: '#59bb7b',
                  color: "white",
                },
                backgroundColor: 'white', borderColor: '#125b30 !important'
              }}
                onClick={() => setUserMode("addBoldBlueBrokenEdge")}>
                <SubdirectoryArrowRight> </SubdirectoryArrowRight>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container spacing={0.5} justifyContent="flex-start">
            <Grid item xs={6}>
              <Button sx={{
                color: 'purple',
                backgroundColor: 'white',
                borderColor: '#125b30 !important'
              }}  >
                <DoubleArrowIcon></DoubleArrowIcon> Ребро фиолетовое
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button sx={{
                color: 'purple', '&:hover': {
                  backgroundColor: '#59bb7b',
                  color: "white",
                },
                backgroundColor: 'white', borderColor: '#125b30 !important'
              }}
                onClick={() => setUserMode("addBoldPurpleEdge")}>
                <ArrowOutwardIcon></ArrowOutwardIcon>
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button sx={{
                color: 'purple', '&:hover': {
                  backgroundColor: '#59bb7b',
                  color: "white",
                },
                backgroundColor: 'white', borderColor: '#125b30 !important'
              }}
                onClick={() => setUserMode("addBoldPurpleBrokenEdge")}>
                <SubdirectoryArrowRight></SubdirectoryArrowRight>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container spacing={0.5} justifyContent="flex-start">
            <Grid item xs={6}>
              <Button sx={{ color: '#bdba00', backgroundColor: 'white', borderColor: '#125b30 !important' }} >
                <DoubleArrowIcon></DoubleArrowIcon>Ребро желтое
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button sx={{
                color: '#bdba00', '&:hover': {
                  backgroundColor: '#59bb7b',
                  color: "white",
                },
                backgroundColor: 'white', borderColor: '#125b30 !important'
              }}
                onClick={() => setUserMode("addBoldYellowEdge")}>
                <ArrowOutwardIcon></ArrowOutwardIcon>
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button sx={{
                color: '#bdba00', '&:hover': {
                  backgroundColor: '#59bb7b',
                  color: "white",
                },
                backgroundColor: 'white', borderColor: '#125b30 !important'
              }}
                onClick={() => setUserMode("addBoldYellowBrokenEdge")}>
                <SubdirectoryArrowRight></SubdirectoryArrowRight>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>


      <hr />
      <br />

      <div class="row">
        <div class="column-1" ref={ref}>

        </div>

        <div class="column-2">

          <Grid container spacing={0} justifyContent="flex-start">
            <h3>Характеристики элемента</h3>
            <form onSubmit={handleSubmitButton}>
              <Grid item xs={12}>
                <Grid container spacing={0.5} justifyContent="flex-start">
                  <Grid item xs={6}>
                    <label for="elementLabel">Название элемента</label>
                    <br />
                    <input
                      type="text"
                      name="elementLabel"
                      value={elementName}
                      onChange={e => setElementName(e.target.value)}
                      placeholder="Label"
                    // required
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <label for="elementType">Тип элемента</label>
                    <br />
                    <input
                      type="text"
                      name="elementType"
                      value={elementType}
                      onChange={e => setElementType(e.target.value)}
                      placeholder="Type"
                    // required
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <label for="elementSizeX">X</label>
                    <br />
                    <input
                      type="number"
                      name="elementSizeX"
                      value={elementSizeX}
                      onChange={e => setElementSizeX(e.target.value)}
                      placeholder="X"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <label for="elementSizeY">Y</label>
                    <br />
                    <input
                      type="number"
                      name="elementSizeY"
                      value={elementSizeY}
                      onChange={e => setElementSizeY(e.target.value)}
                      placeholder="Y"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <label for="elementUpperIndex">Верхний индекс</label>
                    <br />
                    <input
                      type="text"
                      name="elementUpperIndex"
                      value={elementUpperIndex}
                      onChange={e => setElementUpperIndex(e.target.value)}
                      placeholder="Верхний индекс"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <label for="elementLowerIndex">Нижний индекс</label>
                    <br />
                    <input
                      type="text"
                      name="elementLowerIndex"
                      value={elementLowerIndex}
                      onChange={e => setElementLowerIndex(e.target.value)}
                      placeholder="Нижний индекс"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <label for="elementSemanticDescription"> Семантическое описание</label>
                    <br />
                    <input
                      type="text"
                      name="elementSemanticDescription"
                      value={elementSemanticDescription}
                      onChange={e => setElementSemanticDescription(e.target.value)}
                      placeholder="Семантическое описание"
                    />
                  </Grid>

                </Grid>
              </Grid>
            </form>
          </Grid>

          <br />
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell align="right"> ID</TableCell>
                  <TableCell align="right">Имя</TableCell>
                  <TableCell align="right">Тип</TableCell>
                  <TableCell align="right">Размеры</TableCell>
                  <TableCell align="right">Верхний и.</TableCell>
                  <TableCell align="right">Нижний и.</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {listStorage.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">{row.id}</TableCell>
                    <TableCell align="right">{row.id}</TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.type}</TableCell>
                    <TableCell align="right">{row.x} : {row.y}</TableCell>
                    <TableCell align="right">{row.upperIndex}</TableCell>
                    <TableCell align="right">{row.lowerIndex}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <br/>
                    <br/> */}

        </div>
      </div>


    </div>
  );
}

