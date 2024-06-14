

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
        console.log(products)
        const product = document.getElementById("prod-container")

        products.forEach( e => {

            const col = document.createElement("div")
            col.classList.add("col-mb-4")
            const card = document.createElement("div")
            card.classList.add("card", "mb-4","shadow-sm")

            /*const link = document.createElement("a")
            link.href = new URLSearchParams(window.location.search).get(nameProd)*/
            const image = document.createElement("img")
            image.src = e.imageUrl
            image.alt = e.description
            image.height = 300
            image.classList.add("object-fit-cover")


            const cardBody = document.createElement("div")
            cardBody.classList.add("card-body","col")

            const nameProd = document.createElement("h2")
            nameProd.innerText = e.name

            const description = document.createElement("p")
            description.innerText = `${e.description}`

            const brand = document.createElement("h6")
            brand.innerText = `Brand : ${e.brand}`

            const price = document.createElement("h5")
            price.classList.add("text-success")
            price.innerText = `EUR ${e.price}`

            cardBody.appendChild(nameProd)
            cardBody.appendChild(brand)
            cardBody.appendChild(description)
            
            cardBody.appendChild(price)
            //link.appendChild(image)

            card.appendChild(image)
            card.appendChild(cardBody)

            col.appendChild(card)
            product.appendChild(col)
            
        });
    })
    .catch(error => {
        console.log(error)
    })
})