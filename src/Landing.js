import React, { Component } from 'react'
import { Link } from 'react-router'
import features from './features'
import idea from './idea.png'
import apps from './apps.png'
import logo from './logo.png';
import Media from './Media'
import headerMp4 from './header.mp4'
import RotatingText from './RotatingText'

class Landing extends Component {
  render() {
    const texts = [
      'a Photos app',
      'a Fitness app',
      'a Social app',
      'a Puzzle game',
      'a Lifestyle app',
      'an Education app',
      'a Music app',
      'a Finance app',
      'a Sleeping app',
      'a Children game app'
    ]
    const typeformLink = "https://delightfuldev.typeform.com/to/rGiSR9"
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

        <div className="getstarted1" onClick={e => {document.location.href=typeformLink}}>
          <a href={typeformLink}>Have {<RotatingText texts={texts} />} idea? <span className="letsgetstarted">Let's get started!</span></a>
        </div>

        <div className="features">
          {features.map((feat, ind) => {
            return (
              <div className="feature" key={ind}>
                <img src={feat.image} alt="" />
                <h2>{feat.title}</h2>
                <p dangerouslySetInnerHTML={{__html: feat.body}} />
              </div>
            )
          })}
        </div>

        <div className="actions">
          <div className="action" style={{backgroundColor: '#21D6B2'}}>
            <a target="_blank" href={typeformLink}>
              <img src={idea} alt="" />
              <p>Let's make your app!</p>
            </a>
          </div>
          <div className="action" style={{backgroundColor: '#6CC4FF'}}>
            <Link to="/apps">
              <img src={apps} alt="" />
              <p>Check out our apps!</p>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
