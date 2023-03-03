import { configureStore } from "@reduxjs/toolkit";
import { Authreducer } from "./AuthSlice";
import { ExpenseReducer} from "./expenseSlice"
import themeSlice from "./Themeslics";
const Store = configureStore({
    reducer: { auth: Authreducer , Expense: ExpenseReducer , theme:themeSlice.reducer}
})

export default Store