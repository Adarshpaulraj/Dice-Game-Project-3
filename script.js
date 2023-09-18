const player1= document.getElementById("player1")
const player2= document.getElementById("player2")
var player1score=0;
var player2score=0;
var currentplayer =1;
var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var score=document.getElementById("player")
var resetbtn = getElementById("btn3")
resetbtn.disabled=true


 
 
 function roll1(){
    
      var rand= Math.floor(Math.random()*6)+1
      let imgall= "images/"+ rand +".png"
      document.querySelector("img").setAttribute("src",imgall)
 
      player1score  += rand;
      player1.textContent=player1score
      btn2.disabled=false
       btn1.disabled=true
   
      
     if (player1score >=30 ){
        score.textContent="🤝Player👏1🙌 win🎉🎊🎆"
        btntyp()

      }
     
      else {
          score.textContent="Player 2 has to play"

     }
}
 

function roll2(){
  var rand= Math.floor(Math.random()*6)+1
      let imgall= "images/"+ rand +".png"
       document.querySelector("img").setAttribute("src",imgall)
      btn1.disabled=false
        player2score += rand
      player2.textContent=player2score
         btn2.disabled=true

       if (player2score>=30) {
           score.textContent="🤝Player👏2🙌 win🎉🎊🎆"
           btntyp()
     } else {
      score.textContent="Player 1 has to play"

     }
}

function btntyp(){
  btn1.disabled=true
  btn2.disabled=true
  resetbtn.disabled=false
  
}


 function reset(){
  player1score=0;
  player2score=0;
  player1.textContent="0"
  player2.textContent="0"
  document.querySelector("img").setAttribute("src","images/1.png")
  btn1.disabled=false
  btn2.disabled=false
  score.textContent="Click RollNow to play"
  

 }





 







 
