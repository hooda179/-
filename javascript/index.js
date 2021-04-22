var result = document.querySelector("p.result");
var confirm = document.querySelector("button.confirm");
var next = document.querySelector("button.next");
let input = document.querySelector("input");
var score = document.querySelector("p.score");
var points = 0;
var clicks = 0;

function playSound(file) {
  var audio = new Audio("./music/" + file + ".mp3");
  audio.play();
}
// calling main function on reload the page
document.querySelector("body").onload = ()=>{
  change();
  input.focus();
};

function change(){

// the numbers you multiply
  function firstRandomNumber() {
    var firstRandomNumber = Math.floor(Math.random() * 10) + 1;
    return firstRandomNumber;
  }
  function secondRandomNumber() {
    var secondRandomNumber = Math.floor(Math.random() * 10) + 1;
    return secondRandomNumber;
  }
  var firstNumber = firstRandomNumber();
  var secondNumber = secondRandomNumber();

  var product = firstNumber * secondNumber;
  var question = document.querySelector("p bdi");
  question.innerHTML = firstNumber + " X " + secondNumber;

  // on clicking confirm

  confirm.addEventListener("click", function(){
    // get input value
    var inputValue = input.value;
    // reset input value
    next.style.display = "inline-block";
    // check solution
    if (inputValue == product) {
      result.innerHTML = "اجابة صحيحة يا سارة";
      result.style.color = "#00BA1B";
      points++;
    }else {
      result.innerHTML = "اجابة خاطئة يا سارة، الاجابة الصحيحة هي " + product;
      result.style.color = "red";
    }
  });
}

next.addEventListener("click", function(){
  change();
  score.innerHTML = "نقطك: " + points;
  next.style.display = "none";
  result.innerHTML = "";
  input.value = "";
});

document.addEventListener("keypress",function(){
  if ((event.keyCode == 13) && (clicks == 0)){
    confirm.click();
    clicks = 1;
  }
  else if ((event.keyCode == 13) && (clicks == 1)){
    next.click();
    clicks = 0;
  }
});
