var canvas = new fabric.Canvas('myCanvas');
// Create canvas variable

ball_x=0;
ball_y=0;
hole_x=800;
hole_y=400;

//Set initial positions for ball and hole images.


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h1.png", function(Img) {
        hole_obj=Img;
        hole_obj.scaleToWidth(150);
        hole_obj.scaleToHeight(140);
        hole_obj.set({
            top:hole_y,
            left:hole_x
        });
        canvas.add(hole_obj);
    });// write code to Upload golf image on the canvas
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img) {
        ball_obj=Img;

        ball_obj.scaleToWidth(50);
        ball_obj.scaleToHeight(50);
        ball_obj.set({
        top:ball_y,
        left:ball_x
        });
        canvas.add(ball_obj);
    });
	// write code to Upload ball image on canvas
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if(ball_x==hole_x && ball_y== hole_y){
        console.remove(ball_obj);
		document.getElementById("hd3").innerHTML="You haveHit the Goal!!!";
        document.getElementById("myCanvas").style.borderColor="red";
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */} }
	
	else
	{
		function my_keydown(e)
{
    keyPressed=e.keyCode;
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
		if(ball_y >=0)
		{
		 ball_y=ball_y-block_image_height;
		 console.log("block image height =" + block_image_height);
		 console.log("when up arrow key is pressed,x =" + ball_x + ",y =" + ball_y);
		 canvas.remove(ball_obj);
		 player_update();
	 }
		// Write a code to move ball upward.
	}

	function down()
	{
		if(ball_y <=500)
		{
		 ball_y=ball_y+block_image_height;
		 console.log("block image height =" + block_image_height);
		 console.log("when down arrow key is pressed,x =" + ball_x + ",y =" + ball_y);
		 canvas.remove(ball_obj);
		 player_update();
	 }
		// Write a code to move ball downward.
	}

	function left()
	{
		if(ball_x >5)
		{
			if(ball_x  >0)
			{
			 ball_x=ball_x-block_image_width;
			 console.log("block image width =" + block_image_width);
			 console.log("when left arrow key is pressed,x =" + ball_x + ",y =" + ball_y);
			 canvas.remove(ball_obj);
			 player_update();
			} 
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			if(ball_x  <=850)
			{
			 ball_x=ball_x+block_image_width;
			 console.log("block image width =" + block_image_width);
			 console.log("when right arrow key is pressed,x =" + ball_x + ",y =" + ball_y);
			 canvas.remove(ball_obj);
			 player_update();
		 }
			// Write a code to move ball right side.
		}
	}
	
}
