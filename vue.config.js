const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    preprocessorOptions: {
      scss: {
        adtionalData: `@import "../assets/scss/global.scss";`,
      },
    },
  },
});
