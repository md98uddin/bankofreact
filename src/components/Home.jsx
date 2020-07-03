import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import GreetingCards from "./commons/GreetingCard";

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

  componentDidMount() {
    document.body.style.backgroundColor = "grey";
  }

  render() {
    return this.state.signedIn ? (
      <div className="container" style={{ textAlign: "center" }} id="home-div">
        <h1>Welcome to React Bank!</h1>
        <p>Click any link below which you wish to see.</p>
        <ul style={{ textAlign: "center", marginRight: "25px" }} id="link-btn">
          <button className="btn-sm ">
            {" "}
            <Link to="/userProfile">Profile</Link>
          </button>
          <button className="btn-sm ">
            <Link to="/debits">Debits</Link>
          </button>
          <button className="btn-sm ">
            <Link to="/credits">Credits</Link>
          </button>
        </ul>
        <GreetingCards
          accountBalance={this.props.accountBalance}
          currentUser={this.props.currentUser}
        />
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default Home;
