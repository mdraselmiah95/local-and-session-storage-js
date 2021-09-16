// console.log("Checking js");
const displayLocalStorage = () => {
    const cart 
}


const addItem = () => {
    const nameField = document.getElementById('product-name');
    const name = nameField.value;
    if (!name) {
        return;
    }
    //display in the ul
    
}


const displayProduct = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;

    if (cart) {  //aga thaka sava kora thaka
        cartObj = JSON.parse(cart);
    } else {
        cartObj = [];
    }
    return cartObj;
}

const addProductToCart = name => {
    console.log(name);
    const cart = getCart;


    if (cart[name]) {
        cart[name] = cart[name] + 1;
    } else {
        cart[name] = 1;
    }
}