import type { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  color: {
    primary: {
      blue: {
        blue_50: '#F8FDFF',
        blue_100: '#F0FBFF',
        blue_200: '#DEF5FF',
        blue_300: '#ACE5FC',
        blue_400: '#70D0F6',
        blue_500: '#2DB8F3',
        blue_600: '#199EE9',
      },
    },
    basic: {
      black: '#000000',
      white: '#ffffff',
    },
    system: {
      error: '#D30D00',
      success: '#1BC20C',
    },
    grayScale: {
      gray_100: '#F8F6F4',
      gray_200: '#EFEDEA',
      gray_300: '#DDDAD7',
      gray_400: '#C2C0BD',
      gray_500: '#B6BCC7',
      gray_600: '#959290',
      gray_700: '#787573',
      gray_800: '#484746',
      gray_900: '#31302F',
    },
  },
};
