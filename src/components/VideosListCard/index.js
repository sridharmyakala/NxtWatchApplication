import NxtWatchContext from '../../context/NxtWatchContext'
import VideoListCard from '../VideoListCard'

import {
  VideosContainer,
  NoVideosContainer,
  NoVideosImg,
  NoVideosHeading,
  NoVideoDescription,
  NoVideosRetryButton,
} from './styledComponent'

const VideosListCard = props => {
  const {videosList, onRetry} = props
  const videosLength = videosList.length
  console.log(videosLength)

  const onClickRetryBtn = () => {
    onRetry()
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isLightMode} = value
        const headingColor = isLightMode ? '#1e293b' : '#f1f5f9'
        const descriptionColor = isLightMode ? '#475569' : '#e2e8f0'

        return videosLength > 0 ? (
          <VideosContainer>
            {videosList.map(eachVideoList => (
              <VideoListCard key={eachVideoList.id} videoList={eachVideoList} />
            ))}
          </VideosContainer>
        ) : (
          <NoVideosContainer>
            <NoVideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideosHeading color={headingColor}>
              No Search results found
            </NoVideosHeading>
            <NoVideoDescription color={descriptionColor}>
              Try different key words or remove search filter
            </NoVideoDescription>
            <NoVideosRetryButton type="button" onClick={onClickRetryBtn}>
              Retry
            </NoVideosRetryButton>
          </NoVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideosListCard
