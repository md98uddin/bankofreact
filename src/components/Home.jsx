import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: this.props.signed,
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

  render() {
    return this.state.signedIn ? (
      <div className="container">
        <ul>
          <button className="btn-sm">
            {" "}
            <Link to="/userProfile">Profile</Link>
          </button>
          <button className="btn-sm">
            <Link to="/debits">Debits</Link>
          </button>
          <button className="btn-sm">
            <Link to="/credits">Credits</Link>
          </button>
        </ul>
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default Home;
