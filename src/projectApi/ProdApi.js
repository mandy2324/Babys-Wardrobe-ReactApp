const BASE = "http://localhost:8080"  // use this if running locally
//const BASE = "http://0.0.0.0:8080" // edit this with your AWS endpoint
const URI = BASE + "/api"

const ProdApi = {

    getAll: (setProductList) => {

        fetch(URI + "/clothes")
            .then(result => result.json())
            .then(data => {
                setProductList(data)
            })
            .catch(error => { console.log(error) })
    },

    add: (product) => {

        fetch(URI + "/clothes", {
            method: "POST",
            body: JSON.stringify(product),
            headers: { "Content-Type": "application/json",
                        "Authorization": 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY2OTA0NDcwNywiaWF0IjoxNjY4Njk5MTA3fQ.U2v6b0G4jLdbEkuRR1vhBBMQMcVyArrm0ZnIghKKLhI'
                    }
        })
            .then(result => result.json())
            .then(data => {

                if (typeof data.id !== 'undefined') {

                    console.log("CREATED PRODUCT:");
                    console.log(data);

                    alert(`PRODUCT CREATED \n` +
                        `------------------------\n` +
                        `ID: ${data.id}\n` +
                        `Name: ${data.name}\n` +
                        `Gender: ${data.gender}\n` +
                        `Age Group: ${data.age}\n` +
                        `Colors: ${data.color}\n` +
                        `Image Path: ${data.imagePath}`
                    )
                }
                else {
                    alert("Failed to create product")
                }

            })
            .catch(error => {
                console.log(error);
            })

    },

    update: (product, productList, setProductList) => {

        fetch(URI + "/clothes", {
            method: 'PUT',
            body: JSON.stringify(product),
            headers: { "Content-Type": "application/json" }
        })
            .then(result => result.json())
            .then(data => {

                if (typeof data.id !== 'undefined') {

                    console.log("UPDATED:");
                    console.log(data);

                    const newList = [...productList];

                    let index = -1;

                    for (let i = 0; i < newList.length; i++) {

                        if (newList[i].id === data.id) {
                            index = i;
                            break;
                        }
                    }

                    newList.splice(index, 1, data)

                    setProductList(newList)
                }
                else {
                    alert("Failed to update product")
                }

            })
            .catch(error => { console.log(error); })

    },

    delete: (id) => {

        fetch(URI + "/clothes/" + id, {
            method: "DELETE"
        })
            .then(result => result.json())
            .then(data => {
                console.log("DELETED:");
                console.log(data);
            })
            .catch(error => { console.log(error); })

    }
}

export default ProdApi;