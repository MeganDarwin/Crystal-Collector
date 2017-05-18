
$( document ).ready(function(){
 var randomNumber=Math.floor((Math.random()*101) +19);
 $("#random-number").text(randomNumber);
 var crystalOne = Math.floor((Math.random()* 12) + 1);
 var crystalTwo = Math.floor((Math.random()* 12) + 1);
 var crystalThree = Math.floor((Math.random()* 12) + 1);
 var crystalFour = Math.floor((Math.random()* 12) + 1);
 var totalScore = 0;
 var wins = 0;
 var losses = 0;


var reset =function() {
 randomNumber=Math.floor((Math.random()*101) +19);
 $("#random-number").text(randomNumber);
 crystalOne = Math.floor((Math.random()* 12) + 1);
 crystalTwo = Math.floor((Math.random()* 12) + 1);
 crystalThree = Math.floor((Math.random()* 12) + 1);
 crystalFour = Math.floor((Math.random()* 12) + 1);
 totalScore = 0;
 $("#total-score").text("Your Total Score:  " + totalScore);
}



  function updateScore() {
	  if (totalScore == randomNumber){
   wins ++;   
  $("#wins").text("Wins: " + wins)
  reset();
} 

if (totalScore > randomNumber){
	losses ++;
   $("#losses").text("Losses: " + losses)
   reset();
}
}



 
$("#crystal1").on("click", function(){
 totalScore = crystalOne + totalScore;
$("#total-score").text("Your Total Score:  " + totalScore);
updateScore();

}),


$("#crystal2").on("click", function(){
 totalScore = crystalTwo + totalScore;
$("#total-score").text("Your Total Score:  " + totalScore);
updateScore();

}),

$("#crystal3").on("click", function(){
 totalScore = crystalThree + totalScore;
$("#total-score").text("Your Total Score:  " + totalScore);
updateScore();


}),

$("#crystal4").on("click", function(){
 totalScore = crystalFour + totalScore;
$("#total-score").text("Your Total Score:  " + totalScore);
updateScore();

})



})


