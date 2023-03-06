import { Components, Theme } from '@mui/material'
import paletteOptions from './paletteOptions'

const palette: any = paletteOptions

const componentOptions: Components<Omit<Theme, 'components'>> | undefined = {
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
}

export default componentOptions
