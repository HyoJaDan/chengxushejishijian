import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: {
        blue: {
          blue_50: string;
          blue_100: string;
          blue_200: string;
          blue_300: string;
          blue_400: string;
          blue_500: string;
          blue_600: string;
        };
      };
      basic: {
        black: string;
        white: string;
      };
      system: {
        error: string;
        success: string;
      };
      grayScale: {
        gray_100: string;
        gray_200: string;
        gray_300: string;
        gray_400: string;
        gray_500: string;
        gray_600: string;
        gray_700: string;
        gray_800: string;
        gray_900: string;
      };
    };
  }
}
