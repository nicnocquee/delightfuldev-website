import React, { Component } from 'react'
import { Link } from 'react-router'
import Showcase from './showcase'
import Media from './Media'

class Apps extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedCategory: 'all',
      cols: 3
    }

    this.handleResize = this.handleResize.bind(this)
  }

  handleResize(e) {
    if (window.innerWidth > 768) {
      this.setState({cols: 3})
    } else if (window.innerWidth > 667) {
      this.setState({cols: 2})
    } else {
      this.setState({cols: 1})
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  render() {

    const apps = (this.state.selectedCategory === 'all') ? Showcase : Showcase.filter(a => a.categories.indexOf(this.state.selectedCategory) !== -1)
    var rows = []
    var currentRow = []
    for (var i = 0; i < apps.length; i++) {
      currentRow.push(apps[i])
      if ((i+1) % this.state.cols === 0) {
        rows.push(currentRow)
        currentRow = []
      } else if (i === apps.length - 1) {
        rows.push(currentRow)
      }
    }
    const isSelected = {
      all: this.state.selectedCategory === 'all',
      iphone: this.state.selectedCategory === 'iphone',
      web: this.state.selectedCategory === 'web',
      mac: this.state.selectedCategory === 'mac',
      game: this.state.selectedCategory === 'game',
    }
    const categories = (
      <div className="categories">
        <a href="#" className={(isSelected.all === false ? "normal": "")} onClick={e => { this.setState({selectedCategory: 'all'}) }}>All</a>
        <a href="#" className={(isSelected.mac === false ? "normal": "")} onClick={e => { this.setState({selectedCategory: 'mac'}) }}>Mac</a>
        <a href="#" className={(isSelected.iphone === false ? "normal": "")} onClick={e => { this.setState({selectedCategory: 'iphone'}) }}>iPhone</a>
        <a href="#" className={(isSelected.game === false ? "normal": "")} onClick={e => { this.setState({selectedCategory: 'game'}) }}>Game</a>
        <a href="#" className={(isSelected.web === false ? "normal": "")} onClick={e => { this.setState({selectedCategory: 'web'}) }}>Web</a>
      </div>
    )
    return (
      <div>
        <div className="bar">
          <div className="inner">
            <Link to="/">DelightfulDev</Link>
            <Media minWidth={668}>
              {categories}
            </Media>
            <a href="https://delightfuldev.typeform.com/to/rGiSR9">Make your app</a>
          </div>
          <Media maxWidth={667}>
            <div className="inner">
              <div className="categories">
                <a href="#" className={(isSelected.all === false ? "normal": "")} onClick={e => { this.setState({selectedCategory: 'all'}) }}>All</a>
                <a href="#" className={(isSelected.mac === false ? "normal": "")} onClick={e => { this.setState({selectedCategory: 'mac'}) }}>Mac</a>
                <a href="#" className={(isSelected.iphone === false ? "normal": "")} onClick={e => { this.setState({selectedCategory: 'iphone'}) }}>iPhone</a>
                <a href="#" className={(isSelected.game === false ? "normal": "")} onClick={e => { this.setState({selectedCategory: 'game'}) }}>Game</a>
                <a href="#" className={(isSelected.web === false ? "normal": "")} onClick={e => { this.setState({selectedCategory: 'web'}) }}>Web</a>
              </div>
            </div>
          </Media>
        </div>

        <div className="appsContainer">
          {rows.map((row, index) => {
            return (
              <div className={(index === 0) ? "apps" : "apps appsNotFirstRow"} key={index}>
                {row.map((app, index2) => {
                  return (
                    <div key={index2} className="app">
                      <a href={app.url}>
                        <img src={app.icon} alt=""/>
                        <h2>{app.title}</h2>
                        <h3>{app.subtitle}</h3>
                        <h4>{app.categories.join(', ').toUpperCase()}</h4>
                      </a>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>


      </div>
    )
  }
}

export default Apps
