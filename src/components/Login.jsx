import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null,
      signedIn: this.props.signedIn,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.signedIn !== nextProps.signedIn) {
      return {
        signedIn: nextProps.signedIn,
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
    const { username, signedIn } = this.state;
    console.log("signedIn", signedIn);
    return !signedIn ? (
      <div className="container">
        <label>Username</label>
        <input onChange={this.handleChange} id="username" />
        <label>Password</label>
        <input onChange={this.handleChange} id="password" />
        <button
          className="btn-sm btn-primary"
          onClick={() => this.props.onLoginSubmit(username)}
        >
          Login
        </button>
      </div>
    ) : (
      <Redirect exact to="/" />
    );
  }
}

export default Login;
