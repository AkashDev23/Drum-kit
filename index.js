var numberOfDrumButtons = document.querySelectorAll(".drum").length;
//select all the drum element.. in this case drum .length is 6
for (var i = 0; i < numberOfDrumButtons; i++) {
  //play click function it works on click.. Whenever the user clicks on the object then it activates
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}
//add event listener does anything when it is called in this case after the keypress
document.addEventListener("keypress", function(event) {
  //when a key is pressed then it will make a sound
  makeSound(event.key);
  //when a key is pressed then it will do an animation
  buttonAnimation(event.key);

});


function makeSound(key) {
  //switch case if the user press any key play that sound
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default:
      console.log(key);

  }
}

function buttonAnimation(currentKey) {
  //switch case for the animation
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
