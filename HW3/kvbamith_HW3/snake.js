var timer;
var x = 0;
var y = 100;
var oldX = 0;
var oldY = 100;
var dir = 1;
var dx = 2;
var dy = 0;

function startDrawing(){
    var context = document.getElementById("canvasId").getContext("2d");
    if(document.getElementById("btn").value == "Stop"){
        document.getElementById("btn").value="Start";
        clearInterval(timer);
    }else{
        document.getElementById("btn").value="Stop";
        // var startButton = document.getElementById("Start");
        // startButton.style.display = "block";
        context.beginPath();
        context.strokeStyle = "#0000FF";
        timer =setInterval(function(){
            var left = document.getElementById("Left");
            var right = document.getElementById("Right");
            left.onclick = function () {
                if(dir == 1){
                    dx = 0;
                    dy = -2;
                    dir++;
                }else if(dir == 2){
                    dx = -2;
                    dy = 0;
                    dir++;
                }else if(dir == 3){
                    dx = 0;
                    dy = 2;
                    dir++;
                }else if(dir == 4){
                    dx = 2;
                    dy = 0;
                    dir = 1;
                }

            }
            right.onclick = function () {
                if(dir == 1){
                    dx = 0;
                    dy = 2;
                    dir = 4;
                }else if(dir == 2){
                    dx = 2;
                    dy = 0;
                    dir--;
                }else if(dir == 3){
                    dx = 0;
                    dy = -2;
                    dir--;
                }else if(dir == 4){
                    dx = -2;
                    dy = 0;
                    dir--;
                }

            }
            context.moveTo(oldX, oldY); 
            x = x + dx;
            y = y +dy;
            if(x <= 0 || x >= 400){
                clearInterval(timer);
            }
            if(y <=0 || y >= 400){
                clearInterval(timer);
            }
            var cellColor = context.getImageData(x,y,1,1);
            if(cellColor.data[2] == 255){
                clearInterval(timer);
            }
            context.lineTo(x, y);
            context.stroke();
            oldX = x;
            oldY = y;

        },200);
    }
}

// function stopDrawing(){
//     clearInterval(timer);
// }