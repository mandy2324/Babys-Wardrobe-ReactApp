const BASE = "http://localhost:8080"  // use this if running locally
//const BASE = "http://0.0.0.0:8080" // edit this with your AWS endpoint

const AuthApi = {

    authenticate: (username, password) => {
        let credentials = { 'username': username, 'password': password }

        fetch(BASE + "/authenticate", {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" }
        })
            .then(result => result.json())
            .then(data => {
                // Store JWT in session storage as plain text
                sessionStorage.setItem('jwt', data.jwt)
            })
            .catch(error => {
                console.log(error);
            })

    }
}

export default AuthApi; 