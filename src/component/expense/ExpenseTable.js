import React, { useContext } from 'react'
import Authcontext from '../../store/Auth-context'
import { Table } from 'react-bootstrap'
import "./ExpenseTable.css"
export const ExpenseTable = (props) => {

  const authctx = useContext(Authcontext)

  function DeleteHandler(id) {
    authctx.deleteitems(id)
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

          {authctx.item.map((data, index) => (

            <tr key={index}>
              <td>{data.amount}</td>
              <td>{data.description}</td>
              <td>{data.category}</td>
              <td> <button className="delete-btn" onClick={DeleteHandler.bind(null, data.key)}>Delete</button></td>
              <td> <button className="edit-btn" onClick={() => props.edit(data.key)}>Edit</button></td>

            </tr>
          ))}
        </tbody>
      </Table>
    </div>

  )
}
