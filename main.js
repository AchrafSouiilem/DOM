var trash = document.getElementsByClassName("fa-trash")
for ( let btndelete of trash) {
    btndelete.addEventListener("click", function(){
        btndelete.parentElement.parentElement.parentElement.remove()
    })
}

var btnLike = document.getElementsByClassName("fa-heart")
for(let heart of btnLike) {
    heart.addEventListener('click', function(){
        heart.classList.toggle('red')
    })
}

btnPlus = document.getElementsByClassName("fa-plus")
for(let plus of btnPlus) {
    plus.addEventListener('click', function(){
        plus.nextElementSibling.innerHTML++;
    })
}

btnMinus = document.getElementsByClassName("fa-minus")
for(let minus of btnMinus) {
    minus.addEventListener('click', function(){
        if(minus.nextElementSibling.innerHTML > 0){
            minus.nextElementSibling.innerHTML--;
        }})
}