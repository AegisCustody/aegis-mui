import { createTheme, Palette } from '@mui/material'
import { TypographyOptions } from '@mui/material/styles/createTypography'

const { breakpoints } = createTheme()

const typographyOptions:
  | TypographyOptions
  | ((palette: Palette) => TypographyOptions)
  | undefined = theme => ({
  h1: {
    fontSize: '32px',
    fontWeight: 700,
    lineHeight: '38px',
    [breakpoints.down('md')]: {
      fontSize: '24px',
    },
  },
  body1: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '16px',
  },
  body2: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.5,
  },
  button: {
    fontWeight: 'bold',
    textTransform: 'none',
  },
  link: {
    fontWeight: 'bold',
    color: theme.primary.main,
  },
  hint: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: 1.4,
  },
  title: {
    fontSize: '32px',
    fontWeight: 700,
    lineHeight: '38px',
    [breakpoints.down('md')]: {
      fontSize: '24px',
    },
  },
  subtitle: {
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '19px',
    [breakpoints.down('md')]: {
      fontSize: '14px',
    },
  },
  menuType: {
    fontSize: '10px',
    fontWeight: 900,
    lineHeight: '12px',
    letterSpacing: '0.2em',
  },
  menuItem: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '16px',
  },
})

declare module '@mui/material/styles' {
  interface TypographyVariants {
    link: React.CSSProperties
    hint: React.CSSProperties
    title: React.CSSProperties
    subtitle: React.CSSProperties
    menuType: React.CSSProperties
    menuItem: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    link?: React.CSSProperties
    hint?: React.CSSProperties
    title?: React.CSSProperties
    subtitle?: React.CSSProperties
    menuType?: React.CSSProperties
    menuItem?: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    link: true
    hint: true
    title: true
    subtitle: true
    menuType: true
    menuItem: true
  }
}

export default typographyOptions
