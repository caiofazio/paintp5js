var sliderR, sliderG, sliderB, divR, divG, divB, thickV, divThick;
var canvas;
var radius;
var drawV = [];
var flag = false;
var lineProp = {
red: 0,
green: 0,
blue: 0,
thicknessV: 2
}
function setup() {
  canvas = createCanvas(500, 500);
  background(255)
  radius = 1;
  frameRate(300)
  thickV = document.getElementById('thickV')
  sliderR = document.getElementById('colorR')
  sliderG = document.getElementById('colorG')
  sliderB = document.getElementById('colorB')
  thickV.onchange = thickUpdate;
  sliderR.onchange = colorUpdate;
  sliderG.onchange = colorUpdate;
  sliderB.onchange = colorUpdate;
}

function draw() {
  push()
  fill(color(lineProp.red,lineProp.green,lineProp.blue))
  rect(10,10,20,20,10)
  pop()
  if(flag){
  drawLine()
  }
}

function mousePressed(){
    flag = true;
  

}




function drawLine(){
  drawV.push({x: mouseX, y: mouseY})
  let aux = drawV.length;
  if(drawV.length == 1){
  push()
  strokeWeight(lineProp.thicknessV)
  stroke(lineProp.red,lineProp.green,lineProp.blue)
  line(drawV[0].x,drawV[0].y,drawV[0].x,drawV[0].y)
  pop()
  
  }else{
  push()
  strokeWeight(lineProp.thicknessV)
  stroke(lineProp.red,lineProp.green,lineProp.blue)
  line(drawV[aux - 2].x,drawV[aux - 2].y, drawV[aux - 1].x, drawV[aux - 1].y)
  pop()
  }


}
function mouseReleased(){
flag = false;
drawV = []

}
function thickUpdate(){
let temp = thickV.value;
lineProp.thicknessV = temp;
document.getElementsByClassName('thickValue')[0].innerHTML = temp;

}
function colorUpdate(){
  let colorsTemp = [];
  colorsTemp.push(sliderR.value);
  colorsTemp.push(sliderG.value);
  colorsTemp.push(sliderB.value);
  lineProp.red = colorsTemp[0]
  lineProp.green = colorsTemp[1]
  lineProp.blue = colorsTemp[2]
  for(let i = 0; i < 3; i++){
  document.getElementsByClassName('colorValue')[i].innerHTML = colorsTemp[i]
  }
}
