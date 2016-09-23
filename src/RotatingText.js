import React, { Component } from 'react'
import './RotatingText.css'
import './css/animate.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class RotatingText extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0,
    }

    this.nextIndex = this.nextIndex.bind(this)
  }

  nextIndex() {
    var index = this.state.currentIndex
    if (index + 1 >= this.props.texts.length) {
      index = 0
    } else {
      index++
    }
    return index
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        currentIndex: this.nextIndex()
      })
    }, 2000)
  }

  render() {
    const currentIndex = this.state.currentIndex
    const text = this.props.texts[currentIndex]
    var invisibleText = text
    return (
      <span style={{position: 'relative'}}>
        <p className="invisible">{invisibleText}</p>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={700}
          transitionLeaveTimeout={500}>
          <p key={text} className="rotatingText">{text}</p>
        </ReactCSSTransitionGroup>
      </span>
    )
  }
}

export default RotatingText
