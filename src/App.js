import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import NxtWatchContext from './context/NxtWatchContext'

import Login from './components/Login'
import Home from './components/Home'
import VideoDetailedView from './components/VideoDetailedView'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import Gaming from './components/Gaming'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

class App extends Component {
  state = {isLightMode: true, activeTab: 'Home', savedVideos: []}

  toggleMode = () => {
    this.setState(prevState => ({isLightMode: !prevState.isLightMode}))
  }

  changeActiveTab = tab => {
    this.setState({activeTab: tab})
  }

  addVideo = video => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(eachVideo => eachVideo.id === video.id)
    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  removeVideo = id => {
    const {savedVideos} = this.state
    const filterSavedList = savedVideos.filter(eachVideo => eachVideo.id !== id)

    this.setState({savedVideos: filterSavedList})
  }

  render() {
    const {isLightMode, activeTab, savedVideos} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isLightMode,
          activeTab,
          savedVideos,
          toggleMode: this.toggleMode,
          changeActiveTab: this.changeActiveTab,
          addVideo: this.addVideo,
          removeVideo: this.removeVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoDetailedView}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/notFound" component={NotFound} />
          <Redirect to="/notFound" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
