import { Component } from 'react';

class Media extends Component {
  render () {
    const width = window.innerWidth
    if (width <= this.props.maxWidth) {
      return this.props.children
    }
    if (width >= this.props.minWidth) {
      return this.props.children
    }
    return null
  }
}

export default Media
