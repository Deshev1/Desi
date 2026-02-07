# Desi's children's camps website

## Target resolutions

Currently, the application is desktop only. In the future, it will be tablet and mobile friendly with fully responsive design. The target resolutions can be found below.

### Desktop

1440x900

## Change detection

The app will be zoneless, no longer relying on Zone.js but rather, mainly on signal based state management.

In turn, NgRx will use signal stores, instead of the regular store provided by the library.

## State management

The app will rely on NgRx signal stores for managing state.

## Components

For some components, the app will rely on PrimeNg as it provides a suite of prebuilt components that can be further customized based on the app's requirements.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```
