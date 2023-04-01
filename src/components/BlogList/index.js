import {Component} from 'react'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  render() {
    const {blogsList} = this.props

    return blogsList.map(eachItem => (
      <BlogItem eachItem={eachItem} key={eachItem.id} />
    ))
  }
}

export default BlogList
