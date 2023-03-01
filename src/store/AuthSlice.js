
import { createSlice } from "@reduxjs/toolkit"


const intialtoken = localStorage.getItem("token")

const intialAuthstate={ token: intialtoken,
isLoggein: !!intialtoken,
}

const AuthSlice=createSlice({
  name:"Auth",
  initialState:intialAuthstate,
  reducers:{
    login(state,action){
      state.token=action.payload
      localStorage.setItem("token", action.payload)
      state.isLoggein=true
    },
    logout(state){
     state.token=null
     localStorage.removeItem("token")
     state.isLoggein=false
    }
  }
})

export const AuthAction=AuthSlice.actions
export const Authreducer=AuthSlice.reducer