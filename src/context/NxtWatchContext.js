import React from 'react'

const NxtWatchContext = React.createContext({
  isLightMode: true,
  activeTab: '',
  savedVideos: '',
  addVideo: () => {},
  changeActiveTab: () => {},
  toggleMode: () => {},
  removeVideo: () => {},
})

export default NxtWatchContext
