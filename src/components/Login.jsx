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

  componentDidMount() {
    document.body.style.backgroundColor = "rgb(107, 1, 63)";
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    const { username, signedIn } = this.state;
    return !signedIn ? (
      <div
        className="container"
        style={{ textAlign: "center", marginTop: "10%" }}
      >
        <h1 style={{ color: "white" }}>Bank Of React Auth</h1>
        <label style={{ color: "white" }}>Username</label>
        <br />
        <input type="text" onChange={this.handleChange} id="username" />
        <br />
        <label style={{ color: "white" }}>Password</label>
        <br />
        <input type="password" onChange={this.handleChange} id="password" />
        <br />
        <button
          style={{ marginTop: "10px" }}
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
