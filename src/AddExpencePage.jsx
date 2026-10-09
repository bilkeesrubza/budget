import React from 'react';
import ExpenseForm from './components/ExpenseForm';

function AddExpensePage({ addExpense, goBack }) {
  return (
    <div className="add-expense-page">
      <button onClick={goBack} className="back-button">
        ← Back to Dashboard
      </button>

      <h1>Add New Expense</h1>
      <p>Enter your expense details below.</p>

      <ExpenseForm addExpense={addExpense} />
    </div>
  );
}

export default AddExpensePage;