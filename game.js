const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
var scoreBoard = document.querySelector('.score span')
//var restartBtn = document.querySelector('.restart-btn')
var score=0;
function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(check ,10);
  function check () {
  
	
  // get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  // get current cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );


  // detect collision
  if (cactusLeft < 20 && cactusLeft > 0 && dinoTop >= 320) {
    // collision
    cactus.style.animation="none";
    cactus.style.display="none";
    document.querySelector('.game').classList.add('lost')
    

    //location.reload();
     alert("Game Over! your score is " + scoreBoard.innerText);
     location.reload();
  }
  scoreBoard.innerText++;
  
	requestAnimationFrame(check);
}



document.addEventListener("keydown", function (event) {
  jump();
});


