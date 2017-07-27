# Express Starter

Create Node apps using the Express framework with zero initial configuration. `express-starter` is built using [Neutrino](https://github.com/mozilla-neutrino/neutrino-dev) to harness the power of Webpack with the simplicity of [presets](https://neutrino.js.org/presets/). 
 
## Features

- Zero upfront configuration necessary to start developing and building an Express project
- Extends from [neutrino-preset-node](https://neutrino.js.org/presets/neutrino-preset-node/)
  - Modern Babel compilation supporting ES modules, Node.js 6.10+, async functions, and dynamic imports
  - Supports automatically-wired sourcemaps
  - Tree-shaking to create smaller bundles
  - Hot Module Replacement with source-watching during development
  - Chunking of external dependencies apart from application code
  - Easily extensible to customize your project as needed

## Requirements

- Node.js v6.10+
- Yarn or npm client

## Installation

To get you started fork and clone the `express-starter` repository and install the dependencies using Yarn or the npm client.

```bash
❯ cd express-starter/
❯ yarn
```

## Quick start

Start the app with `yarn start`, then open a browser to `http://localhost:3000`.

### Yarn

```bash
❯ yarn start
✔ Build completed
Running on :3000
```

### npm

```bash
❯ npm run start
✔ Build completed
Running on :3000
```

## Building

`express-starter` builds static assets to the `build` directory by default when running `yarn build`.

```bash
❯ yarn build
✔ Building project completed
Hash: d37197f792ebd4b79477
Version: webpack 2.3.2
Time: 755ms
       Asset     Size  Chunks             Chunk Names
    index.js  3.97 kB       0  [emitted]  index
index.js.map  3.83 kB       0  [emitted]  index
✨  Done in 2.60s.
```

## Running Tests

In order to keep this starter kit minimalist, `express-starter` has no test runner configured, however adding one is incredible easy with Neutrino. Refer to the [relevant section on building and running tests](https://neutrino.js.org/usage.html#building-and-running-tests). 

## Customizing

To override the build configuration, start with the documentation on [customization](https://neutrino.js.org/customization/). `neutrino-preset-node` creates some conventions to make overriding the configuration easier once you are ready to make changes.

By default the Node.js preset creates a single **main** `index` entry point to your application, and this maps to the `index.js` file in the `src` directory. This means that the Node.js preset is optimized toward a main entry to your app. Code not imported in the hierarchy of the `index` entry will not be output to the bundle. To overcome this you must either define more entry points, or import the code path somewhere along the `index` hierarchy.

### Vendoring

`express-starter` uses `neutrino-preset-node`. The latter automatically vendors all external dependencies into a separate chunk based on their inclusion in your `package.json`. No extra work is required to make this work.

### Rules

Refer to the [list of rules and their identifers](https://neutrino.js.org/presets/neutrino-preset-node/#rules) which can be overridden.

### Plugins

Refer to the [list of plugins and their identifiers](https://neutrino.js.org/presets/neutrino-preset-node/#plugins) which can be overridden.

### Override configuration

By following the [customization guide](https://neutrino.js.org/customization/) and knowing the rule, loader, and plugin IDs above, you can override and augment the build by by providing a function to your `.neutrinorc.js` use array. You can also make these changes from the Neutrino API in custom middleware.

_Example: Allow importing modules with an `.mjs` extension._

```js
module.exports = {
  use: [
    'neutrino-preset-node',
    (neutrino) => neutrino.config.resolve.extensions.add('.mjs')
  ]
};
```

## Contributing

Thank you for wanting to help out with Neutrino! We are very happy that you want to contribute, and have put together the [contributing guide](https://neutrino.js.org/contributing/#contributing) to help you get started. We want to do our best to help you make successful contributions and be part of our community.
