const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#564e58",
              "@text-color": "#564e58",
              "@text-color-secondary": "#564e58",
              "@layout-header-background": "#564e58",
              "@layout-body-background": "#f9dec9",
              "@layout-footer-background": "#564e58",
              "@layout-header-color": "#f9dec9",
              "@menu-bg": "#564e58",
              "@menu-item-color": "#f9dec9",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
