var background_image = "image (1).png";
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var rover_image = "image-removebg-preview (1).png";
var rx = 10;
var ry = 10;
var rw = 70;
var rh = 90;
background_imgTag = "";
rover_imgTag = "";
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}
function uploadBackground(){
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag, rx, ry, rw, rh);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        rover_image = "image-removebg-preview (3).png";
        up();
        console.log("up");
        uploadrover();
    }
    if(keyPressed == '40')
    {
        rover_image = "image-removebg-preview (1).png";
        down();
        console.log("down");
        uploadrover();
    }
    if(keyPressed == '37')
    {
        rover_image = "image-removebg-preview (4).png"
        left();
        console.log("left");
        uploadrover();
    }
    if(keyPressed == '39')
    {
        rover_image = "image-removebg-preview (2).png";
        right();
        console.log("right");
        uploadrover();
    }
}
function up()
{
    if (ry>=0)
    {
        ry-=10;
uploadBackground();
uploadrover();
    }
}
function down()
{
if (ry<=500)
{
ry+=10;
uploadBackground();
uploadrover(); 
}
}
    function left()
    {
            if (rx>=0)
            {
                rx-=10;
                uploadBackground();
                uploadrover(); 
            }       
    }
            function right()
            {
                if (rx<=700)
                {
                    rx+=10;
                    uploadBackground();
                    uploadrover(); 
                }
            }
