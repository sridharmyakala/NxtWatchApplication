import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'

import NxtWatchContext from '../../context/NxtWatchContext'

import './index.css'

import {
  ListItemContainer,
  ThumbnailImg,
  VideoDetails,
  ProfileImg,
  ContentDetails,
  Title,
  ChannelName,
  ViewsAndDate,
  Dot,
} from './styledComponent'

const VideoListCard = props => {
  const {videoList} = props

  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = videoList

  const yearsAt = formatDistanceToNow(new Date(publishedAt))

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isLightMode} = value
        const textColor = isLightMode ? '#231f20' : '#f9f9f9'

        return (
          <Link to={`/videos/${id}`} className="navLink">
            <ListItemContainer>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <ProfileImg src={profileImageUrl} alt="channel logo" />
                <ContentDetails>
                  <Title color={textColor}>{title}</Title>
                  <ChannelName color={textColor}>{name}</ChannelName>
                  <ViewsAndDate color={textColor}>
                    {viewCount} views <Dot> &#8226; </Dot>
                    {yearsAt}
                  </ViewsAndDate>
                </ContentDetails>
              </VideoDetails>
            </ListItemContainer>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoListCard
