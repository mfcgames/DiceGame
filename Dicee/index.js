var randomNumber=Math.floor(Math.random()*6)+1;//Randomization number
var randomNumber2=Math.floor(Math.random()*6)+1;//Randomization second number

var image1="images/dice"+randomNumber2+".png";//inserting random number to images
var image2 ="images/dice"+randomNumber+".png";//inserting random number to images

//Inserting images on screen  
document.querySelector(".img1").setAttribute("src",image1);
document.querySelector(".img2").setAttribute("src",image2);

//Between two image statements which is equalty, greater than or smaller than other image  
if (image1 === image2) {
  document.querySelector("h1").textContent ="Draw";
}else if (image1 > image2) {

  document.querySelector("h1").textContent = "Player 1 Won!";

}else {

  document.querySelector("h1").textContent ="Player 2 Won!";

}
