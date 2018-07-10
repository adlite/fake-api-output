# Fake API Output Application
![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)

Single page application for data presented in API [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/)

## Demo
[http://89.223.28.137:3050](http://89.223.28.137:3050)  

## Application built with
- [React 16](https://reactjs.org/)
- [Redux 4](https://redux.js.org/)
- [React Router 4](https://github.com/ReactTraining/react-router)
- Ejected [Create React App](https://github.com/facebook/create-react-app) as a boilerplate
- [Webpack](https://webpack.js.org/) used for compiling and bundling
- [Material UI components](https://material-ui.com/) for neat styling
- [Stylus](http://stylus-lang.com/) preprocessor
- [PostCSS](https://post-css.ru/)
- [Prettier](https://prettier.io/) code formatter
- [Templateman](https://github.com/adlite/templateman) code generating tool written by me 

## Features
1. Home page outputs posts list with infinite scroll
2. Each post contains random image from [picsum.photos](http://picsum.photos/)
3. Each post has React Router Link (without reloading) to detail page
4. Detail page outputs title, body, username (with link to user page)
5. User page must outputs name, username, email, website and phone
6. Each of described pages has correct url which takes into account pagination
7. Each page in application has error handling: 404, 5xx codes
8. Every page with data fetching caches its data and has offline mode using sessionStorage API and self-made Redux middleware

## Usage

### Development
Getting up and running for development is easy.

`git clone https://github.com/adlite/fake-api-output.git`

Install the dependencies `yarn`.   

Start development `yarn dev` and application will run on port 3000.   


### Production
Running `yarn build` below will compile application for production usage.