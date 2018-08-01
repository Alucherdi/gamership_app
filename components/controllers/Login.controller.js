import props from "../utils/properties"

class LoginController {
	doLogin(_params) {
		return fetch(props.user.login, {
				method: "POST",
				headers: {
					"Content-type": "application/json"
				},
				body: JSON.stringify(_params)
			})
			.then(r => r.json())
			.then(result => {
				return result
			})
			.catch(err => { return {error: err}})
	}
}

export default LoginController