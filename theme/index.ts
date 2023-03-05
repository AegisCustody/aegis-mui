import { createTheme } from '@mui/material'
import componentOptions from './componentOptions'
import paletteOptions from './paletteOptions'
import typographyOptions from './typographyOptions'

const theme = createTheme({
  palette: paletteOptions,
  components: componentOptions,
  typography: typographyOptions,
})

export default theme
