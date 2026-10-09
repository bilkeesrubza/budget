import React from 'react'
import ExpenseItem from './ExpenseItem'

function ExpenseList({expenses, deleteExpense, totalExpenses}) {

  return (
    <div className='total-expenses'>
      {expenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        
          
      expenses.map((expense) => (
            <ExpenseItem key ={expense.id} expense={expense} deleteExpense={deleteExpense} />
        )
        
      ))
}    <h2>Total Expenses: {totalExpenses}</h2>
    </div>
    
  )
}

export default ExpenseList
