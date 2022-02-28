import React from "react";
import "./ExpenseDate.css"

function ExpenseDate(props) {
  const year = { year: "numeric" };
  const month = { month: "long" };
  const day = { day: "2-digit" };
  return (
    <div className="expense-date">
      <div className="expense-date__month">{props.date.toLocaleString("en-GB", month)}</div>
      <div className="expense-date__year">{props.date.toLocaleString("en-GB", year)}</div>
      <div className="expense-date__day">{props.date.toLocaleString("en-GB", day)}</div>
    </div>
  );
}
export default ExpenseDate;
