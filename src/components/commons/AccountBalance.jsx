import React from "react";

const AccountBalance = ({ accountBalance }) => {
  return (
    <div className="card">
      <div className="card-header">Account Balance</div>
      <div className="card-body">
        <h5 className="card-title">{accountBalance}</h5>
        <p className="card-text">
          Balance as of {`${new Date().getDate()}/${new Date().getFullYear()}`}
        </p>
      </div>
    </div>
  );
};

export default AccountBalance;
