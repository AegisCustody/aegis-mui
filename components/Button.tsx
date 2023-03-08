import MuiButton from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const Button = styled(MuiButton)(({ theme }) => ({
  minHeight: '40px',
  boxShadow: 'none',
  '&:hover': {
    boxShadow: 'none',
  },
  '&.Mui-disabled': {
    cursor: 'not-allowed',
    pointerEvents: 'auto',
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
    border: `1px solid ${theme.palette.secondary.main}`,
  },
}))

export default Button
