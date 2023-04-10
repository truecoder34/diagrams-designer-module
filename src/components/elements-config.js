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
}