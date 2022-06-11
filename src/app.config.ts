// console.log(process.env.TARO_ENV)

export default {
  pages: [
    'pages/index/index',
    'pages/order/index',
    'pages/my/index',
    'pages/next/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    backgroundColor: '#fff',
    selectedColor: '#5096fc',
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: 'images/_home.png',
        selectedIconPath: 'images/home.png',
        text: 'Home',
      },
      {
        pagePath: 'pages/order/index',
        iconPath: 'images/_order.png',
        selectedIconPath: 'images/order.png',
        text: 'Order',
      },
      {
        pagePath: 'pages/my/index',
        iconPath: 'images/_user.png',
        selectedIconPath: 'images/user.png',
        text: 'User',
      },
    ],
  },
}
