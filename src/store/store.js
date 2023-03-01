import { configureStore } from "@reduxjs/toolkit";
import { Authreducer } from "./AuthSlice";
const Store = configureStore({
    reducer: { auth: Authreducer }
})

export default Store