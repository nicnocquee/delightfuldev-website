import React, { Component } from 'react'
import meeruOnDevices from './meeru-on-devices.png'

class Meeru extends Component {
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={meeruOnDevices} className="app_page_img" alt="" />
        <div className="app_page_paragraph">
          <p>
           Meeru is the app that allows you to play multiple videos from streaming websites at the same time.
          </p>
        </div>
        <div style={{marginTop: '3em'}}>
          <a className="download" href="https://itunes.apple.com/jp/app/meeru-multiple-videos-at-same/id1069503013?l=en&mt=12">Available on the App Store</a>
        </div>
      </div>
    )
  }
}

export default Meeru
