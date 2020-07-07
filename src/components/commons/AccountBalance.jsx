import React from "react";

const AccountBalance = ({ accountBalance }) => {
  return (
    <div className="card" id="account-balance">
      <div className="card-header">Account Balance</div>
      <div className="card-body">
        <h5 className="card-title">${accountBalance.toFixed(2)}</h5>
        <p className="card-text">
          {" "}
          Updated balance on
          {` ${
            new Date().getMonth() + 1
          }/${new Date().getDate()}/${new Date().getFullYear()}`}{" "}
        </p>
      </div>
    </div>
  );
};

export default AccountBalance;
