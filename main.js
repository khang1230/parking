var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")

var greencar_width = 75
var greencar_height = 100
var greencar_X = 5
var greencar_Y = 225

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

var backgroundImageTag, greencar_imgTag

function add() {
	backgroundImageTag = new Image()
    backgroundImageTag.onload = uploadBackground
    backgroundImageTag.src = background_image

    greencar_imgTag = new Image()
    greencar_imgTag.onload = uploadgreencar
    greencar_imgTag.src = greencar_image
}

function uploadBackground() {
	ctx.drawImage(backgroundImageTag,0,0,canvas.width,canvas.height)
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag,greencar_X,greencar_Y,greencar_width,greencar_height)
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
    if(greencar_Y>= 0){
        greencar_Y = greencar_Y - 10
        uploadBackground()
        uploadgreencar()
    }
}

function down()
{
	if(greencar_Y <= 300){
        greencar_Y = greencar_Y + 10
        uploadBackground()
        uploadgreencar()
    }
}

function left()
{
	if(greencar_X >= 0){
        greencar_X = greencar_X - 10
        uploadBackground()
        uploadgreencar()
    }
}

function right()
{
	if(greencar_X <= 500){
        greencar_X = greencar_X + 10
        uploadBackground()
        uploadgreencar()
    }
}
