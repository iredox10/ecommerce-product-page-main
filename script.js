let cart;
const addQuantity = document.querySelector('.plus')
const quantity = document.querySelector('.number')
const subQuantity = document.querySelector('.minus')

const viewCart = document.querySelector('.cart')
const cartCard = document.querySelector('.cart-card')
const sneaker = document.querySelector('.fall-limit')
const addToCartBtn = document.querySelector('.add-to-cart')
const products = document.querySelector('.products')

const cartQuantity = document.querySelector('.quantity')

let count = 0
const product = {}
const cartItems = []


// ! add to cart
addToCartBtn.addEventListener('click', () => {
    if (count === 0 || cartItems.length >0) {
        return
    }
    const productName = sneaker.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextElementSibling.textContent
    const price = sneaker.firstElementChild.nextElementSibling.nextElementSibling.firstChild.nextSibling.textContent.slice(0, 7)
    const quantity = count
    product.productName = productName
    product.price = price
    product.quantity = quantity
    cartItems.push(product)

    const cartProductName = createElement('p', 'productName')
    const cartprice = createElement('p', 'cartPrice')
    const cartquantity = createElement('p', 'quantity')
    const carttotal = createElement('p', 'carttotal')
    const cartcount = createElement('p', 'cartcount')
    const checkout = createElement('button', 'checkout')
    const container = createElement('div', 'container')
    
    cartItems.forEach(item => {
        cartProductName.textContent = item.productName
        cartprice.textContent = item.price
        cartquantity.textContent = item.quantity
        checkout.textContent = 'checkout'
        // carttotal.textContent = item.quantity * count
        products.appendChild(cartProductName)
        products.appendChild(cartprice)
        products.appendChild(cartquantity)
        products.appendChild(cartcount)
        products.appendChild(checkout)
        
        console.log(products)
    })
    cartQuantity.textContent = count;

    console.log(count)
})

// !view cart
viewCart.addEventListener('click', () => {
    cartCard.classList.toggle('openCart')
    if (cartItems.length < 0) {
        const pTag = cartCard.lastChild.previousSibling
        pTag.textContent = 'Your cart is empty'
    }
})

// add or subtract the quantity
addQuantity.addEventListener('click', () => {
    count++
    quantity.textContent = count
})
subQuantity.addEventListener('click', () => {
    if (parseInt(quantity.textContent) <= 0) {
        count = 0
    } else {
        count--
        quantity.textContent = count
    }
})

function createElement(element, className) {
    const tag = document.createElement(element)
    const cssClass = tag.classList.add(className)
    return tag
}