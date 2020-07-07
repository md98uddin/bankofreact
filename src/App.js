import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./css/styling.css";
import Home from "./components/Home";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import Debits from "./components/Debits";
import Credits from "./components/Credits";
import Axios from "axios";
import { getDate } from "./services";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      accountBalance: null,
      currentUser: null,
      debitsTransactions: [],
      creditTransactions: [],
    };
  }

  componentDidMount() {
    var debits;
    Axios.get("https://moj-api.herokuapp.com/debits").then((res) => {
      debits = res.data;
      Axios.get("https://moj-api.herokuapp.com/credits").then((res) => {
        this.setState({
          debitsTransactions: debits,
          creditTransactions: res.data,
        });
      });
    });
  }

  //mock login
  onLoginSubmit = (username) => {
    const user = { username, memberSince: "08/15/2003" };
    this.setState({
      signedIn: true,
      accountBalance: 32675.89,
      currentUser: user,
    });
  };

  addDebit = (amt, desc) => {
    var newObj = {
      id: amt + desc + 895695,
      amount: amt,
      description: desc,
      date: getDate(),
    };

    var newDebitTransactions = this.state.debitsTransactions;
    newDebitTransactions.unshift(newObj);

    return this.setState({
      debitsTransactions: newDebitTransactions,
      accountBalance: this.state.accountBalance - amt,
    });
  };

  addCredit = (amt, desc) => {
    var newObj = {
      id: amt + desc + 895695,
      amount: amt,
      description: desc,
      date: getDate(),
    };

    var newCreditTransactions = this.state.creditTransactions;
    newCreditTransactions.unshift(newObj);

    return this.setState({
      creditTransactions: newCreditTransactions,
      accountBalance: parseInt(this.state.accountBalance) + parseInt(amt),
    });
  };

  logout = () => {
    return this.setState({
      signedIn: false,
    });
  };

  render() {
    const {
      currentUser,
      accountBalance,
      signedIn,
      debitsTransactions,
      creditTransactions,
    } = this.state;

    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home
                {...props}
                signedIn={signedIn}
                accountBalance={accountBalance}
                currentUser={currentUser}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={(props) => (
              <Login
                {...props}
                onLoginSubmit={this.onLoginSubmit}
                signedIn={signedIn}
              />
            )}
          />
          <Route
            exact
            path="/userProfile"
            render={(props) => (
              <UserProfile
                {...props}
                currentUser={currentUser}
                accountBalance={accountBalance}
                signedIn={signedIn}
                logout={this.logout}
              />
            )}
          />
          <Route
            exact
            path="/debits"
            render={(props) => (
              <Debits
                {...props}
                accountBalance={accountBalance}
                signedIn={signedIn}
                debits={debitsTransactions}
                addDebit={this.addDebit}
              />
            )}
          />
          <Route
            exact
            path="/credits"
            render={(props) => (
              <Credits
                {...props}
                accountBalance={accountBalance}
                signedIn={signedIn}
                credits={creditTransactions}
                addCredit={this.addCredit}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
