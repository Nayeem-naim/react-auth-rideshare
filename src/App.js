
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Home from './component/Home/Home';
import LogIn from './component/LogIn/LogIn';
import NavBar from "./component/NavBar/NavBar";
import Destination from "./component/Destination/Destination";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import NotFound from "./component/NotFound/NotFound"

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <div>
      <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
     <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <PrivateRoute path="/destination">
           <Destination/>
          </PrivateRoute>
          <Route path="/login">
          <LogIn/>
          </Route>
          <Route path="/*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
