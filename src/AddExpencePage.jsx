import React from 'react';
import ExpenseForm from './components/ExpenseForm';

function AddExpensePage({ addExpense, goBack , darkMode, toggleDarkMode}) {
  return (
    <div className={darkMode ? 'add-expense-page dark-mode' : 'add-expense-page' }>
      <button className="theme-toggle" onClick={toggleDarkMode}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
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