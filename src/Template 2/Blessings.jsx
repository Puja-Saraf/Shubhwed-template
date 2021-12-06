import React from "react";

export default function Blessings() {
    const details={name:"", branch:"HDFC Ltd./ Arya Nagar", acc:"00000000", ifsc:"ABCD0000000", upi:"", gpay:""}
  return (
    <div>
      <h1 className="bless">
        Want to give your blessings to in form of Kanyadan?
      </h1>
      <p className="bless-text">
        Your blessings and presence on our wedding day is all we want. But if
        you still wish to get us something, please refer these details.
        <br />
        <br />
        Convey your wishes via:
        <br />
        <br />
        Bank Details:
        <br />
        Name:
        <br />
        Bank/ Branch: {details.branch}
        <br />
        Account Number: {details.acc}
        <br />
        IFSC Code:
        <br />
        <br />
        UPI ID:
        <br />
        Google pay:
      </p>
    </div>
  );
}
