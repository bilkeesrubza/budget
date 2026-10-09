import React from 'react';

function ExpenseItem({ expense, deleteExpense }) {
  const categoryIcons = {
    Food: '🍔',
    Travel: '🚗',
    shopping: '🛍️',
    other: '📌',
  };

  return (
    <div className="expense-item">
      <div className="expense-category-icon">
        {categoryIcons[expense.category] || '💰'}
      </div>

      <div className="expense-details">
        <h3>{expense.title}</h3>
        <p>
          {expense.category} <span>·</span> {expense.date}
        </p>
      </div>

      <div className="expense-actions">
        <h3 className="expense-amount">
          ₹{Number(expense.amount).toLocaleString('en-IN')}
        </h3>

        <button
          className="delete-button"
          onClick={() => deleteExpense(expense.id)}
          aria-label={`Delete ${expense.title}`}
          title="Delete expense"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default ExpenseItem;