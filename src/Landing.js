import React, { Component } from 'react'
import features from './features'
import idea from './idea.png'
import apps from './apps.png'
import logo from './logo.png';
import Media from './Media'
import headerMp4 from './header.mp4'

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Media minWidth={668}>
            <video autoPlay="true" loop="true">
              <source type="video/mp4" src={headerMp4} />
            </video>
          </Media>
          <div className="absoluteFit">
            <img src={logo} alt=""/>
            <h1 className="title">DelightfulDev</h1>
            <h2>APP & WEB DEVELOPMENT</h2>
            <h3 className="italic">BASEL, SWITZERLAND</h3>
          </div>
        </div>

        <div className="getstarted1">
          <a href="https://delightfuldev.typeform.com/to/rGiSR9">Have an app idea? Let's get started!</a>
        </div>

        <div className="features">
          {features.map((feat, ind) => {
            return (
              <div className="feature" key={ind}>
                <img src={feat.image} alt="" />
                <h2>{feat.title}</h2>
                <p>{feat.body}</p>
              </div>
            )
          })}
        </div>

        <div className="actions">
          <div className="action" style={{backgroundColor: '#21D6B2'}}>
            <a target="_blank" href="https://delightfuldev.typeform.com/to/rGiSR9">
              <img src={idea} alt="" />
              <p>Let's make your app!</p>
            </a>
          </div>
          <div className="action" style={{backgroundColor: '#6CC4FF'}}>
            <a href="/apps">
              <img src={apps} alt="" />
              <p>Check out our apps!</p>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
