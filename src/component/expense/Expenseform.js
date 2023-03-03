import React, { useState } from 'react'
import "./Expenseform.css"
import { ExpenseTable } from './ExpenseTable'
import { postExpenses } from '../../store/expenseAction'
import { useDispatch } from 'react-redux'
import { EditExpense } from '../../store/expenseAction'
import { deleteExpense } from '../../store/expenseAction'
export const Expenseform = () => {

  const [editExpense, setEditExpense] = useState({ amount: "", description: "", category: "" });
  const dispatch = useDispatch()




  function expenseHandler(event) {
    event.preventDefault()
    const enteredamount = editExpense.amount
    const enteredtextarea = editExpense.description
    const enteredcategory = editExpense.category

    console.log(enteredcategory)

    postExpenses({ amount: enteredamount, category: enteredcategory, description: enteredtextarea }, dispatch)

    setEditExpense({ amount: "", description: "", category: "" })

  }



  async function edithandler(id) {



    const data = await EditExpense(id, dispatch)
    setEditExpense({ amount: data.amount, description: data.description, category: data.category })

    await deleteExpense(id, dispatch)

  }






  return (
    <div>
      <div className="form-container">

        <form onSubmit={expenseHandler}>
          <h2>Expense Details</h2>
          <div >
            <label htmlFor="expense">Total Expense:</label>
            <input type="number" id="expense" name="expense" required value={editExpense.amount} onChange={(e) => setEditExpense({ ...editExpense, amount: e.target.value })} />
          </div>
          <div >
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" required value={editExpense.description} onChange={(e) => setEditExpense({ ...editExpense, description: e.target.value })}  ></textarea>
          </div>
          <div>
            <label className="category-label" htmlFor="category">Category:</label>
            <select id="category" name="category"  value={editExpense.category}   onChange={(e) => setEditExpense({ ...editExpense, category: e.target.value })}>
              <option value="Category" >Choose a Category</option>    
              <option value="food" >Food</option>
              <option value="movie" >Movie</option>
              <option value="petrol" >Petrol</option>
              <option value="other" >Other</option>
            </select>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <ExpenseTable edit={edithandler} />
    </div>
  )
}
