import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      [name: sting]: string;
    };

    font: {
      [name: string]: {
        'font-size': string;
        'font-weight': string;
        'line-height': string;
      };
    };
  }
}
