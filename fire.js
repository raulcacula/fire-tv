window.addEventListener("scroll", function(){
    var header = this.document.querySelector('header')
    header.classList.toggle("sticky", this.window.scrollY > 0)
})

var radio = document.querySelector('.manual-btn')
var conta = 1
document.getElementById('radio1').checked = true

setInterval(() =>{
    proxima()
},2000)

function proxima(){
    conta++

    if(conta > 5){
        conta = 1
    }
   document.getElementById('radio'+conta).checked = true
}

function Liberar(){
    var card = document.querySelector('.card-live-mais')
   var mais = document.querySelector('.mostra-mais-live')
    if( card.style.display = 'flex'){
        mais.style.display = 'none'
    }
}

function CloseLogin(){
    var close = document.getElementById('close')
    var login = document.querySelector('.login')

    if(close = login.style.display = 'none'){

    }
}

var prox = document.getElementById('prox')
var form = document.getElementById('form-login')
var parte2 = document.querySelector('.progresso-2')
var titulo = document.querySelector('.titulo-login h1')
var final = document.querySelector('.progresso-final')
function progresso2(){
 if(prox = form.style.display = 'none'){
    parte2.style.display = 'block'
    titulo.style.display = 'none'

 }
}
prox.addEventListener('click', progresso2)

var finalBtn = document.getElementById('prox-final')
function  finalizacao(){
    if(finalBtn = parte2.style.display = 'none'){
        final.style.display = 'block'
    }
}
finalBtn.addEventListener('click',finalizacao)


var linkR = document.getElementById('recebe')
var loginf = document.getElementById('login-fire')
function Receber(){
if(linkR = loginf.style.display = 'flex'){
}
}
linkR.addEventListener('click', Receber)


function menuShow(){
    var line1 = document.getElementById('lineMenu')
    var line2 = document.getElementById('lineMenu2')
    var line3 = document.getElementById('lineMenu3')
    var items = document.querySelector('.items-container')
    if( items.style.display == 'block'){
        items.style.display = 'none'
        // BARS STYLE//
        line1.style.rotate = '0deg'
        line2.style.rotate = '0deg'
        line2.style.marginTop = '0px'
        line3.style.display = 'block'
        line1.style.width = '30px'
        line2.style.width = '25px'
    }else{
        items.style.display = 'block'
        // BARS STYLE //
        line1.style.rotate = '400deg'
        line2.style.rotate = '1400deg'
        line2.style.marginTop = '-10px'
        line3.style.display = 'none'
        line1.style.width = '40px'
        line2.style.width = '40px'
    }
}