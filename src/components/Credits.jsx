import React, { Component } from "react";
import AccountBalance from "./commons/AccountBalance";
import { Redirect } from "react-router-dom";
import DisplayTransactions from "./commons/DisplayTransactions";

class Credits extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountBalance: this.props.accountBalance,
      signedIn: this.props.signedIn,
      credits: this.props.credits,
      description: null,
      amount: null,
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
        credits: nextProps.credits,
      };
    }
    return null;
  }

  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onCreditSubmit = () => {
    const { amount, description } = this.state;
    if (amount && description) {
      this.props.addCredit(amount, description);
    }
  };

  render() {
    console.log("credits", this.state.credits);
    return this.state.signedIn ? (
      <div className="container" style={{ textAlign: "center" }}>
        <h1 id="debits-title">Credits</h1>
        <AccountBalance accountBalance={this.state.accountBalance} />
        <DisplayTransactions
          transactions={this.state.credits}
          onChange={this.onChange}
          onSubmit={this.onCreditSubmit}
        />
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default Credits;
