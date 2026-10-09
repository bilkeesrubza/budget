import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, deleteExpense, totalExpenses }) {
  return (
    <div className="total-expenses">
      {expenses.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🧾</div>
          <h2>No expenses yet</h2>
          <p>
            Your expense history will appear here.
            Start by adding your first expense!
          </p>
        </div>
      ) : (
        <div className="expense-list">
          {expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              deleteExpense={deleteExpense}
            />
          ))}
        </div>
      )}

      <div className="expense-total-card">
        <div>
          <p>Total Expenses</p>
          <span>For your current search and filter</span>
        </div>

        <h2>
          ₹
          {Number(totalExpenses).toLocaleString('en-IN', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </h2>
      </div>
    </div>
  );
}

export default ExpenseList;