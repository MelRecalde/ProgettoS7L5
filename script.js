

window.addEventListener("DOMContentLoaded", function () {

    fetch("https://striveschool-api.herokuapp.com/api/product/",
    {
        headers : 
        { Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmQ0MjdjMjM5YzAwMTUyZjRiNTYiLCJpYXQiOjE3MTgzNTMyMTgsImV4cCI6MTcxOTU2MjgxOH0.OxJ6YwubdthjrVDzAAlugy7ABxSvfn4FDIVqb2TF_R4"}
    })
    .then(responsive => {
        //console.log(responsive)
        if(responsive.ok){
            return responsive.json()
        } else {
            throw new Error ("ERROR : something wrong is going on")
        }
    })
    .then(products => {
        const product = document.getElementById("prod-container")

        products.forEach( e => {

            const col = document.createElement("div")
            prod.classList.add("col")
            const card = document.createElement("div")
            card.classList.add("card", "mb-4","shadow-sm")

            const image = document.createElement("img")
            image.src = e.imageUrl
            image.alt = e.description

            const cardBody = document.createElement("div")
            cardBody.classList.add("card-body")

            const name = document.createElement("h5")
            name.innerText = e.name

            const description = document.createElement("p")
            description.innerText = e.description

            const brand = document.createElement("h6")
            brand.innerText = e.brand

            const price = document.createElement("p")
            price.innerText = e.price

            cardBody.appendChild("name")
            cardBody.appendChild("description")
            cardBody.appendChild("brand")
            cardBody.appendChild("price")

            card.appendChild("image")
            card.appendChild("cardBody")

            col.appendChild("card")
            product.appendChild("col")
            
        });
    })
    .catch(error => {
        console.log(error)
    })
})