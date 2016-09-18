import React, { Component } from 'react'
import { Link } from 'react-router'

import Showcase from './showcase'

class AppPage extends Component {

  render() {
    const app = Showcase.filter(a => a.id === this.props.params.name)[0]
    return (
      <div className="app_page">
        <div className="bar">
          <div className="inner">
            <Link to="/">DelightfulDev</Link>
            <a href="/apps">Apps</a>
          </div>
        </div>
        <div className="content">
          <img src={app.icon} />
          <h1>{app.title}</h1>
          <h2>{app.subtitle}</h2>
          {<app.content />}
        </div>
      </div>
    )
  }
}

export default AppPage
