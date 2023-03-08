import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material'
import React from 'react'
import componentOptions from './componentOptions'
import paletteOptions from './paletteOptions'
import typographyOptions from './typographyOptions'

const theme = createTheme({
  palette: paletteOptions,
  components: componentOptions,
  typography: typographyOptions,
})

const ThemeProvider: React.FC<any> = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default ThemeProvider
