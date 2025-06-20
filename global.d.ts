declare module '*.png' {
    const value: import('react-native').ImageSourcePropType;
    export default value;
  }

  declare module '*.mp3' {
    const src: string;
    export default src;
  }