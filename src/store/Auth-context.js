import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Authcontext = React.createContext({
  
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
       await DeleteitemHandler(id)  
      

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