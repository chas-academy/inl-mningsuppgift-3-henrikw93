

const productInput = document.getElementById("productInput");
const priceInput = document.getElementById("priceInput");
const addButton = document.getElementById("addButton");
const cartList = document.getElementById("cartList");


const productList = [];


addButton.addEventListener("click", () => {

    const name = productInput.value;
    const cost = Number(priceInput.value);

    addProduct(name, cost);

    productInput.value = "";
    priceInput.value = "";
})




function addProduct(name, cost) {

    cartList.innerHTML = "";

    let alreadyExists = false;

    for (let product of productList) {
        if (name === product.productName) {
            alreadyExists = true;
            product.quantity++;
            break;
        }
    }

    if (alreadyExists === false) {
        productList.push({productName: name, price: cost, quantity: 1})
    }

    for (let product of productList) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${product.productName} - ${product.price}kr (x${product.quantity})`;
        cartList.appendChild(listItem);
    }
}
