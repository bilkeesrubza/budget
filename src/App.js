import React, { useState } from 'react';
import ExpenseList from './components/ExpenseList';
import AddExpensePage from './AddExpencePage';
import './App.css';


function App() {
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [showAddPage, setShowAddPage] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.title.toLowerCase().includes(search.toLowerCase()) &&
      (filter === '' || expense.category === filter)
  );

  const totalExpenses = filteredExpenses.reduce(
    (total, expense) => total + Number(expense.amount),
    0
  );
  if (showAddPage) {
    return (
      <AddExpensePage
        addExpense={(expense) => {
          addExpense(expense);
          setShowAddPage(false);
        }}
        goBack={() => setShowAddPage(false)}
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)} 
      />
    );
  }
  return (
    <div className={darkMode ? 'App dark-mode' : 'App'  }>
      <header className="App-header">

        <div className="brand">
          <div className="brand-icon">₹</div>
          <div>
            <h1>Expense Tracker</h1>
            <p>Your money, managed better.</p>
          </div>
        </div>
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <div className="welcome-text">
          <p>Welcome back 👋</p>
          <h2>Track your spending with ease.</h2>
        </div>
        <div className="total-card">
          <p>Total Expenses</p>
          <h2>
            ₹{totalExpenses.toLocaleString('en-IN', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h2>
          <span>Based on your current search and filter</span>
        </div>
      </header>
      <main className="dashboard">
        <div className="summary-grid">
          <div className="summary-card">
            <span className="summary-icon">📋</span>
            <p>Transactions</p>
            <h3>{filteredExpenses.length}</h3>
          </div>
          <div className="summary-card">
            <span className="summary-icon">🔎</span>
            <p>Categories</p>
            <h3>
              {new Set(filteredExpenses.map((expense) => expense.category)).size}
            </h3>
          </div>
        </div>
        <div className="section-heading">
          <div>
            <h2>Expense History</h2>
            <p>Manage and review your expenses.</p>
          </div>
          <button
            className="add-expense-button"
            onClick={() => setShowAddPage(true)}
          >
            + Add Expense
          </button>
        </div>
        <div className="filter-bar">
          <input
            type="text"
            placeholder="Search expenses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="shopping">Shopping</option>
            <option value="other">Other</option>
          </select>
        </div>
        <ExpenseList
          expenses={filteredExpenses}
          deleteExpense={deleteExpense}
          totalExpenses={totalExpenses}
        />
      </main>
    </div>
  );
}
export default App;