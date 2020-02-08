import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navigation from './Navigation'
import Home from './Home'
import CollectionGallery from './CollectionGallery'
import CreateCollection from './CreateCollection'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navigation />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/collections'>
              <h1>Collections</h1>
              <CreateCollection />
              <CollectionGallery />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App