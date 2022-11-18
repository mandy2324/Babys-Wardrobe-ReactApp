const BASE = "http://localhost:8080"  // use this if running locally
//const BASE = "http://0.0.0.0:8080" // edit this with your AWS endpoint

const URI = BASE + "/api"

const OrderApi = {
    addOrder: (order) => {
        fetch(URI + "/order", {
            method: "POST",
            body: JSON.stringify(order),
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + sessionStorage.getItem('jwt')
            }
        })
            .then(result => result.json())
            .then(data => {

                if (typeof data.id !== 'undefined') {

                    console.log("CREATED ORDER:");
                    console.log(data);

                    alert(`ORDER CREATED \n` +
                        `------------------------\n` +
                        `Order ID: ${data.id}\n` +
                        `User ID: ${data.userId}\n` +
                        `Purchases: ${data.purchases}\n` +
                        `Price: ${data.price}\n`
                    )
                }
                else {
                    alert("Failed to create product")
                }

            })
            .catch(error => {
                console.log(error);
            })
    }

}

export default OrderApi;
