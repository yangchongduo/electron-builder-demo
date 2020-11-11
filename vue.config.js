module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        appId: 'com.vincent.electron-builder',
        productName: 'ElectronBuilderDemo',
        copyright: 'Copyright © 2020 electron-builder Demo',
        win: {
          target: [
            'nsis', // 打包为nsis安装文件
            'zip' // 打包为安装文件zip
          ]
        },
        nsis: {
          oneClick: false, // 是否一键安装
          allowToChangeInstallationDirectory: true // 允许用户选择安装位置
        },
        publish: [
          {
            "provider":"github",
            "owner":"yangchongduo",
            "publishAutoUpdate": true ,
            "releaseType": "release",
            "token":"a6ce2b33b478db56a16db114d25fd9699519325f"
          }
          // {
          //   provider: 'generic',
          //   url: 'http://qiniucdn.tianlinyong.cn/app/'
          // }
        ]
      }
    }
  }
}
