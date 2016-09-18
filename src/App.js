import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router'
import Helmet from "react-helmet"
import './App.css';
import Landing from './Landing'
import Apps from './Apps'
import AppPage from './AppPage'
import facebookCover from './delightfuldev-facebook-cover.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet
          itle="DelightfulDev"
          meta={[
                    {"name": "description", "content": "Apps and Web Development in Basel Switzerland"},
                    {"property": "og:image", "content": facebookCover},
                ]}
        />
        <Router history={browserHistory}>
          <Route path="/" component={Landing} />
          <Route path="/apps" component={Apps} />
          <Route path="/(:name)" component={AppPage} />

        </Router>

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
