import React, { Component } from "react";
import AccountBalance from "./commons/AccountBalance";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import DisplayTransactions from "./commons/DisplayTransactions";

class Debits extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountBalance: this.props.accountBalance,
      signedIn: this.props.signedIn,
      debits: this.props.debits,
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
        debits: nextProps.debits,
      };
    }
    return null;
  }

  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onDebitSubmit = () => {
    const { amount, description } = this.state;
    if (amount && description) {
      this.props.addDebit(amount, description);
    }
  };

  render() {
    console.log("debits", this.state.debits);
    return this.state.signedIn ? (
      <div className="container" style={{ textAlign: "center" }}>
        <h1 id="debits-title">Debits</h1>
        <AccountBalance accountBalance={this.state.accountBalance} />
        <DisplayTransactions
          transactions={this.state.debits}
          onChange={this.onChange}
          onDebitSubmit={this.onDebitSubmit}
        />
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default Debits;
