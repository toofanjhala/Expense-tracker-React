import React, { useEffect} from 'react'
import { Button, Table } from 'react-bootstrap'
import "./ExpenseTable.css"
import { useDispatch,useSelector } from 'react-redux'
import { getExpenses,deleteExpense } from '../../store/expenseAction'
import { saveAs } from 'file-saver'
export const ExpenseTable = (props) => {

  const dispatch=useDispatch()
  const expenseitem=useSelector((state)=>state.Expense.item)
  const Totalamount=useSelector((state)=>state.Expense.totalamount)

  useEffect(() => {
    getExpenses(dispatch);
  }, [dispatch]);

  const downloadExpenses = () => {
   
    const headerRow = ['Amount', 'Description', 'Category'];
    const Datarow = expenseitem.map(expense => [expense.description,expense.category,expense.amount])

    const csvData = [headerRow, ...Datarow].map(row => row.join(',')).join('\n')
   
 // Convert CSV string to Blob
 const csvBlob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    // Save Blob as file using FileSaver.js
    saveAs(csvBlob, 'expenses.csv');
  }

  


 return (
    <div className="container">
   
      <Table className="expense-table" striped bordered hover>
        <thead>
          <tr>
            <th>Expense Amount</th>
            <th>Description</th>
            <th>Category</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>

          {expenseitem.map((data, index) => (
 
            <tr key={index}>
              <td>{data.amount}</td>
              <td>{data.description}</td>
              <td>{data.category}</td>
              <td> <button className="delete-btn"  onClick={()=>deleteExpense(data.id,dispatch)}>Delete</button></td>
              <td> <button className="edit-btn" onClick={() => props.edit(data.id)}>Edit</button></td>

            </tr>
              
          ))}
          <tr>
            <td>Total Expense</td>
            <td>{Totalamount} </td>
           {Totalamount>10000 && <td>  <Button variant='warning' onClick={downloadExpenses}>Download File</Button></td>} 
          </tr>
        </tbody>
      </Table>
    </div>

  )
}
