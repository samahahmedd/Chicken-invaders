var chickencontainer= document.querySelector('.chicken-container')
var rocket= document.querySelector('.rocket')

 var container = document.querySelector('.container')
 var  contaniresize = container.getBoundingClientRect()

for(var x = 0; x < 50 ; x++){
  var chicken = document.createElement('img')
  chicken.setAttribute('class' , 'chicken')
  chicken.src = './Images/Chicken.png'
  chickencontainer.append(chicken)
}

var positionR = 0
var positionE = 0

window.addEventListener('keydown',function(e){
if(e.code === 'ArrowUp'){
    positionR +=10
    rocket.style.bottom = positionR +'px'

    console.log(positionR)
    if(positionR >= (contaniresize.height - 150)){
        positionR = contaniresize.height -150
    }

}

 else if(e.code ==='ArrowDown'){
    positionR -=10
    rocket.style.bottom = positionR +'px'

    if( positionR <=10)
    positionR - 10}

    else if(e.code ==='ArrowLeft'){
        positionR -=10
        rocket.style.left = positionE +'px'
        
        if( positionE <=10)
            positionE - 10}


        else if(e.code ==='ArrowRight'){
            positionE +=10
            rocket.style.left = positionE +'px'
            if(positionE >= contaniresize.width - 200){
                positionE = contaniresize.width -200
            }  }


if(e.code === 'Space'){
    var bullet = document.createElement('img')
    bullet.classList.add('bullet')
   bullet.src = './Images/Bullet.png'
   rocket.append(bullet)

   var bulletpositins =0 

   var bulletInterval=setInterval(function(){
    bulletpositins +=10
    bullet.style.bottom =bulletpositins +'px'

if(bulletpositins > 1000){
    clearInterval(bulletInterval)
    rocket.removeChild(bullet)
}
   },10)
}
            
    

})