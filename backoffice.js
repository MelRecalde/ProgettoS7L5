/*

window.addEventListener("DOMContentLoaded", function () {

    const URL = "https://striveschool-api.herokuapp.com/api/product/"

    const form = document.querySelector("form")
    
    const title = document.getElementById("title")
    const submitBtn = document.querySelector("button[type='submit']");
    const deleteBtn = document.querySelector("button[type='button'].btn-outline-danger");
  
    fetch(URL,
    {
        method : "",
        headers : 
        { Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmQ0MjdjMjM5YzAwMTUyZjRiNTYiLCJpYXQiOjE3MTgzNTMyMTgsImV4cCI6MTcxOTU2MjgxOH0.OxJ6YwubdthjrVDzAAlugy7ABxSvfn4FDIVqb2TF_R4"}
       
    })
    .then(responsive => {
        if(responsive.ok){
            return responsive
        } else {
            throw new Error ("ERROR")
        }   
    })
    .then(products => {
        const { nameProd, description, brand, imageUrl, price} = products

        document.getElementById("product-name").value = nameProd
        document.getElementById("description").value = description
        document.getElementById("product-brand").value = brand
        document.getElementById("product-img").value = imageUrl
        document.getElementById("product-price").value = price

    })
    .catch(error => {
        console.log(error)
    })

})

const createProd = (event => {
    event.preventDefault()

    const newProd = {
        nameProd: document.getElementById("product-name").value,
        description: document.getElementById("description").value,
        brand: document.getElementById("product-brand").value,
        imageUrl: document.getElementById("product-img").value,
        price: document.getElementById("product-price").value
    }

    fetch("https://striveschool-api.herokuapp.com/api/product/",
        {
            method : "POST",
            body : JSON.stringify(newProd),
            headers : {
            Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmQ0MjdjMjM5YzAwMTUyZjRiNTYiLCJpYXQiOjE3MTgzNTMyMTgsImV4cCI6MTcxOTU2MjgxOH0.OxJ6YwubdthjrVDzAAlugy7ABxSvfn4FDIVqb2TF_R4"
            }
        }
    )
    .then(creationProd => {
        alert(`The product ${creationProd.name} has been created`);
    })
    .catch(error => {
        console.log(error)
    })

})

*/

