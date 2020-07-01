import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null,
      currentUser: this.props.currentUser,
    };
  }

  static getDerivedStateFromProps(prevState, nextProps) {
    if (nextProps.currentUser !== prevState.currentUser) {
      return {
        currentUser: nextProps.currentUser,
      };
    }
    return null;
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    const { currentUser, username } = this.state;
    console.log("current", currentUser);
    return (
      <div className="container">
        <label>Username</label>
        <input onChange={(e) => this.handleChange(e)} id="username" />
        <label>Password</label>
        <input onChange={(e) => this.handleChange(e)} id="password" />
        <button
          className="btn-sm btn-primary"
          onClick={() => this.props.onLoginSubmit(username)}
        >
          Login
        </button>
      </div>
    );
  }
}

export default Login;
