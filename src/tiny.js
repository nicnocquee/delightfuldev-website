import React, { Component } from 'react'
import tinyOnDevices from './tiny-on-devices.png'

class Tiny extends Component {
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={tinyOnDevices} className="app_page_img" alt="" />
        <div className="app_page_paragraph">
          <p>
 Say goodbye to boring and uninformative screen shots names. Everytime you take screen shot of your Mac, Tiny will rename your screen shot into a meaningful file name. Tiny does not have a window. It lives in your Mac’s Menu Bar. Tiny renames your screen shot based on the front most application’s window. For Safari and Chrome, Tiny even renames the screen shot with the URL and title of the active tab. Tiny can also automatically open quick look after you take screen shot.
          </p>
        </div>
        <div style={{marginTop: '3em'}}>
          <a className="download" href="https://kaomojiformac.github.io/tiny-download/Tiny.zip">Download</a>
        </div>
      </div>
    )
  }
}

export default Tiny
