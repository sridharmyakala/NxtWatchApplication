import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'
import NavbarMenu from '../NavbarMenu'
import NxtWatchContext from '../../context/NxtWatchContext'
import SavedVideoCard from '../SavedVideoCard'

import {
  SavedContainer,
  SavedTitleIconContainer,
  SavedVideoTitle,
  SavedVideoList,
  SavedText,
  NoSavedVideosView,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosNote,
} from './styledComponent'

const SavedVideos = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isLightMode, savedVideos} = value

      const bgColor = isLightMode ? '#f9f9f9' : '#0f0f0f'
      const textColor = isLightMode ? '#231f20' : '#f9f9f9'
      const headingColor = isLightMode ? '##1e293b' : '#f1f5f9'
      const noteColor = isLightMode ? '#475569' : '#e2e8f0'

      return (
        <>
          <Header />
          <NavbarMenu />
          <SavedContainer data-testid="savedVideos" bgColor={bgColor}>
            <SavedVideoTitle>
              <SavedTitleIconContainer>
                <CgPlayListAdd size={35} color="#ff0000" />
              </SavedTitleIconContainer>
              <SavedText color={textColor}>Saved Videos</SavedText>
            </SavedVideoTitle>
            {savedVideos.length > 0 ? (
              <SavedVideoList>
                {savedVideos.map(eachVideo => (
                  <SavedVideoCard key={eachVideo.id} videoDetails={eachVideo} />
                ))}
              </SavedVideoList>
            ) : (
              <NoSavedVideosView>
                <NoSavedVideosImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoSavedVideosHeading headingColor={headingColor}>
                  No saved videos found
                </NoSavedVideosHeading>
                <NoSavedVideosNote noteColor={noteColor}>
                  You can save your videos while watching them
                </NoSavedVideosNote>
              </NoSavedVideosView>
            )}
          </SavedContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideos
