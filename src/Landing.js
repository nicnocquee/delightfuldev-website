import React, { Component } from 'react'
import { Link } from 'react-router'
import features from './features'
import idea from './idea.png'
import apps from './apps.png'
import logo from './logo.png';
import Media from './Media'

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Media minWidth={668}>
            <video autoPlay="true" loop="true">
              <source type="video/mp4" src="https://www.dropbox.com/s/6o1b3yl7qg3vmfm/01.mp4?dl=1" />
            </video>
          </Media>
          <div className="absoluteFit">
            <img src={logo} />
            <h1 className="title">DelightfulDev</h1>
            <h2>APP & WEB DEVELOPMENT</h2>
            <h3 className="italic">BASEL, SWITZERLAND</h3>
          </div>
        </div>

        <div className="getstarted1">
          <a href="#">Have an app idea? Let's get started!</a>
        </div>

        <div className="features">
          {features.map((feat, ind) => {
            return (
              <div className="feature" key={ind}>
                <img src={feat.image} />
                <h2>{feat.title}</h2>
                <p>{feat.body}</p>
              </div>
            )
          })}
        </div>

        <div className="actions">
          <div className="action" style={{backgroundColor: '#21D6B2'}}>
            <a target="_blank" href="https://delightfuldev.typeform.com/to/rGiSR9">
              <img src={idea} />
              <p>Let's make your app!</p>
            </a>
          </div>
          <div className="action" style={{backgroundColor: '#6CC4FF'}}>
            <Link to="/apps">
              <img src={apps} />
              <p>Check out our apps!</p>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
