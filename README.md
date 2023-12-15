# React - Vite Federation Demo

This example demos consumption of federated modules from a vite bundle. `root` (react based) depends on pages exposed by `homepage`, `aboutpage` apps (react based).

## Running

Run `yarn dev`. This runs dev versions of all the services.

> Warning!
> In this mode, it's impossible to show all the applications together, because vite/webpack module federation plugin works only after the build stage. You have to use `yarn preview` to see how the application looks completely.

- ROOT: [localhost:5000](http://localhost:5000/)
- HOMEPAGE: [localhost:5001](http://localhost:5001/)
- ABOUTPAGE: [localhost:5001](http://localhost:5002/)

Run `yarn preview`. This will build and serve all the services on ports 5000, 5001, 5002 respectively.

`CTRL + C` can only stop the root server. You can run `yarn stop` to stop all services.

## Errors

### 403 error

Stop all services with `yarn stop`
