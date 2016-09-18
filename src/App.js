import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import features from './features'
import idea from './idea.png'
import apps from './apps.png'
import Media from './Media'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <Media minWidth={415}>
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
            <img src={idea} />
            <p>Let's make your app!</p>
          </div>
          <div className="action" style={{backgroundColor: '#6CC4FF'}}>
            <img src={apps} />
            <p>Check out our apps!</p>
          </div>
        </div>

        <div className="footer">
          <a target="_blank" href="mailto:nico@delightfuldev.com"><i className="icon icon-mail">&#xe800;</i></a>
          <a target="_blank" href="https://twitter.com/delightfuldev"><i className="icon icon-twitter-circled">&#xf30a;</i></a>
          <a target="_blank" href="https://facebook.com/delightfuldev"><i className="icon icon-facebook-circled">&#xf30d;</i></a>
        </div>
      </div>
    );
  }
}

export default App;
