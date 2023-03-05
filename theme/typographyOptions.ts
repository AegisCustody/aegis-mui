import { Palette } from '@mui/material'
import { TypographyOptions } from '@mui/material/styles/createTypography'

const typographyOptions: TypographyOptions | ((palette: Palette) => TypographyOptions) | undefined =
  {
    button: {
      fontWeight: 'bold',
      textTransform: 'none',
    },
  }

export default typographyOptions
