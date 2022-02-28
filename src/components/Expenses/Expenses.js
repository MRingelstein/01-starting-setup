import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter"
import "./Expenses.css"
import Card from "../UI/Card"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"



function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterExpenses = (filterValue) => {
    setFilteredYear(filterValue);
  }

  const filteredExpenses = props.data.filter(expense => expense.date.getFullYear().toString() === filteredYear)

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onFilterChange={filterExpenses} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList content={filteredExpenses} />
      </Card>
    </div>
  );
}
export default Expenses;
