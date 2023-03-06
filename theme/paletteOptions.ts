import { PaletteOptions } from '@mui/material'

const paletteOptions: PaletteOptions | undefined = {
  primary: {
    main: '#4BADD8',
  },
  secondary: {
    main: '#005E85',
  },
  tertiary: {
    main: '#9DD0F0',
  },
  success: {
    main: '#31D0AA',
  },
  stroke: {
    main: '#DCDEDF',
  },
  error: {
    main: '#FF0000',
  },
  reject: {
    main: '#E1125E',
  },
  menu: {
    main: '#818181',
  },
  text: {
    primary: '#414141',
    secondary: '#A1A1A1',
  },
  background: {
    default: '#FAFCFE',
  },
}

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary']
    reject: Palette['primary']
    stroke: Palette['primary']
    menu: Palette['primary']
  }

  interface PaletteOptions {
    tertiary: PaletteOptions['primary']
    reject: PaletteOptions['primary']
    stroke: PaletteOptions['primary']
    menu: PaletteOptions['primary']
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true
    reject: true
    stroke: true
    menu: true
  }
}

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    tertiary: true
    reject: true
    stroke: true
    menu: true
  }
}

export default paletteOptions
