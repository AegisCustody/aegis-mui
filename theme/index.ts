import { createTheme } from '@mui/material'
import paletteOptions from './paletteOptions'
import typographyOptions from './typographyOptions'

const theme = createTheme({
  palette: paletteOptions,
  typography: typographyOptions,
})

export default theme
