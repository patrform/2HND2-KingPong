﻿//this function will take care of creating my buttons
/* TO DO
* Create 2 buttons, Play Game and Quit
* Create the code that happens when Play Game or Quit are pressed
* Please note that functions are CaseSenSiTivE
*/
var myGameText:GUISkin;
function OnGUI ()
{
	var screenWidth:int;
	var screenHeight:int;
	var centerX:float;
	var centerY:float;
	
	
	screenWidth = Screen.width; //this = 300
	screenHeight = Screen.height; //this = 600
	
	//found the center of the screen by dividing width and height 
	centerX = screenWidth/2;
	centerY = screenHeight/2;
	
	//set the GUI style
	GUI.skin = myGameText;
	
	
	//create a small text.  X position, Y position, WIDTH, HEIGHT
	GUI.Label(Rect(centerX-50,centerY-15,100,30),"KING PONG!");
	
	//play game button
	if( GUI.Button (Rect(centerX-50,centerY+10,100,50),"PLAY GAME") )
	{
		//Load scene 'Game'
		Application.LoadLevel(1);
	}

}

function Start () {

}

function Update () {

}