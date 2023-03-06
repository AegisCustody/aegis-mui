import React from 'react'
import { Stack, Typography } from '../components'

const Page: React.FC = () => {
  return (
    <Stack gap="8px">
      <Typography variant="title">Typography</Typography>

      <Typography variant="h1">h1.Heading</Typography>
      <Typography variant="body1">
        body1.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
        suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2">
        body2.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
        suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="link">link.TEXT</Typography>
      <Typography variant="hint">hint.TEXT</Typography>
      <Typography variant="title">title.TEXT</Typography>
      <Typography variant="subtitle">
        subtitle.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
      <Typography variant="menuType">menuType.TEXT</Typography>
      <Typography variant="menuItem">menuItem.TEXT</Typography>
    </Stack>
  )
}

export default Page
