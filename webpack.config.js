/* eslint-disable no-undef */
const path = require(`path`);
const MomentLocalesPlugin = require(`moment-locales-webpack-plugin`);

module.exports = {
  mode: `development`,
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
      Adapters: path.resolve(__dirname, `src/adapters/`),
      Utils: path.resolve(__dirname, `src/utils/`),
      Mocks: path.resolve(__dirname, `src/mocks/`),
      Consts: path.resolve(__dirname, `src/consts/`),
      Store: path.resolve(__dirname, `src/store/`),
      Hocs: path.resolve(__dirname, `src/hocs/`),
      Components: path.resolve(__dirname, `src/components/`),
      App: path.resolve(__dirname, `src/components/app/`),
      CitiesList: path.resolve(__dirname, `src/components/cities-list/`),
      Main: path.resolve(__dirname, `src/components/main/`),
      Empty: path.resolve(__dirname, `src/components/main-empty/`),
      Map: path.resolve(__dirname, `src/components/map/`),
      NearbyList: path.resolve(__dirname, `src/components/nearby-list/`),
      NearbyCard: path.resolve(__dirname, `src/components/nearby-card/`),
      PlaceCard: path.resolve(__dirname, `src/components/place-card/`),
      PlacesList: path.resolve(__dirname, `src/components/places-list/`),
      Property: path.resolve(__dirname, `src/components/property/`),
      ReviewItem: path.resolve(__dirname, `src/components/review-item/`),
      ReviewsList: path.resolve(__dirname, `src/components/reviews-list/`),
      Sort: path.resolve(__dirname, `src/components/sort/`),
    }
  },
  plugins: [
    new MomentLocalesPlugin({
      localesToKeep: [`es-us`],
    }),
  ],
};
