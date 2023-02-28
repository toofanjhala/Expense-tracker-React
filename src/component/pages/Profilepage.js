import React, { useRef, useContext, useEffect } from 'react'
import "./profilepage.css"
import Authcontext from '../../store/Auth-context'
import { Header } from '../UI/Header'

export const Profilepage = () => {
	const authctx = useContext(Authcontext)

	const nameref = useRef("")
	const urlref = useRef("")
	useEffect(() => {

		async function fetchdata() {
			const res = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBiavyg_VJqzOb714tLnQrb7h5qRK0P8Hs",
				{
					method: "POST",
					body: JSON.stringify({
						idToken: authctx.token,
					}),
					headers: {
						'Content-Type': 'application/json'
					}
				})
			const data = await res.json()

			if (data.users[0].displayName) {
				nameref.current.value = data.users[0].displayName
				urlref.current.value = data.users[0].photoUrl
			}
		}

		fetchdata()

	}, [authctx.token])




	function formhandler(event) {
		event.preventDefault()
		const enteredname = nameref.current.value
		const enteredUrl = urlref.current.value
		console.log(enteredUrl, enteredname)

		fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBiavyg_VJqzOb714tLnQrb7h5qRK0P8Hs",
			{
				method: "POST",
				body: JSON.stringify({
					idToken: authctx.token,
					displayName: enteredname,
					photoUrl: enteredUrl,
					returnSecureToken: true
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			}).then((res) => {
				// console.log(res)
				if (res.ok) {
					return res.json()
				}
				else {
					return res.json().then((data) => {
						let error = "Authentication failed"
						throw new Error(error)
					})
				}

			}).then((data) => {
				console.log(data)

			})
			.catch((Err) => {
				alert(Err.message)
			})
	}

	return (
		<div>
		<Header></Header>
			<h2 className='heading'> Complete profile Registration</h2>
			<form className="form-container">
				<h2>User Details</h2>
				<div className="form-field">
					<label htmlFor="full-name">Enter Full Name:</label>
					<input type="text" id="full-name" name="full-name" required ref={nameref} />
				</div>
				<div className="form-field">
					<label htmlFor="photo-url">Enter Photo URL:</label>
					<input type="url" id="photo-url" name="photo-url" required ref={urlref} />
				</div>
				<div className="form-field">
					<button type="submit" onClick={formhandler}>Update</button>
				</div>
			</form>
		</div>
	)
}
