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
        rover_image="image-removebg-preview (1).png"
        rover_imgTag.onload = uploadrover;
        rover_imgTag.src = rover_image;
        up();
        console.log("up");
    }
    if(keyPressed == '40')
    {
        rover_image="image-removebg-preview (2).png"
        rover_imgTag.onload = uploadrover;
        rover_imgTag.src = rover_image;
        down();
        console.log("down");
    }
    if(keyPressed == '37')
    {
        rover_image="image-removebg-preview (3).png"
        rover_imgTag.onload = uploadrover;
        rover_imgTag.src = rover_image;
        left();
        console.log("left");
    }
    if(keyPressed == '39')
    {
        rover_image="image-removebg-preview (2).png"
        rover_imgTag.onload = uploadrover;
        rover_imgTag.src = rover_image;
        right();
        console.log("right");
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
