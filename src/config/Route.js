import React, { Component } from 'react'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import ScrollToTop from './ScrollToTop'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from '../pages/LoginPage'
import SignUp from '../pages/SignUpPage'
import CreatePin from '../pages/CreatePinPage'
import ResetPassword from '../pages/ResetPasswordPage'
import LandingPage from '../pages/LandingPage'
import Home from '../pages/HomePage'
import Pin from '../pages/PinSuccessPage'
import CreateNewPassword from '../pages/CreateNewPasswordPage'
import Admin from '../pages/Admin'

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <PublicRoute restricted={true} path="/login" component={Login} />
          <PublicRoute restricted={true} path="/sign-up" component={SignUp} />
          <PublicRoute restricted={true} path="/create-pin/:token" component={CreatePin} />
          <PublicRoute restricted={true} path="/reset-password" component={ResetPassword} />
          <PrivateRoute role={'ADMIN'} path="/Admin" component={Admin} />
          <PrivateRoute path="/home-page" component={Home} />
          <PublicRoute restricted={true} path="/pin-success" component={Pin} />
          <PublicRoute restricted={true} path="/create-new-password/:token" component={CreateNewPassword} />
        </Switch>
      </BrowserRouter>

    )
  }
}
