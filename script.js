// JAYF STORE JavaScript

document.addEventListener("DOMContentLoaded", () => {
    console.log("JAYF STORE Loaded");
});

// Shop Now button
const shopBtn = document.querySelector(".shop-btn");
if (shopBtn) {
    shopBtn.addEventListener("click", () => {
        document.getElementById("products").scrollIntoView({
            behavior: "smooth"
        });
    });
}

// Add to Cart buttons
const cartButtons = document.querySelectorAll(".product-card button");

cartButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Product added to cart!");
    });
});