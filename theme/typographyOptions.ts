import { Palette } from '@mui/material'
import { TypographyOptions } from '@mui/material/styles/createTypography'

const typographyOptions: TypographyOptions | ((palette: Palette) => TypographyOptions) | undefined =
  {
    title: {
      fontSize: '32px',
      fontWeight: 700,
    },
    button: {
      fontWeight: 'bold',
      textTransform: 'none',
    },
  }

declare module '@mui/material/styles' {
  interface TypographyVariants {
    title: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    title?: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true
  }
}

export default typographyOptions
