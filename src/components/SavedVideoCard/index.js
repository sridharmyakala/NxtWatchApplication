import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import NxtWatchContext from '../../context/NxtWatchContext'

import './index.css'

import {
  TrendingListItem,
  TrendingThumbNailImage,
  TrendingVideoDetails,
  TrendingProfileImage,
  TrendingContentSection,
  TrendingTitle,
  TrendingChannelName,
  TrendingViewsAndDate,
  TrendingDot,
  SavedContainer,
  RemoveButton,
} from './styledComponent'

const SavedVideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = videoDetails

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isLightMode, removeVideo} = value
        const textColor = isLightMode ? '#231f20' : '#f9f9f9'

        const removeSavedVideo = () => {
          removeVideo(id)
        }
        return (
          <>
            <SavedContainer>
              <Link to={`/videos/${id}`} className="link">
                <TrendingListItem>
                  <TrendingThumbNailImage
                    src={thumbnailUrl}
                    alt="video thumbnail"
                  />
                  <TrendingVideoDetails>
                    <TrendingProfileImage
                      src={profileImageUrl}
                      alt="channel logo"
                    />
                    <TrendingContentSection>
                      <TrendingTitle color={textColor}>{title}</TrendingTitle>
                      <TrendingChannelName color={textColor}>
                        {name}
                      </TrendingChannelName>
                      <TrendingViewsAndDate color={textColor}>
                        {viewCount} views<TrendingDot> &#8226; </TrendingDot>
                        {formatDistanceToNow(new Date(publishedAt))}
                      </TrendingViewsAndDate>
                    </TrendingContentSection>
                  </TrendingVideoDetails>
                </TrendingListItem>
              </Link>
              <RemoveButton type="button" onClick={removeSavedVideo}>
                Remove
              </RemoveButton>
            </SavedContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default SavedVideoCard
