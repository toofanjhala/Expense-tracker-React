import React, { useState } from 'react'
import "./Expenseform.css"
import { ExpenseTable } from './ExpenseTable'
import { postExpenses } from '../../store/expenseAction'
import { useDispatch } from 'react-redux'
import { getEditExpense } from '../../store/expenseAction'
import { Button } from 'react-bootstrap'

export const Expenseform = () => {

  const [editExpense, setEditExpense] = useState({ amount: "", description: "", category: "" });
  const [editstatusid, seteditstatusid] = useState(null)
  const dispatch = useDispatch()



  function expenseHandler(event) {
    event.preventDefault()
    const enteredamount = editExpense.amount
    const enteredtextarea = editExpense.description
    const enteredcategory = editExpense.category

  
    if (editstatusid === null) {
      postExpenses(null, { amount: enteredamount, category: enteredcategory, description: enteredtextarea }, dispatch)
    }
    else {
      postExpenses(editstatusid, { amount: enteredamount, category: enteredcategory, description: enteredtextarea }, dispatch)
    }

           setEditExpense({ amount: "", description: "", category: "" })

           seteditstatusid(null)

  }



  async function edithandler(id) {

    const data = await getEditExpense(id, dispatch)
    setEditExpense({ amount: data.amount, description: data.description, category: data.category })
    seteditstatusid(id)

  }

  return (
    <div>
      <div className="form-container">

        <form >
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
            <select id="category" name="category" required value={editExpense.category} onChange={(e) => setEditExpense({ ...editExpense, category: e.target.value })}>
              <option value="" >Choose a Category</option>
              <option value="food" >Food</option>
              <option value="movie" >Movie</option>
              <option value="petrol" >Petrol</option>
              <option value="other" >Other</option>
            </select>
          </div>
          <Button onClick={expenseHandler} >{editstatusid? "Update":"Submit"} </Button>
        </form>
      </div>
      <ExpenseTable edit={edithandler} />
    </div>
  )
}
