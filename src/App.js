import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Navbar from './Components/Navbar/navbar';
import ComingSoon from './Components/ComingSoon/coming-soon';
import './App.css';

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/soper-dev">

            </Route>
            <Route path="*">
                <Navbar/>
                <ComingSoon/>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
