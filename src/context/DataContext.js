import React from 'react'

const DataContext = React.createContext({
  searchText: '',
  isSearchButtonClicked: false,
  setLoading: false,
  isFailure: false,
  resetFailure: () => {},
  setFailure: () => {},
  setSearchButton: () => {},
  updateLoading: () => {},
  upDateSearchText: () => {},
  resetSearchButton: () => {},
  postsData: [],
  setPostsData: () => {},
  initiateSearchPostLikeApi: () => {},
})
export default DataContext
