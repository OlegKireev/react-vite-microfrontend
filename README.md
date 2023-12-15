# React - Vite Federation Demo

This example demos consumption of federated modules from a vite bundle. `root` (react based) depends on pages exposed by `homepage`, `aboutpage` apps (react based).

## Running

Run `yarn preview`. This will build and serve all the services on ports 5000, 5001, 5002 respectively.

- ROOT: [localhost:5000](http://localhost:5000/)
- HOMEPAGE: [localhost:5001](http://localhost:5001/)
- ABOUTPAGE: [localhost:5001](http://localhost:5002/)

`CTRL + C` can only stop the root server. You can run `yarn stop` to stop all services.

## Errors

### 403 error

Stop all services with `yarn stop`
