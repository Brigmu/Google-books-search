import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Search from './Pages/Search/Search';
import Saved from './Pages/Saved/Saved'

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path = {['/', '/search']} component={Search} />
        <Route exact path = '/saved' component={Saved} />
      </Switch>
    </div>
    </Router>
  );
}


export default App;
