import React ,{useRef}from 'react'
import "./Expenseform.css"

export const Expenseform = () => {

   const amountref=useRef("") 
   const textarearef=useRef("")
   const categoryref=useRef("")
    function expenseHandler(event){
         event.preventDefault()

         const enteredamount=amountref.current.value
         const enteredtextarea=textarearef.current.value
         const enteredcategory=categoryref.current.value

         console.log(enteredamount,enteredcategory,enteredtextarea)
    }
  return (
    <div className="form-container">
    
    <form onSubmit={expenseHandler}>
    <h2>Expense Details</h2>
      <div className="form-group">
        <label htmlFor="expense">Total Expense:</label>
        <input type="number" id="expense" name="expense" ref={amountref}required/>
       </div>
       <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description"  ref={textarearef}></textarea>
      </div> 
      <div className="form-group">
        <label className="category-label" htmlFor="category">Category:</label>
        <select id="category" name="category" ref={categoryref}>
          <option value="food">Food</option>
          <option value="movie">Movie</option>
          <option value="petrol">Petrol</option>
          <option value="other">Other</option>
    </select>
    <input className="category-input" type="text" id="other-category" name="other-category" placeholder="Enter category"/>
  </div>
  <input type="submit" value="Submit"/>
</form>
</div>
  )
}
