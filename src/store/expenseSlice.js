
import { createSlice } from "@reduxjs/toolkit"

const intialExpensestate={ 
    item: [],
    totalamount:0,
   }

   const ExpenseSlice=createSlice({
    name:"Expense",
    initialState:intialExpensestate,
    reducers:{
     setExpense(state,action){
        state.item=action.payload.data
        state.totalamount = action.payload.total
     }

    }
   })

   export const ExpenseAction=ExpenseSlice.actions

   export const ExpenseReducer=ExpenseSlice.reducer



        

     