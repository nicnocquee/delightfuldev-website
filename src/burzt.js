import React, { Component } from 'react'
import burztOnDevices from './burzt-on-devices.png'

class Burzt extends Component {
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={burztOnDevices} className="app_page_img" alt="" />
        <div className="app_page_paragraph">
          <p>
 Burzt is a simple iPhone app convert burst photos to GIF or video. Tap the play button to see your burst photo animating. Change the duration. Share to Twitter, Email, or to your Mac via AirDrop. It’s that simple.
          </p>
        </div>
        <div style={{marginTop: '3em'}}>
          <a className="download" href="https://itunes.apple.com/jp/app/burzt-burst-photos-to-gif/id1025006634?l=en&mt=8">App Store</a>
        </div>
      </div>
    )
  }
}

export default Burzt
