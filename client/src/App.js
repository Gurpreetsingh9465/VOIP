import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login'
import Test from './components/Test'
import User from './components/User'
import { Signup } from './components/Signup'
import Groupchat from './components/Groupchat'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      user: {}
    }
    this.logOut = this.logOut.bind(this);
    this.logIn = this.logIn.bind(this);
  }
  componentDidMount() {
    axios.get('/api/user/user').then((res)=>{
      this.setState({
        user:res.data.user,
        isLogin: true
      })
    }).catch((err) => {
      console.log(err.response.data);
    });
  }
  logIn() {
    axios.get('/api/user/user').then((res)=>{
      this.setState({
        user:res.data.user,
        isLogin: true
      })
    }).catch((err) => {
      console.log(err);
    });
  }
  logOut() {
    this.setState({isLogin:false,user:{}})
  }
  render() {
    return (
        <div>
          <Route path = '/' component={(props) => (<Navbar {...props} logOut={this.logOut} isLogin={this.state.isLogin}/>)}/>
          <Switch>
            <Route path = '/signin' component = {(props) => (<Login logIn={this.logIn} {...props} />)} />
            <Route path = '/signup' component = {Signup} />
            <Route path = '/User' component = {(props) => (<User user={this.state.user} socket={this.props.socket} {...props} />)} />
            <Route path = '/test' component = {Test} />
            <Route path = '/groupchat' component = {(props) => (<Groupchat user={this.state.user} socket={this.props.socket} {...props} />)} />
            {/* <Route path = '/' component = {App2} /> */}
          </Switch>
        </div>
    );
  }
}

export default App;
