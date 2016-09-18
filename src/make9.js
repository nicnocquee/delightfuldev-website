import React, { Component } from 'react'
import make9OnDevices from './make9-on-devices.png'

class Make9 extends Component {
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={make9OnDevices} className="app_page_img" />
        <div className="app_page_paragraph">
          <p>
 Make9 is a simple puzzle number game where the objective is to make 「9」 by tapping the numbers and operators. The playful colors and fun background music makes it perfect to play when you’re on the train, waiting for your friend at the mall, etc. The dark mode makes it pleasant to play Make9 before you sleep.           </p>
        </div>
        <div style={{marginTop: '3em'}}>
          <a className="download" href="https://itunes.apple.com/app/apple-store/id1044061338?pt=320144&ct=homepage&mt=8">App Store</a>
        </div>

        <div style={{marginTop: '3em'}}>
          <a className="download" href="https://play.google.com/store/apps/details?id=com.delightfuldev.make9&referrer=utm_source%3Dhomepage%26utm_medium%3Dwebsite%26anid%3Dadmob">Play Store</a>
        </div>
      </div>
    )
  }
}

export default Make9
