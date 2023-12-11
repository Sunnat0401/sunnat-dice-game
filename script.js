 //buttons
const btnRoll =  document.querySelector('.btn--roll')
const btnNew = document.querySelector('.btn--new')
const btnHold = document.querySelector('.btn--hold')
   //dice img
const diceImg = document.querySelector('.dice')
  diceImg.style.display = 'none'

  let currentStore = 0 
  let activPlayer = 0
  let score = [0,0]
  let gameOver = true
  const switchPlayer =()=>{
    currentStore = 0
    // currentStore  += random
    document.getElementById(`current--${activPlayer}`).textContent = currentStore
    activPlayer = activPlayer===0? 1 : 0
    document.querySelector('.player--0').classList.toggle('player--active')
    document.querySelector('.player--1').classList.toggle('player--active')
  }

  btnRoll.addEventListener('click', ()=>{
   if(gameOver){
    diceImg.style.display = 'block'  

    const random = Math.floor(Math.random() * 6 + 1)
        
     diceImg.src =`./dice-${random}.png`
 
   if(random !== 1){
       currentStore  += random
       document.getElementById(`current--${activPlayer}`).textContent = currentStore
 
   }else{
    switchPlayer()
 
   }
   }

  })
  btnHold.addEventListener('click',()=>{
   if(gameOver){
    score[activPlayer]+=currentStore
    document.getElementById(`score--${activPlayer}`).textContent = score[activPlayer]
    if(score[activPlayer]  >= 20){
     //winner
     document.querySelector(`.player--${activPlayer}`).classList.add('player--winner')
      gameOver = false
    }else{
        switchPlayer()
    }
   }
  })
  btnNew.addEventListener('click', ()=>{
     currentStore = 0 
     activPlayer = 0
     score = [0,0]
     gameOver = true
     document.getElementById(`current--0`).textContent = 0
     document.getElementById(`current--1`).textContent = 0
     document.getElementById(`score--0`).textContent = 0
     document.getElementById(`score--1`).textContent = 0
     document.querySelector('.player--1').classList.remove('player--winner')
     document.querySelector('.player--0').classList.remove('player--winner')
     document.querySelector('.player--1').classList.remove('player--active')
     document.querySelector('.player--0').classList.add('player--active')
  })



