const path = require("path");
const { getLoader, loaderByName } = require("@craco/craco");
const modulePath = path.join(__dirname, "../module");
const module2Path = path.join(__dirname, "../module2");
const componentsPath = path.join(__dirname, "../components");
module.exports = {
  webpack: {
    alias: {},
    plugins: [],
    configure: (webpackConfig, { env, paths }) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName("babel-loader")
      );
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];
        match.loader.include = include.concat(modulePath, module2Path, componentsPath);
      }
      return webpackConfig;
    }
  }
};