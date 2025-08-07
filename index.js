//alert("a!")
var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var started = false;
var level =0;

$(document).on("keydown", function () {
  if (!started) {
    nextSequence();
    started = true;
  }
});

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

    if (userClickedPattern.length === gamePattern.length) {
      
      setTimeout(function () {
        nextSequence();
      }, 1000);}
    
} else{
  console.log("wrong")
  var audio_over=new Audio("./sounds/wrong.mp3")
  audio_over.play();
  $("body").addClass("game-over");
  setTimeout(function(){$("body").removeClass("game-over");},200);
  $("h1").text("GAME OVER! Refresh or Press Any key restart.");
  
    restart();
  
}
}

function restart(){
  level=0;
  gamePattern=[];
  started=false;
}


function nextSequence() {
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(150).fadeIn(150);
    playSound(randomChosenColour);
    $("h1").text("level: "+level);
    level++;
}



$('.btn').on('click', function () {
    userClickedPattern.push(this.id);
    console.log(userClickedPattern);
    playSound(this.id);
    animatePress(this.id);
    checkAnswer(userClickedPattern.length-1);
    
});

function playSound(name) {
    var audio = new Audio('./sounds/' + name + '.mp3');
    //console.log(audio);
    audio.play();
}


function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () { $("#" + currentColour).removeClass("pressed") }, 100);
}




