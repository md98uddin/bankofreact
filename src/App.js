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
      signedIn: true,
      accountBalance: null,
      currentUser: null,
      debitsTransactions: null,
      creditTransactions: null,
    };
  }

  componentDidMount() {}

  //mock login
  onLoginSubmit = (username) => {
    const user = { username, memberSince: "08/15/2003" };
    this.setState({
      signedIn: true,
      accountBalance: 32675.89,
      currentUser: user,
    });
  };

  render() {
    const { currentUser, accountBalance, signedIn } = this.state;
    console.log("currentuser", currentUser);
    console.log("balance", accountBalance);
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
                currentUser={currentUser}
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
                currentUser={currentUser}
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
