# React native

## To create the project we use the create react app
<https://create-react-app.dev/docs/getting-started>
### Creating a TypeScript app
```
npx create-react-app my-app --template typescript
``` 

## Hot Reload is not working in my React App

```
"scripts": {
        "start": "CHOKIDAR_USEPOLLING=true react-scripts start", //add this line
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
}
```