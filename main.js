//like button       
var btnLike = document.getElementsByClassName("fa-heart")
for(let i = 0; i < btnLike.length; i++) {
    btnLike[i].addEventListener('click', function(){
        btnLike[i].classList.toggle('red')
    })
}

//delete button
let btnTrash = document.getElementsByClassName("fa-trash")
for ( let trash of btnTrash) {
    trash.addEventListener("click", function(){
        trash.parentElement.remove()
        sum()
    })
}

//increment 
var btnPlus = document.getElementsByClassName("fa-plus")
for(let plus of btnPlus) {
    plus.addEventListener('click', function(){
        plus.nextElementSibling.innerHTML++;
        sum()
    })
}

//decrement
var btnMinus = document.getElementsByClassName("fa-minus")
for(let minus of btnMinus) {
    minus.addEventListener('click', function(){
        if(parseInt(minus.previousElementSibling.innerHTML) > 0)
            minus.previousElementSibling.innerHTML--;
            sum()
        })
}

//Sum(using Arrow Functions && Template Literals)
const sum=() => {
    let quantity = document.querySelectorAll(".item-quantity")
    let price = document.querySelectorAll(".item-price")
    let sum = 0
    for(let i = 0; i < quantity.length; i++) {
        sum += quantity[i].innerHTML * price[i].innerHTML
    }
    document.getElementById("total-label").innerHTML = `Total: $${sum}`
}



