const path = require(`path`);

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`),
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    open: true,
    inline: false,
    port: 1337,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      }
    ],
  },
  devtool: `source-map`,
  resolve: {
    alias: {
      Utils: path.resolve(__dirname, `src/utils/`),
      Mocks: path.resolve(__dirname, `src/mocks/`),
      Consts: path.resolve(__dirname, `src/consts`),
      Components: path.resolve(__dirname, `src/components/`),
      App: path.resolve(__dirname, `src/components/app/`),
      Main: path.resolve(__dirname, `src/components/main/`),
      Map: path.resolve(__dirname, `src/components/map/`),
      PlaceCard: path.resolve(__dirname, `src/components/place-card/`),
      PlacesList: path.resolve(__dirname, `src/components/places-list/`),
      Property: path.resolve(__dirname, `src/components/property/`),
      Review: path.resolve(__dirname, `src/components/review/`),
      ReviewList: path.resolve(__dirname, `src/components/review-list`)
    }
  },
};
