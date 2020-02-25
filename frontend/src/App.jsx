import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navigation from './Components/Navigation'
import Home from './Components/Home'
import ObjectComponent from './Components/ObjectComponent'
import CollectionComponent from './Components/CollectionComponent'

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
              <CollectionComponent />
            </Route>
            <Route path='/collection/:collectionId' component={ObjectComponent}>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App