const fs = require('fs');
const path = require('path');
const paths = require('./paths');
const resolve = require('resolve');
const ForkTsCheckerWebpackPlugin = require('react-dev-utils/ForkTsCheckerWebpackPlugin');
const useTypeScript = fs.existsSync(paths.appTsConfig);

module.exports = {
  entry: './dev/bootstrap.main.ts',
  output: {
    path: path.resolve(__dirname, '../dev'),
    filename: 'bootstrap.main.js',
    library: 'bootstrap',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  externals: {

  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  target: 'electron-main',
  node: {
    __dirname: false
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
      },
  
    ],
  },
  plugins: [
    // TypeScript type checking
    useTypeScript &&
      new ForkTsCheckerWebpackPlugin({
        typescript: resolve.sync('typescript', {
          basedir: paths.appNodeModules,
        }),
        async: true,
        useTypescriptIncrementalApi: true,
        checkSyntacticErrors: true,
        resolveModuleNameModule: process.versions.pnp
          ? `${__dirname}/pnpTs.js`
          : undefined,
        resolveTypeReferenceDirectiveModule: process.versions.pnp
          ? `${__dirname}/pnpTs.js`
          : undefined,
        tsconfig: paths.appTsConfig,
        silent: true,
      }),
  ].filter(Boolean),
};
