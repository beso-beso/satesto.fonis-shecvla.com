var shecvla = document.querySelector('.shecvla')

    shecvla.addEventListener('click', function(){
    var div = document.querySelector('div');
    

    if (div.style.marginTop == -395 + 'px') {
        div.style.marginTop = 0 + 'px'
        shecvla.textContent = 'უკან დაბრუნება'
    } else {
        div.style.marginTop = -395 + 'px'
        shecvla.textContent = 'შეცვალეთ ფონის ფერი'

    }
})

var blue = document.getElementById('blue')
var red = document.getElementById('red')
var yellow = document.getElementById('yellow')
var green = document.getElementById('green')
var white = document.getElementById('white')

white.addEventListener('click', function(){
   
    document.body.style.backgroundColor = 'white'
 
 })



blue.addEventListener('click', function(){
   
   document.body.style.backgroundColor = 'blue'

})
red.addEventListener('click', function(){
   
    document.body.style.backgroundColor = 'red'
 
 })
 green.addEventListener('click', function(){
   
    document.body.style.backgroundColor = 'green'
 
 })
 yellow.addEventListener('click', function(){
   
    document.body.style.backgroundColor = 'yellow'
 
 })


