function aboutUsSetup() {
}

function aboutUsDraw() {
  background(168, 93, 137);
  
  //Title
  textSize (40);  
  //strokeWeight (90);
  text("ABOUT US", 100, 75);
  fill (255);
  text("ABOUT US", 105, 75);
  
  //Content of about us page
  
  textSize(20); 
  fill(0);
  //strokeWeight (5); 
  text ("This video game is our grade ten", 10, 150);
  text ("computer science summative.", 10, 170);
  
  // 2nd paragraph 
  text ("We've created this video game by using", 10, 210);
  text ("Javascript, HTML and CSS that we've learned", 10, 230);
  text ("throughout the course.", 10, 250); 

  
  text ("We hope you enjoy it!", 10, 300); 
   
  text ("Creators: Riya Simha and Myra Tariq", 10,350);
  
  
  //back button 
  fill (255);
  //stroke(23);
  rect(100,100,100,100);
  
}

function aboutUsMouseClicked() {
 if(mouseX >= 100 && mouseX <= 200 &&
      mouseY >= 100 && mouseY <= 200) {
    // go to main menu
    currentScene = 1; 
 }
}
