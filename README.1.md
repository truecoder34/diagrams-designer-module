# Setup the project

Create react app:
```npx create-react-app d-designer-electron-react```

Add Elecntron into react app 
```yarn add electron```

Create entry point in electron app in package.json
```
    "main":"main.js",
```

## Dependencies
Add tool to run electron startup and react startup at the same time
```yarn add concurrently```

```yarn add wait-on```


New script to combine two starts
```
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "electron-react":"concurrently\"BROWSER=none npm start\" \"wait-on http://localhost:3000 && electron .\""
  },
```

Copy main.js from https://github.com/electron/electron-quick-start/blob/master/main.js and 
Replace 
 ```
    mainWindow.loadFile('index.html') ---to--> 
    mainWindow.loadURL('http://localhost:3000')
```


npm start
npm run electron-dev

```npm run electron-react```


IPC = interprocess conubication = connect index.js with main.js
```yarn add @electron/remote```


Source:: https://blog.codemagic.io/building-electron-desktop-apps-with-react/
```yarn add axios swr apexcharts react-apexcharts```


### CRUD SETUP
https://www.freecodecamp.org/news/how-to-perform-crud-operations-using-react/



$ npm run electron-react