const path = require("path");

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      components: path.resolve(__dirname, "src/components/"),
      configuration: path.resolve(__dirname, "src/configuration/"),
      hooks: path.resolve(__dirname, "src/hooks/"),
      models: path.resolve(__dirname, "src/models/"),
      utils: path.resolve(__dirname, "src/utils/")
    }
  };

  return config;
};
