import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard } from '../index.js'

const Videos = ({ videos, direction = 'row' }) => {
  if (!videos?.length) return 'Loading...'

  return (
    <Stack direction={direction} flexWrap='wrap' justifyContent='start' gap={2}>
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId ? <VideoCard video={item} /> : null}
          {item.id.channelId ? <ChannelCard channelDetail={item} /> : null}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos
