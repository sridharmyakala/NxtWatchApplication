import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import NxtWatchContext from '../../context/NxtWatchContext'
import VideosListCard from '../VideosListCard'
import Header from '../Header'
import FailureView from '../FailureView'
import NavbarMenu from '../NavbarMenu'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {
  HomeContainer,
  BannerContainer,
  BannerLeft,
  BannerImg,
  BannerText,
  BannerButton,
  BannerRight,
  BannerCloseButton,
  SearchContainer,
  SearchInput,
  SearchIconContainer,
  LoaderContainer,
} from './styledComponent'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstant.initial,
    videosList: [],
    display: 'flex',
    searchInput: '',
  }

  componentDidMount() {
    this.getVideosList()
  }

  onClickCloseBtn = () => {
    this.setState({display: 'none'})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchIconBtn = () => {
    this.getVideosList()
  }

  getVideosList = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const fetchedData = await response.json()

      const updateData = fetchedData.videos.map(eachList => ({
        id: eachList.id,
        title: eachList.title,
        thumbnailUrl: eachList.thumbnail_url,
        name: eachList.channel.name,
        profileImageUrl: eachList.channel.profile_image_url,
        viewCount: eachList.view_count,
        publishedAt: eachList.published_at,
      }))
      this.setState({
        videosList: updateData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideosList)
  }

  renderSuccessView = () => {
    const {videosList} = this.state

    return <VideosListCard videosList={videosList} onRetry={this.onRetry} />
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderHomeVideosView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderSuccessView()
      case apiStatusConstant.failure:
        return this.renderFailureView()
      case apiStatusConstant.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {searchInput, display} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isLightMode} = value
          const bgColor = isLightMode ? '#f9f9f9' : '#181818'
          const textColor = isLightMode ? '#231f20' : '#f9f9f9'
          return (
            <>
              <Header />
              <NavbarMenu />
              <HomeContainer data-testid="home" bgColor={bgColor}>
                <BannerContainer display={display} data-testid="banner">
                  <BannerLeft>
                    <BannerImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />
                    <BannerText>
                      Buy Nxt Watch Premium prepaid plans with <br /> UPI
                    </BannerText>
                    <BannerButton>GET IT NOW</BannerButton>
                  </BannerLeft>
                  <BannerRight>
                    <BannerCloseButton
                      data-testid="close"
                      type="button"
                      onClick={this.onClickCloseBtn}
                    >
                      <AiOutlineClose size={25} />
                    </BannerCloseButton>
                  </BannerRight>
                </BannerContainer>
                <SearchContainer>
                  <SearchInput
                    type="search"
                    placeholder="Search"
                    value={searchInput}
                    color={textColor}
                    onChange={this.onChangeSearchInput}
                  />
                  <SearchIconContainer
                    onClick={this.onClickSearchIconBtn}
                    data-testid="searchButton"
                  >
                    <AiOutlineSearch size={20} color="#909090" />
                  </SearchIconContainer>
                </SearchContainer>
                {this.renderHomeVideosView()}
              </HomeContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
