import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { NavBar } from './NavBar';
import { AboutScreen } from './AboutScreen'
import { LoginScreen } from './LoginScreen'
import { HomeScreen } from './HomeScreen'

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar></NavBar>
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomeScreen}></Route>
            <Route exact path="/about" component={AboutScreen}></Route>
            <Route exact path="/login" component={LoginScreen}></Route>
            <Route component={HomeScreen}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}
