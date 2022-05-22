// console.log(process.env.TARO_ENV)

export default {
  pages: [
    'pages/order/index',
    'pages/index/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  // tabBar: {
  //   backgroundColor: '#fff',
  //   selectedColor: '#5096fc',
  //   list: [
  //     {
  //       pagePath: 'pages/index/index',
  //       iconPath: 'images/_home.png',
  //       selectedIconPath: 'images/home.png',
  //       text: '购票',
  //     },
  //     {
  //       pagePath: 'pages/order/index',
  //       iconPath: 'images/_order.png',
  //       selectedIconPath: 'images/order.png',
  //       text: '订单',
  //     },
  //     // {
  //     //   pagePath: 'pages/index/index',
  //     //   iconPath: 'images/_user.png',
  //     //   selectedIconPath: 'images/user.png',
  //     //   text: '我的',
  //     // },
  //   ],
  // },
}
