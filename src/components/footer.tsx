import React from "react";

const Footer = () => {
  return (
    <footer>
      <form className="new-item-form">
        <div className="field">
          <label htmlFor="type">Type:</label>
          <select name="type-dropdown" id="type">
            <option value="invoice">Invoice</option>
            <option value="payment">Payment</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="toFrom">To / From:</label>
          <input name="name-input" id="toFrom" type="text" />
        </div>
        <div className="field">
          <label htmlFor="details">Details:</label>
          <input name="details-input" id="details" type="text" />
        </div>
        <div className="field">
          <label htmlFor="amount">Amount:</label>
          <input name="amount-input" id="amount" type="number" />
        </div>
        <button>Add</button>
      </form>
    </footer>
  );
};

export default Footer;
