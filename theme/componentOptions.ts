import { Components, Theme } from '@mui/material'

const componentOptions: Components<Omit<Theme, 'components'>> | undefined = {
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
