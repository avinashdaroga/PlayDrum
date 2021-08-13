// document.querySelectorAll("button")[0].addEventListener("click",handleEvent);
// document.querySelectorAll("button")[1].addEventListener("click",handleEvent);
// document.querySelectorAll("button")[2].addEventListener("click",handleEvent);
// document.querySelectorAll("button")[3].addEventListener("click",handleEvent);
// document.querySelectorAll("button")[4].addEventListener("click",handleEvent);
// document.querySelectorAll("button")[5].addEventListener("click",handleEvent);
// document.querySelectorAll("button")[6].addEventListener("click",handleEvent);
// for (var i=0;i<7;i++)
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click",handleEvent);
}
function handleEvent()
{
  var buttonInnerhtml = this.innerHTML;
  makeSound(buttonInnerhtml);

}

document.addEventListener("keypress",function(event){
         makeSound(event.key);
});

function makeSound(key)
{
   switch (key)
  {
    case "a":
       var tom1= new Audio("sounds/tom-1.mp3");
       tom1.play();
       break;
    case "s":
       var tom2 = new Audio("sounds/tom-2.mp3");
       tom2.play();
       break;
    case "d":
       var tom3 = new Audio("sounds/tom-3.mp3");
       tom3.play();
       break;
    case "f":
       var tom4 = new Audio("sounds/tom-2.mp3");
       tom4.play();
       break;
    case "j":
       var snare = new Audio("sounds/snare.mp3");
       snare.play();
       break;
    case "k":
       var crash  = new Audio("sounds/crash.mp3");
       crash.play();
       break;
    case "l":
       var kick = new Audio("sounds/kick-bass.mp3");
       kick.play();
       break;
   default : alert("please press only displayed word")
  }
}