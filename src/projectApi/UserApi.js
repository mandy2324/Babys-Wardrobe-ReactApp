const BASE = "http://localhost:8080"  // use this if running locally
const URI = BASE + "/api"

const UserApi = {
    addUser: (user) => {
        fetch(URI + "/user", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(result => result.json())
            .then(data => {

                if (typeof data.id !== 'undefined') {

                    console.log("CREATED USER:");
                    console.log(data);

                    alert(`USER CREATED \n` +
                        `------------------------\n` +
                        `User ID: ${data.id}\n` +
                        `Username: ${data.username}\n` +
                        `Street: ${data.address.street}\n` +
                        `City: ${data.address.city}\n` +
                        `State: ${data.address.state}\n` +
                        `Zip: ${data.address.zip}\n`
                    )
                }
                else {
                    alert("Failed to create User")
                }

            })
            .catch(error => {
                console.log(error);
            })
    }
}

export default UserApi;
