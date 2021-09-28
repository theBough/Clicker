let b;
let clicks;
function setup() {
  createCanvas(400, 400);
  b = new MakeButton(100,100,20,20,"green",5);
  clicks = 0;
}

function draw() {
  background(255);
  b.display();

}

function mousePressed(){
  //Checking to see if the mouse is ontop of the button.
  if(mouseX > 100 && mouseX<120 && mouseY> 100 &&mouseY<120){
    clicks+=1;
    document.getElementById("clicks").innerHTML = clicks;
  }//end if
  
}//end mousePressed
