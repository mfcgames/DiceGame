var randomNumber=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
var image1="images/dice"+randomNumber2+".png";
var image2 ="images/dice"+randomNumber+".png";

document.querySelector(".img1").setAttribute("src",image1);
document.querySelector(".img2").setAttribute("src",image2);

if (image1 === image2) {
  document.querySelector("h1").textContent ="Draw";
}else if (image1 > image2) {

  document.querySelector("h1").textContent = "Player 1 Won!";

}else {

  document.querySelector("h1").textContent ="Player 2 Won!";

}
