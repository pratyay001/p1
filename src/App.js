import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from "./containers/SignUp";
import SignIn from "./containers/SignIn";
import Forgot from "./containers/Forgot";
import ForgotPasswordConfirmation from "./containers/ForgotPasswordConfirmation";
import ResetPassword from './containers/ResetPassword';
import { HashRouter as Router, Route } from 'react-router-dom';
class App extends Component{
  render(){
  return (
    <Router>
              <Route exact path="/" component={SignUp} />
              <Route path="/sign-in" component={SignIn} />
              <Route path="/forgot" component={Forgot} />
              <Route path="/forgot-password-confirmation" component={ForgotPasswordConfirmation} />
              <Route path="/reset-password" component={ResetPassword} />
    </Router>
  );
}
}

export default App;
