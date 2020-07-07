import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: this.props.signedIn,
      accountBalance: this.props.accountBalance,
      currentUser: this.props.currentUser,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.signedIn !== prevState.signedIn ||
      nextProps.accountBalance !== prevState.accountBalance
    ) {
      return {
        signedIn: nextProps.signedIn,
        accountBalance: nextProps.accountBalance,
        currentUser: nextProps.currentUser,
      };
    }
    return null;
  }

  render() {
    const { signedIn, currentUser } = this.state;
    return signedIn ? (
      <div
        className="container"
        style={{ textAlign: "center", marginTop: "5%" }}
      >
        <h1 id="debit-title" style={{ marginLeft: "130px" }}>
          UserProfile
        </h1>
        <div className="card" id="userCard">
          <div className="card-body">
            <img src="https://static.toiimg.com/thumb/72975551.cms?width=200&height=200&imgsize=881753" />
            <p>Username: {currentUser && currentUser.username}</p>
            <p>Member Since: {currentUser && currentUser.memberSince}</p>
            <button className="btn-primary" onClick={() => this.props.logout()}>
              Log Out
            </button>
          </div>
        </div>
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default UserProfile;
