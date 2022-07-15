var q1 = document.getElementById('q1')
var q2 = document.getElementById("q2")
var q3 = document.getElementById("q3")
var q4 = document.getElementById("q4")
var q5 = document.getElementById("q5")
var yuh = document.getElementsByClassName("yuh")
var score = 0





$('.yuh').click(gameBegins)
function gameBegins(){
    console.log("clicked");
    $('.yuh').addClass('hidden')
    $('#q1').removeClass('hidden')
}


$('.C1').click(choseC1)
$('#W1, #W2, #W3').click(choseW1)
function choseW1(){
    timer-= 20
    console.log("clicked");
    $('#q1').addClass('hidden')
showQ2()
}

function choseC1(){
    score++
    $('.score').text("SCORE: " + score)
    console.log("clicked");
    $('#q1').addClass('hidden')
showQ2()
}
function showQ2(){
    $('#q2').removeClass('hidden')
}

$('.C2').click(choseC2)
$('#W4 , #W5 , #W6').click(choseW2)

function choseW2(){
    timer-= 20
    console.log("clicked");
    $('#q2').addClass('hidden')
showQ3()
}

function choseC2(){
    score++
    $('.score').text("SCORE: " + score)
    console.log("clicked");
    $('#q2').addClass('hidden')
showQ3()
}
function showQ3(){
    $('#q3').removeClass('hidden')
}

$('.C3').click(choseC3)
$('#W7 , #W8 , #W9').click(choseW3)
function choseW3(){
    timer-= 20
    console.log("clicked");
    $('#q3').addClass('hidden')
showQ4()
}

function choseC3(){
    score++
    $('.score').text("SCORE: " + score)
    console.log("clicked");
    $('#q3').addClass('hidden')
showQ4()
}
function showQ4(){
    $('#q4').removeClass('hidden')
}

$('.C4').click(choseC4)
$('#W10 , #W11 , #W12').click(choseW4)
function choseW4(){
    timer-= 20
    console.log("clicked");
    $('#q4').addClass('hidden')
showQ5()
}
function choseC4(){
    score++
    $('.score').text("SCORE: " + score)
    console.log("clicked");
    $('#q4').addClass('hidden')
showQ5()
}
function showQ5(){
    $('#q5').removeClass('hidden')
}

$('.C5').click(choseC5)
$('#W13 , #W14 , #W15').click(choseW5)
function choseW5(){
    timer-= 20
    $('#q5').addClass('hidden')
    $('.ldrbrd').removeClass('hidden')
    $('#timer').addClass('hidden')
}
function choseC5(){
    score++
    $('.score').text("SCORE: " + score)
    $('#q5').addClass('hidden')
    $('.ldrbrd').removeClass('hidden')
    $('#timer').addClass('hidden')
}


$('.submitbtn').click(addName)
function addName(){
    var name = document.getElementById("submit").value
    var ldrbrdScore = $('.score').text("SCORE: " + score)
    localStorage.setItem(name, ldrbrdScore)
}


var timer = 100
var timerInterval
var quizTimer = document.getElementById("timer");

$('.yuh').click(startTimer);
function startTimer(){
timerInterval = setInterval(function() {
    timer--;
    quizTimer.textContent = "Time left: " + timer;

    if(timer === 0) {
      clearInterval(timerInterval);
      location.reload()
      
    }
    
  }, 1000);
}