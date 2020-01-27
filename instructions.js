function instructionsSetup() {
}

function instructionsDraw() {
  background(222, 87, 215);
  fill(0,0,0);
  strokeWeight(90);
  textSize(40);
  text("HOW TO PLAY", 62,50);
  fill(255,255,255);
  text("HOW TO PLAY", 65,49);
  
  fill(0,0,0);
  textSize(20);
  text("Use the mouse to click on the shapes that" , 10,100);
  text("apply to the descriptive word at the top of",10,120);
  text("the screen.",10,140);
  
  textSize(18);
  text("If you miss a shape or click", 140,175);
  text("the wrong one, answer a", 140,195);
  text("question right to keep going!", 140, 215);
  
  
  text("See a big image coming up? ", 160, 270);
  text("Click on it to play a fun mini ",160,290);
  text("game!",170,310);
  
   fill(85, 197, 224);
  rect(75,200,5,2);
  
  triangle(50, 295, 78, 240, 106, 295);
  
  fill(255, 0, 0);
  rect (80, 250, 10, 10);
}

function instructionsMouseClicked() {
  if(mouseX >= 80 && mouseX <= 90 &&
      mouseY >= 250 && mouseY <= 260) {
    // go to main menu
    currentScene = 1;
  }
}
