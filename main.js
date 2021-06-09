var canvas = new fabric.Canvas('myCanvas');
var blockImageWidth = 30;
var blockImageHeight = 30;
var playerX = 10;
var playerY = 10;
var playerObject = "";

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Img) {
        playerObject = Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(playerObject);
    });
}

function newImage(getImage) {
    fabric.Image.fromURL(getImage, function(Img) {
        blockImageObject = Img;
        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(blockImageObject);
    });
}
window.addEventListener("keydown", myKeydown);
function myKeydown() {
    keyPressed = e.keyCode;
if (keyPressed == '38') {
    up();
    console.log("up");
}
if (keyPressed == '40') {
    down();
    console.log("down");
}
if (keyPressed == '37') {
    left();
    console.log("left");
}
if (keyPressed == '39') {
    right();
    console.log("right");
}
// 70 66 76 82 72
if (keypressed = "70") {
    newImage(ironman_face.png);
    console("f");
}
if (keypressed = "66") {
    newImage(spiderman_body.png);
    console("b");
}
if (keypressed = "76") {
    newImage(hulk_legs.png);
    console("l");
}
if (keypressed = "82") {
    newImage(thor_right_hand.png);
    console("r");
}
if (keypressed = "72") {
    newImage(captain_america_left_hand.png);
    console("h");
}
}
function up() {
    if (playerY >= 0) {
        playerY = playerY - blockImageHeight;
        console.log("block image hieght = " + blockImageHeight);
        console.log("when the up arrow key is pressed, X = " + playerX + "Y = " + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function down() {
    if (playerY <= 500) {
        playerY = playerY + blockImageHeight;
        console.log("block image hieght = " + blockImageHeight);
        console.log("when the up arrow key is pressed, X = " + playerX + "Y = " + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function left() {
    if (playerX > 0) {
        playerX = playerX - blockImageWidth;
        console.log("block image widtht = " + blockImageWidth);
        console.log("when the up arrow key is pressed, X = " + playerX + "Y = " + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function right() {
    if (playerX <= 850) {
        playerX = playerX + blockImageWidth;
        console.log("block image widtht = " + blockImageWidth);
        console.log("when the up arrow key is pressed, X = " + playerX + "Y = " + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}