import React from 'react'
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';


const ExpensesList = props => {
    if (props.content.length === 0) {
        return(
            <p className='expenses-list__fallback'> No expenses on this year.</p>
        )
    }

    return (
        <ul className='expenses-list'>
            {props.content.map(item =>
                <ExpenseItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date} />
            )}
        </ul>
    )
}
export default ExpensesList
