
import { createSlice } from "@reduxjs/toolkit"

const intialExpensestate={ 
    item: [],
   }

const ExpenseSlice=createSlice({
    name:"Expense",
    initialState:intialExpensestate,
    reducers:{
       additems(state,action){
        async function additemhandler(action) {
            try {
              const res = await axios.post("https://expense-tracker-1c21b-default-rtdb.firebaseio.com/cart.json", action.payload)
              console.log(res)
            }
            catch (Err) {
              console.log(Err)
            }
        
            getdata()
          }
        

       } 

    }


})