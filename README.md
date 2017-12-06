
An example react-redux-saga CRUD application

# react-redux-crud

An example CRUD application for managing blog posts. Built with [React](https://reactjs.org/), [Redux](https://redux.js.org/) and [Redux Saga](https://redux-saga.js.org/) on the client side. The REST API server was generated with [loopback.io](http://loopback.io/) and uses an in-memory database at runtime (persisting the models in a flat db.json file).

## How to install

```bash
git clone git@github.com:maprihoda/react-redux-crud.git
cd react-redux-crud
```

In terminal 1:

```bash
cd server
yarn install
```

In terminal 2:

```bash
cd client
yarn install
```

## How to run

In terminal 1:

```bash
yarn start
```

This launches a backend API server listening at http://localhost:3001. You can browse the REST API at http://localhost:3001/explorer. To browse the API with Postman, import the server/react-redux-crud.postman_collection.json file.

In terminal 2:

```bash
yarn start
```

You can now view the client SPA in the browser.

    Local:            http://localhost:3000/
    On Your Network:  http://10.0.0.32:3000/


## License

The MIT License (MIT)
