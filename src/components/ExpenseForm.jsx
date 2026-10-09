import React from 'react'
import{useState} from 'react'

function ExpenseForm({addExpense}) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !date || !category) {
        alert('Please fill in all fields');
        return;
      }
    const newExpense = {
      id: Date.now(),
      title: title,
      amount: amount,
      date: date,
      category: category
        
    };

      addExpense(newExpense);
      setTitle('');
      setAmount('');
      setDate('');
      setCategory('');


  };
    

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <input type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="shopping">Shopping</option>
          <option value="other">Other</option>
        </select>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  )
}

export default ExpenseForm
