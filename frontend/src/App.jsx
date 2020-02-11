import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navigation from './Components/Navigation'
import Home from './Components/Home'
import CollectionGallery from './Components/CollectionGallery'
import CreateCollection from './Components/CreateCollection'
import ObjectComponent from './Components/ObjectComponent'

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
            <Route path='/collection/:collectionId' component={ObjectComponent}>
              {/* <h1>Objects</h1>
              <CreateObject />
              <ObjectGallery /> */}
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App