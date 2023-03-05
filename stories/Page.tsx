import React from 'react'
import { Stack, Typography } from '../components'

const Page: React.FC = () => {
  return (
    <>
      <Typography variant="title">Typography：</Typography>
      <Stack>
        <Typography variant="h1">h1</Typography>
        <Typography variant="h2">h2</Typography>
        <Typography variant="h3">h3</Typography>
        <Typography variant="h4">h4</Typography>
        <Typography variant="h5">h5</Typography>
        <Typography variant="h6">h6</Typography>
        <Typography variant="subtitle1">subtitle1</Typography>
        <Typography variant="subtitle2">subtitle2</Typography>
        <Typography variant="body1">body1</Typography>
        <Typography variant="body2">body2</Typography>
        <Typography variant="button">button</Typography>
        <Typography variant="caption">caption</Typography>
        <Typography variant="overline">overline</Typography>
      </Stack>
    </>
  )
}

export default Page
