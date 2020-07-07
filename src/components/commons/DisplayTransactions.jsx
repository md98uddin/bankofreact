import React from "react";

const DisplayTransactions = ({ transactions, onChange, onSubmit, title }) => {
  return (
    transactions && (
      <div className="container" style={{ textAlign: "center" }}>
        <h1 id="debits-title">All Transactions</h1>
        <label id="debits-title">Description</label>
        <input
          type="text"
          onChange={onChange}
          placeholder="laffy taffy"
          id="description"
        />
        <label id="debits-title">Amount</label>
        <input
          type="number"
          onChange={onChange}
          placeholder="60.37"
          id="amount"
        />
        <button onClick={() => onSubmit()}>{title}</button>
        <div id="transactions">
          {" "}
          {transactions.map((transaction) => (
            <span key={transaction.id}>
              <p id="debits-title">
                Amount ${transaction.amount} | Description{" "}
                {transaction.description} | Date{" "}
                {transaction.date.length > 12
                  ? transaction.date.substring(5, 7) +
                    "/" +
                    transaction.date.substring(8, 10) +
                    "/" +
                    transaction.date.substring(0, 4)
                  : transaction.date.replace("T", "")}
              </p>
            </span>
          ))}
        </div>
      </div>
    )
  );
};

export default DisplayTransactions;
