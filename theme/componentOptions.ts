import { Components, createTheme, Theme } from '@mui/material'
import paletteOptions from './paletteOptions'

const palette: any = paletteOptions

const { breakpoints } = createTheme()

const componentOptions: Components<Omit<Theme, 'components'>> | undefined = {
  MuiCard: {
    styleOverrides: {
      root: {
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: '30px',
        '&:last-child': {
          paddingBottom: '30px',
        },
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        minHeight: '40px',
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
        '&.MuiButton-text': {
          minHeight: 'fit-content',
          padding: 0,
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
        '&.MuiButton-containedPrimary': {
          color: 'white',
        },
        '&.MuiButton-outlinedSecondary': {
          border: `1px solid ${palette.secondary.main}`,
        },
      },
    },
  },
  MuiButtonBase: {
    styleOverrides: {
      root: {
        '&.Mui-disabled': {
          cursor: 'not-allowed',
          pointerEvents: 'auto',
        },
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        display: 'grid',
        gap: '30px',
        padding: '60px',
        textAlign: 'center',
        [breakpoints.down('md')]: {
          padding: '30px',
        },
      },
    },
  },
}

export default componentOptions
