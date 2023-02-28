import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Authcontext = React.createContext({
  token: "",
  isLoggein: false,
  login: (token) => { },
  logout: () => { },
  item: [],
  additems: (obj) => { },
  deleteitems: (id) => { },
  edititems: (id) => { },
  editedamount: "",
  editeddescription: "",
  editedcategory: ""
})


export const AuthContextProvider = (props) => {



  const [items, setItems] = useState([])
  const intialtoken = localStorage.getItem("token")
  const [token, settoken] = useState(intialtoken)
  const isloggedinboolean = !!token
  const [EditedAmount, setEditedamount] = useState('')
  const [EditedDescription, setDescription] = useState("")
  const [EditedCategory, setCategory] = useState("")

  async function getdata() {
    try {
      const response = await axios.get("https://expense-tracker-1c21b-default-rtdb.firebaseio.com/cart.json")

      const responseObject = response.data
      const responsearray = []
      if (!response.data) {
        setItems([])
        return

      }
      Object.keys(responseObject).forEach(key => {
        const newObj = { key: key, ...responseObject[key] };
        responsearray.push(newObj)

      });

      setItems(responsearray)


    } catch {
      console.log(Error)
    }


  }

  useEffect(() => {
    getdata()
  }, [])




  function loginhandler(token) {
    settoken(token)
    localStorage.setItem("token", token)
  }

  function logouthandler() {
    settoken(null)
    localStorage.removeItem("token")
  }

  async function additemhandler(obj) {
    try {
      const res = await axios.post("https://expense-tracker-1c21b-default-rtdb.firebaseio.com/cart.json", obj)
      console.log(res)
    }
    catch (Err) {
      console.log(Err)
    }

    getdata()
  }

  async function DeleteitemHandler(id) {
    console.log(id)
    try {
      const res = await axios.delete(`https://expense-tracker-1c21b-default-rtdb.firebaseio.com/cart/${id}.json`)
      console.log(res)


    }
    catch (Err) { console.log(Err) }
    getdata()
  }

  async function EdititemHandler(id) {
    try {
      const response = await axios.get(`https://expense-tracker-1c21b-default-rtdb.firebaseio.com/cart/${id}.json`)

      if (response.status === 200) {
      const data = await DeleteitemHandler(id)  
      console.log(data)

        setEditedamount(response.data.amount)
        setDescription(response.data.description)
        setCategory(response.data.category)
      
        return response.data;
       }
       

    } catch {
      console.log(Error)
    }
 }






  const contextValue = {
    token: token,
    isLoggein: isloggedinboolean,
    login: loginhandler,
    logout: logouthandler,
    item: items,
    additems: additemhandler,
    deleteitems: DeleteitemHandler,
    edititems: EdititemHandler,
    editedamount: EditedAmount,
    editeddescription: EditedDescription,
    editedcategory: EditedCategory,

  }


  return (
    <Authcontext.Provider value={contextValue}>
      {props.children}
    </Authcontext.Provider>

  )
}

export default Authcontext;