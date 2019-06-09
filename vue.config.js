module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
   ? '/vue-pwa-demo/'
   : '/',
  // ...其它 vue-cli 插件选项...
  pwa: {
    name: 'My App',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // 配置 workbox 插件
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      include: [/\.html$/,/\.css$/, /\.js$/,/\.(?:png|webp|jpeg|gif)$/],
      importWorkboxFrom: 'local',
      skipWaiting: true,
      clientsClaim: true,

      // ...其它 Workbox 选项...
    }
  }
}
