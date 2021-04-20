const price = document.querySelectorAll('.product-box__meta p')
const buttons = document.querySelectorAll('.product-box__btn')
const qty = document.querySelectorAll('.qty__item')
const count = document.getElementById('count')
const order = document.getElementById('order')
const dishesBox = document.querySelectorAll('.product-box__item')
const selectPrice = document.getElementById('selectPrice')
const selectCat = document.getElementById('selectCat')

let money = []
let basketCount = 0
let basketOrder = 0

document.addEventListener('DOMContentLoaded', function () {
    for (let i = 0; i < price.length; i++) {
        price[i].dataset.price = price[i].innerText.replace(' грн.', '')
    }
    money = document.querySelectorAll('[data-price]')
})

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        if (qty[i].value > 0) {
            basketCount += +qty[i].value
            basketOrder += +money[i].dataset.price * +qty[i].value
            count.innerText = basketCount
            order.innerText = basketOrder
            qty[i].value = null
        }
    })
}

selectCat.addEventListener('change', function () {
    for (let i = 0; i < dishesBox.length; i++) {
        if (dishesBox[i].dataset.cat !== selectCat.value && selectCat.value > 0) {
            dishesBox[i].classList.add('inactiveCat')
        } else {
            dishesBox[i].classList.remove('inactiveCat')
        }
    }
})

selectPrice.addEventListener('change', function () {
    for (let i = 0; i < dishesBox.length; i++) {
        if (+price[i].dataset.price > +selectPrice.value && selectPrice.value > 0) {
            dishesBox[i].classList.add('inactivePrice')
        } else {
            dishesBox[i].classList.remove('inactivePrice')
        }
    }
})

//=====================modal======

const modal = document.getElementById("myModal");
const btn = document.querySelector(".btn-check");
const span = document.getElementsByClassName("close")[0];
const closeBtn = document.getElementById("modal__submit");
const email = document.getElementById("email")
const customerName = document.getElementById("name")
const cancel = document.getElementById('cancel')

btn.onclick = function () {
    email.value = ""
    customerName.value = ""
    modal.style.display = "block"
}

closeBtn.addEventListener('click', function (event) {
    event.preventDefault()
    if (!customerName.value.trim()) {
        alert("Заполните поле Имя!!")
    }
    if (!email.value.trim()) {
        alert("Заполните поле Email!!")
    }
    if (customerName.value.trim() && email.value.trim()) {
        alert("Благодарим за покупки!")
        modal.style.display = "none"
        count.innerText = "XXX"
        order.innerText = "XXX"
    }
})

cancel.addEventListener("click", function () {
    modal.style.display = "none"
})