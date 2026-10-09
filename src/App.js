import React from 'react';
import {useState} from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './App.css';


function App() {
  const [expenses, setExpenses] = useState([]);
  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  }
  

  const [search, setSearch] = useState('');
  const [filter,setFilter] = useState('')
  const filteredExpenses = expenses.filter((expense) =>expense.title.toLowerCase().includes(search.toLowerCase()) && (filter === '' || expense.category === filter));
  const  totalExpenses = filteredExpenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
  
  
  return (
    <div className="App">
      <header className="App-header">
       <h1>Expense Tracker</h1>
       <p>Track your expenses easily.</p>
        
      </header>
      <ExpenseForm addExpense={addExpense} />

      <input type="text" 
      placeholder='search'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="shopping">Shopping</option>
        <option value="other">Other</option>
      </select>
      
      <ExpenseList expenses={search||filter? filteredExpenses : expenses} deleteExpense={deleteExpense} totalExpenses={totalExpenses} />
    </div>
  );
}

export default App;
