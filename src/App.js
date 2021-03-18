
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Home from './component/Home/Home';
import LogIn from './component/LogIn/LogIn';
import About from './component/About/About';


function App() {
  return (
    <div>
      <Router>
      <Home/>
        <Switch>
        
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
           <About/>
          </Route>
          <Route path="/login">
          <LogIn/>
          </Route>
        </Switch>
      </Router>
      
 
    </div>
  );
}

export default App;
