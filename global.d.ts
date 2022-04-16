/// <reference types="@tarojs/taro" />

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';

declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV: 'weapp' | 'h5'
  }
}
