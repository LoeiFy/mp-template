/// <reference types="@tarojs/taro" />

declare module '*.png';
declare module '*.jpg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';

declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV: 'weapp',
    NODE_ENV: 'development' | 'production',
  }
}
