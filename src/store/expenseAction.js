import axios from "axios";
import { ExpenseAction } from "./expenseSlice";

export async function getExpenses(dispatch) {
    const id = localStorage.getItem("email")
    const res = await axios.get(`https://expense-tracker-1c21b-default-rtdb.firebaseio.com/${id}.json`);

    const data = [];

    let sum = 0;
    for (let key in res.data) {
        data.push({ id: key, ...res.data[key] });
        sum += +res.data[key].amount;

    }
    dispatch(ExpenseAction.setExpense({ data: data, total: sum }));
}


export async function postExpenses(uniqueid, item, dispatch) {

    let url
    const id = localStorage.getItem("email")
    if (uniqueid) {
        try {
            url = `https://expense-tracker-1c21b-default-rtdb.firebaseio.com/${id}/${uniqueid}.json`
            const res = await axios.put(url, item);
           
            if (res.ok) {
                console.log("sucessfull")
            }
        } catch (error) {
            console.log(error)
        }
    }
    else {
        try {
            url = `https://expense-tracker-1c21b-default-rtdb.firebaseio.com/${id}.json`
            const res = await axios.post(url, item);

            if (res.ok) {
                console.log("sucessfull")
            }
        } catch (error) {
            console.log(error)
        }
    }

    await getExpenses(dispatch)
}


export async function deleteExpense(deleteid, dispatch) {
    try {
        const id = localStorage.getItem("email")
        const res = await axios.delete(`https://expense-tracker-1c21b-default-rtdb.firebaseio.com/${id}/${deleteid}.json`)
        console.log(res)
        if (res.statusText==="ok") {
            throw new Error("something wrong in delete")
        }
    } catch (error) {
        console.log("delete", error)
    }

    await getExpenses(dispatch);
}

export async function getEditExpense(deleteid, dispatch) {
try {
        const id = localStorage.getItem("email")
        const response = await axios.get(`https://expense-tracker-1c21b-default-rtdb.firebaseio.com/${id}/${deleteid}.json`);

        if (response.status === 200) {
            return response.data;
         }
    } catch {
        console.log(Error)
    }

}
