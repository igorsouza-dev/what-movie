# What Movie?

<div align="center">
  <img src="demo.gif" />
</div>

## Overview

This is a React App that allows the user to search for his favorite movies using the data available from the [TMDB](https://www.themoviedb.org/).

The app also features watchlist and favorites that are stored only locally using a Redux store.

## Setting up

### Requirements

- [Node.js](https://nodejs.org/en/download/)
- [Npm](https://www.npmjs.com/get-npm)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/#debian-stable) - This is optional but in this readme I'll be using it on some CLI commands, you can use npm if you want.

### Dependencies

- [React.js](https://reactjs.org/) - JavaScript library for building user interfaces
- [Axios](https://github.com/axios/axios) - Promise based HTTP client
- [Prop-Types](https://github.com/facebook/prop-types) - Runtime type checking for React props.
- [Styled Components](https://styled-components.com/) - Library that lets you write actual CSS inside JavaScript
- [Redux](https://redux.js.org/) - Predictable state container for JavaScript apps.
- [React Redux](https://react-redux.js.org/) - Official React binding for Redux.
- [React Icons](https://react-icons.netlify.com/) - Icons library
- [React Router Dom](https://reacttraining.com/react-router/web/guides/quick-start) - DOM bindings for React Router.

### Dev Dependencies

- [Eslint](https://eslint.org) - Ecmascript linter
- [Prettier](https://prettier.io) - Code formatter
- [React Testing library](https://testing-library.com/docs/react-testing-library/intro) - Light-weight solution for testing React components

## Installing

All you need to do is run `yarn` at the root of the project in order to install the dependencies.

## Configuring the API

First, you have to copy the contents of the file `.env.example` to a `.env` file, you will notice that the variable `REACT_APP_TMDB_TOKEN` is empty. That token is essencial to the app because it is used to make the requests to the TMDB REST server. To generate this token, you must first sign up [here]() and then, go [here](https://www.themoviedb.org/settings/api), look for the **API Read Access Token (v4 auth)**. Inform in the `.env` file and you are ready to go.

## Running

Run the command `yarn start` for a developer environment or `yarn build` to generate the production build.

## License

This is a open-sourced software licensed under the [MIT license](LICENSE.md).
