import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/styling.css";
import Home from "./components/Home";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import Debits from "./components/Debits";
import Credits from "./components/Credits";
import Axios from "axios";

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
    console.log("amt", amt, "desc", desc);
    var month =
      new Date().getMonth() + 1 < 10
        ? "0" + (new Date().getMonth() + 1)
        : new Date().getMonth() + 1;
    var day =
      new Date().getDate() < 10
        ? "0" + new Date().getDate()
        : new Date().getDate();
    var date = month + "/" + day + "/" + new Date().getFullYear() + "T";

    var newObj = {
      id: amt + desc + 895695,
      amount: amt,
      description: desc,
      date,
    };

    console.log("newobj", newObj);

    var newDebitTransactions = this.state.debitsTransactions;
    newDebitTransactions.unshift(newObj);

    return this.setState({
      debitsTransactions: newDebitTransactions,
      accountBalance: this.state.accountBalance - amt,
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
      <Router>
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
            render={(props) => <UserProfile />}
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
            render={(props) => <Credits {...props} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
