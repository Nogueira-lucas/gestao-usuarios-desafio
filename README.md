# CrudUsuarios

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

![tela-gestao](./src/evidences/print-crud-usuarios.png)

![tela-cadastro](./src/evidences/print-crud-usuarios-2.png)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Start Json-Server

To get json-server just run `json-server --watch db.json --port 8080` into project directory.

## Json-server Routes

  Http Method | Path
  ------------|---------
  GET         | /users
  GET         | /users/{id}
  POST        | /users
  PUT         | /users/{id}
  DELETE      | /users/{id}

