// JavaScript Document

$(document).ready(function(e) {
//variables for canvas
var canvas = $("#canvas")[0];
var ctx = canvas.getContext("2d");
var w = $("#canvas").width();
var h = $("#canvas").height();
//variables for the game
var score = 0;
var hscore = 0;
var food;
var cw = 10;
var d = "right";
function init(){
score = 0;
create_food();
create_snake();
d = "right";
if(typeof game_loop != "undefined")
clearInterval(game_loop);
game_loop = setInterval(paint, 60);
}
function create_snake(){
var length = 5;
snake_array = [];
for(var i = length-1; i >=0; i--){
snake_array.push({x:i, y:0});
}
}
function create_food(){
food = {
x:Math.round(Math.random()*(w-cw)/cw),
y:Math.round(Math.random()*(h-cw)/cw),
};
}
function paint(){
//begin by drawing the background
ctx.fillStyle = "white";
ctx.fillRect(0,0, w, h);
ctx.strokeStyle = "white";
ctx.strokeRect(0,0, w, h);
//the movement code for the snake
//pop out the tail and place it in the front
var nx = snake_array[0].x;
var ny = snake_array[0].y;
//check the direction and increment or decrement the x or y value
if(d=="right")
nx++;
else if(d=="left")
nx--;
else if(d=="up")
ny--;
else if(d=="down")
ny++;
//check and see if there is a collision with the wall or the snake
if(nx == -1 || nx >= w/cw || ny == -1 || ny >= h/cw || check_collision(nx,ny,snake_array)){
init();
return;
}
//check and see if the snake eats the food
if(nx == food.x && ny == food.y){
var tail = {x:nx, y:ny};
score++;
create_food();
}
else{
var tail = snake_array.pop();
tail.x = nx;
tail.y = ny;
}
snake_array.unshift(tail);
for(var i = 0; i<snake_array.length; i++){
var c = snake_array[i];
paint_cell(c.x, c.y);
}
//paint food
paint_cell(food.x, food.y);
//paint the score
ctx.fillStyle = "black";
var score_text = "Score: " + score;
ctx.fillText(score_text, 5, h-5);
var hscore_text = "High Score: " + hscore;
ctx.fillText(hscore_text, 50, h-5);
if(score > hscore){
	hscore++;	
}
}

function paint_cell(x,y){
ctx.fillStyle = "Black";
ctx.fillRect(x * cw, y * cw, cw, cw);
ctx.strokeStyle = "white";
ctx.strokeRect(x * cw, y * cw, cw, cw);
}
function check_collision(x,y, array){
for(var i = 0; i<array.length; i++){
if(array[i].x == x && array[i].y == y)
return true;
}
return false;
}
$(document).keydown(function(e){
var key = e.which;
if(key == "37" && d != "right")
d="left";
else if(key == "38" && d != "down")
d="up";
else if(key == "39" && d != "left")
d="right";
else if(key == "40" && d != "up")
d="down"
});
init();
});
