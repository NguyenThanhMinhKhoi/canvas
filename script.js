let canvas = document.getElementById("canvass");
let paper = canvas.getContext("2d");

let currentTime = Date.now();
let omega = 1;
let circleX = 70;
let velocityX = 100;
let eyeschange=false;


setInterval(() => {
    let delta = (Date.now() - currentTime) / 1000;
    let fps = 1 / delta;
    currentTime = Date.now();
    // paper.clearRect(0, 0, canvas.with, canvas.height);
    paper.clearRect(0, 0, canvas.width, canvas.height)
    // console.log("fps" + fps)




    paper.beginPath();
    paper.strokeStyle = "blue"
    // paper.arc(95, 50, 40, 0, 2 * Math.PI);
    paper.fillStyle = "blue"
    paper.arc(circleX, 70, 30, 0, 2 * Math.PI);
    paper.stroke();
    paper.fill();
    // circleX += 15 * delta;
    // circleX=150+100* (Math.sin((omega *currentTime)/1000));
    paper.beginPath();
    paper.fillStyle = "red"
    paper.arc(circleX, 80, 5, 0, 1 * Math.PI);
    paper.stroke();
    paper.fill();
    //    circleX += 15 * delta;
    // circleX=150+100* (Math.sin((omega *currentTime)/1000));
    paper.beginPath();
    paper.fillStyle = "yellow"
    paper.arc(55, 65, 5, 0, 2 * Math.PI);
    paper.stroke();
    paper.fill();
    //    circleX += 15 * delta;
    // circleX=150+100* (Math.sin((omega *currentTime)/1000));
    paper.beginPath();
    paper.fillStyle = "yellow"
    paper.arc( 83, 65, 5, 0, 2 * Math.PI);
    paper.stroke();
    paper.fill();
    //    circleX += 15 * delta;
   


// function()after{
//     paper.beginPath();
//     paper.fillStyle = "yellow"
//     paper.arc( 83, 65, 5, 0, 2 * Math.PI);
//     paper.stroke();
//     paper.fill();
  
// }

if(eyeschange==false){
    eyeschange=true;
    paper.beginPath();
    paper.fillStyle = "yellow"
    paper.arc(55, 65, 5, 0, 2 * Math.PI);
    paper.stroke();
    paper.fill();
}
else{
    eyeschange=false;
    paper.beginPath();
    paper.fillStyle = "red"
    paper.arc(55, 65, 5, 0, 2 * Math.PI);
    paper.stroke();
    paper.fill();

}

// circleX=150+100* (Math.sin((omega *currentTime)/1000));

 
}
    , 1000 );
