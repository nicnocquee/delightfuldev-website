import React, { Component } from 'react'
import appoloOnDevices from './appolo-on-devices.png'

class Appolo extends Component {
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={appoloOnDevices} className="app_page_img" alt="" />
        <div className="app_page_paragraph">
          <p>Introducing Appolo, a set of plugins and themes for Jekyll to create a static portfolio website for app developers to showcase their work. Its minimalistic theme and playful animations make it perfect to display the amazing apps you have made. The responsive design looks delightful in desktop or mobile. It also comes with a set of plugins to remove the hassle of formatting your apps' pages.
          </p>
        </div>
        <div style={{marginTop: '3em'}}>
          <a className="download" href="https://github.com/nicnocquee/appolo">View in Github</a>
        </div>
      </div>
    )
  }
}

export default Appolo
