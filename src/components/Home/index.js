import {Component} from 'react'
import Header from '../Header'
import InstaStory from '../InstaStory'
import InstaPosts from '../InstaPosts'
import DataContext from '../../context/DataContext'
import './index.css'

class Home extends Component {
  render() {
    return (
      <DataContext.Consumer>
        {value => {
          const {searchPosts} = value
          return (
            <div className="home_container">
              <Header />
              <InstaStory />
              <InstaPosts searchPosts={searchPosts} />
            </div>
          )
        }}
      </DataContext.Consumer>
    )
  }
}
export default Home
