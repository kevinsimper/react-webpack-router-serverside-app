# React.js isomorphic app

This is a barebone mininal version of server-side client-side rendering app
with React.js and Webpack.

This is related to my presentation about Isomorphic Apps

https://isomorphic-apps.surge.sh/

## Features

- React.js
- Babel
- Sass/CSS Modules
- Live-reloading
- Image-loading

## How does it work

It uses two webpack configs:

- Frontend
- Backend

It does that because our node.js app is not a only node.js anymore when we do:

```
require styles from './styles.scss'
```
This needs to be transpiled and therefore we have two. But this also introduces new problems such as source-maps.

## Get started

Run in the first terminal

```
npm run watch
```

after that

```
npm start
```
