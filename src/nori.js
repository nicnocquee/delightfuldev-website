import React, { Component } from 'react'
import noriOnDevices from './nori-on-devices.png'

class Nori extends Component {
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={noriOnDevices} className="app_page_img" alt="" />
        <div className="app_page_paragraph">
          <p>
 Have you ever tried to show two images side by side for comparison? Maybe to compare two graphs showing simulation results. Or to compare multiple screenshots. Nori for Mac is designed to help you create photo strips quickly. Simply drag and drop images to Nori, or select multiple images in Finder and open Nori from the right click menu. </p>
        </div>
        <div style={{marginTop: '3em'}}>
          <a className="download" href="https://itunes.apple.com/us/app/nori-photo-strips-creator/id1067017035?ls=1&mt=12">Available on the App Store</a>
        </div>
      </div>
    )
  }
}

export default Nori
