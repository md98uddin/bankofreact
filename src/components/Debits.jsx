import React from "react";
import AccountBalance from "./commons/AccountBalance";
import { Redirect } from "react-router-dom";

const Debits = ({ accountBalance, currentUser }) => {
  return currentUser ? (
    <div className="container">
      <AccountBalance accountBalance={accountBalance} />
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default Debits;
