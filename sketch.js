function setup() {
  createCanvas(600, 600);
background("blue");
 }
 
 function draw() {
   
 stroke("blue");
   fill("red");
 
//console.long(mouseIspressend);  
 
 if(mouseIsPressed) {
   rect(mouseX, mouseY, 20, 35);
  }
}
