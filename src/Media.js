import React, { Component } from 'react';

class Media extends Component {
  render () {
    const width = window.innerWidth
    if (width <= this.props.maxWidth) {
      return (
        <div>
          {this.props.children}
        </div>
      )
    }
    if (width >= this.props.minWidth) {
      return (
        <div>
          {this.props.children}
        </div>
      )
    }
    return null
  }
}

export default Media
