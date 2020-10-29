# @brightsign/bs-ui-template

## Available Scripts
In the project directory, you can run:

### npm run package-link
Links globally installed `node_modules`. i.e. \
typescript, webpack

### npm run package-install
Installs `node_modules` without `devDependencies`

### `npm run start-*`
Runs the application in the development mode.\

#### `*-browser`
Open [http://localhost:3000](http://localhost:3000) to \
view it in the browser.

#### `*-electron`
The electron client will automatically start

The application will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.

### `npm run build-electron-main"
Rebuilds the electron main process application. \
Please note that the template default includes \
following insecure electron window settings:

`nodeIntegration`: true,
`webSecurity`: false

These parameters should be considered before deploying \
this electron to production \
see https://electronjs.org/docs/tutorial/security.

### `npm run package-submodule`
Builds the app for production to the `dist` folder.\

It correctly bundles React in production mode and \
optimizes the build for the best performance.

The build is minified and the filenames include the \
hashes with default artifact chunk strategy if applicable

A package type declaration file will also be compiled\
 to index.d.ts

#### `dist/electron`
Includes the module distribution intended to be \
consumed by an electron based container application

#### `dist/browser`
Includes the module distribution intended to be \
consumed by a web based container application

#### `dist/standalone`
Includes the module distribution container application \
intended web framework (i.e. electron, chrome, roHtmlWidget)
