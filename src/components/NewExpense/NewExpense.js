import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    stopEditingHandler();
  }

  const startEditingHandler = () => {
    setIsEditing(true);
  }
  // console.log(isEditing);

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  if (isEditing == false) {
    return (
      <div className="new-expense">
        <button onClick={startEditingHandler}>Add expense</button>
      </div>
    )
  }
    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />
      </div>
    )
}
export default NewExpense;
