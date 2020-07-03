import React from "react";

const GreetingCards = ({ accountBalance, currentUser }) => {
  return (
    <div
      className="card"
      style={{ width: "40%", margin: "40px 0px 0px 30%", textAlign: "center" }}
      id="greetings"
    >
      <div className="card-header">
        {" "}
        Hello, your balance is {accountBalance < 0 ? "bad" : "healthy"}!
      </div>
      <div className="card-body">
        <h5 className="card-title">{currentUser && currentUser.username}</h5>
        <p className="card-text">
          Today's Date is{" "}
          {`${
            new Date().getMonth() + 1
          }/${new Date().getDate()}/${new Date().getFullYear()}`}
        </p>
      </div>
    </div>
  );
};

export default GreetingCards;
