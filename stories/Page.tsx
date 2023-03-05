import React from 'react'
import { Stack, Typography } from '../components'

const Page: React.FC = () => {
  return (
    <>
      <Typography variant="title">Typography：</Typography>
      <Stack>
        <Typography variant="h1">h1</Typography>
        <Typography variant="body1">body1</Typography>
        <Typography variant="body2">body2</Typography>
        <Typography variant="link">link</Typography>
        <Typography variant="hint">hint</Typography>
        <Typography variant="title">title</Typography>
        <Typography variant="subtitle">subtitle</Typography>
        <Typography variant="menuType">menuType</Typography>
        <Typography variant="menuItem">menuItem</Typography>
      </Stack>
    </>
  )
}

export default Page
