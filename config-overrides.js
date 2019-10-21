const { override, fixBabelImports,useBabelRc,addDecoratorsLegacy,disableEsLint } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  }),
  useBabelRc(),
  addDecoratorsLegacy(),
);