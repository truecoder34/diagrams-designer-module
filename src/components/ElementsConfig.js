export const initModelCircle = () => {
    const defaultModelCircle = {
        id: 'default-id',
        label: 'default-element-name',
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
        size: 100, // default element size 
    };

    return defaultModelCircle;
};

/*
[IN] model - object
[IN] name - string
[IN] sizeX - int
[IN] sizeY - int
[IN] sizeY - uid
*/
export const updateModel = (model, name, sizeX, sizeY, id) => {
    model.id = id;
    model.label = name;
    if (sizeX != 0 && sizeY != 0) {
        model.size = [sizeX, sizeY];
    }
    
    return model;
};

export const initModelEllipse = () => {
    const defaultModelEllipse = {
        id: 'default-id',
        x: 100,
        y: 100,
        type: 'ellipse',
        label: 'default-element-name',
        style: {
          fill: 'white',
          stroke: 'black',
          lineWidth: 2
        },
        size: [100, 70],
        anchorPoints: [
          [0.5, 0],
          [0, 0.5],
          [1, 0.5],
          [0.5, 1],
        ],
      };
      return defaultModelEllipse;
}

export const initModelObject = () => {
  const defaultModelObject = {
    id: 'default-id',
    x: 100,
    y: 100,
    type: 'rect',
    label: 'default-element-name',
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
      [0, 0],
      [1, 0],
      [1, 1],
      [0, 1],
    ],
  }
  return defaultModelObject;
}

export const initFunctionalModule = (isDashed) => {
  const defaultFuncModule = {
    id: 'default-id-func-module',
    x: 100,
    y: 100,
    type: 'rect',
    label: 'default-functional-module',
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
      [0, 0],
      [1, 0],
      [1, 1],
      [0, 1],
    ],
  };
  if (isDashed == true) {
    defaultFuncModule.style['lineDash'] = [8]
  }
  return defaultFuncModule;
}

export const initIsolationElement = () => {
  const defaultIsolationElemnt = {
    id: 'default-id-iso-el',
    x: 100,
      y: 100,
      type: 'rect',
      label: 'isolation element',
      style: {
        fill: 'white',
        stroke: 'blue',
        lineWidth: 4,
      },
      size: [160, 100],
      anchorPoints: [
        [0.5, 0],
        [0, 0.5],
        [1, 0.5],
        [0.5, 1],
        // angles
        [0, 0],
        [1, 0],
        [1, 1],
        [0, 1],
      ],
  }
  return defaultIsolationElemnt;
}

export const initComboElement = (isGreenColor) => {
  const comboElement = {
    id: 'default-combo-element',
    label: 'combo element',
  };
  if (isGreenColor == true) {
    comboElement['style'] = {};
    comboElement.style['stroke'] = 'green';
    comboElement.style['lineWidth'] = 4;
  }
    
  return comboElement;
}

