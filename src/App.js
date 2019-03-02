import React, { Component } from 'react';
import Homepage from './homepage/homepage';
// import Intro from './intro/intro';
// import {HashRouter , Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <HashRouter>
        <Switch>
        <Route exact path='/' component={Intro}/>
        <Route path='/main' component={Homepage}/>
        </Switch>
      </HashRouter> */}
      <Homepage/>
      </div>
    );
  }
}

export default App;
