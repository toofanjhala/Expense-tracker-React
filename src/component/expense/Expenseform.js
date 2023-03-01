import React, { useContext, useState } from 'react'
import Authcontext from '../../store/Auth-context'
import "./Expenseform.css"
import { ExpenseTable } from './ExpenseTable'

export const Expenseform = () => {


  const authCtx = useContext(Authcontext)
  const [editExpense, setEditExpense] = useState({ amount: "", description: "", category: "" });

 function expenseHandler(event) {
    event.preventDefault()
    const enteredamount = editExpense.amount
    const enteredtextarea = editExpense.description
    const enteredcategory = editExpense.category

    authCtx.additems({ amount: enteredamount, category: enteredcategory, description: enteredtextarea })

    setEditExpense({ amount: "", description: "", category: "" })

  }



  async function edithandler(id) {
    const data = await authCtx.edititems(id)
  
    setEditExpense({ amount: data.amount, description: data.description, category: data.category })

  }






  return (
    <div>
      <div className="form-container">

        <form onSubmit={expenseHandler}>
          <h2>Expense Details</h2>
          <div >
            <label htmlFor="expense">Total Expense:</label>
            <input type="number" id="expense" name="expense" required  value={editExpense.amount} onChange={(e) => setEditExpense({ ...editExpense, amount: e.target.value })} />
          </div>
          <div >
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" required  value={editExpense.description} onChange={(e) => setEditExpense({ ...editExpense, description: e.target.value })}  ></textarea>
          </div>
          <div>
            <label className="category-label" htmlFor="category">Category:</label>
            <select id="category" name="category"  value={editExpense.category} onChange={(e) => setEditExpense({ ...editExpense, category: e.target.value })}>
              <option value="food"   >Food</option>
              <option value="movie"  >Movie</option>
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
