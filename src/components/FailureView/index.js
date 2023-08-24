import NxtWatchContext from '../../context/NxtWatchContext'

import {
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  FailureRetryBtn,
} from './styledComponent'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isLightMode} = value
        const headingColor = isLightMode ? '#1e293b' : '#f1f5f9'
        const descriptionColor = isLightMode ? '#475569' : '#e2e8f0'

        const failureImageUrl = isLightMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

        return (
          <FailureContainer>
            <FailureImage src={failureImageUrl} alt="failure view" />
            <FailureHeading color={headingColor}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription color={descriptionColor}>
              We are having some trouble to complete your request. <br /> Please
              try again later.
            </FailureDescription>
            <FailureRetryBtn type="button" onClick={onClickRetry}>
              Retry
            </FailureRetryBtn>
          </FailureContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default FailureView
