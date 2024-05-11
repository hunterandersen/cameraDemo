//Select the relevant HTML elements for use throughout the demo
const videoEle = document.getElementById("video");
const takePicBtn = document.getElementById("takePicBtn");
const canvas = document.getElementById("canvas-hidden");
const imageEle = document.getElementById("stillImage");

//The window object is a globally available object
//It has an object called navigator
//That has an object called mediaDevices
//This is treated simillarly to a static class
//Therefore we invoke a "static" method called getUserMedia
window.navigator.mediaDevices.getUserMedia({video: true})
//getUserMedia() returns a Promise, which we consume with .then() and .catch()
.then(videoStream => {
    //If the user allows for video, then we gain access to the videoStream object
    console.log(videoStream);

    //We set that as the src for the HTML <video> element
    videoEle.srcObject = videoStream;
    //We tell the video to start streaming the incoming video from the user's camera
    videoEle.play();
})
.catch(console.error);

//Make the Take Picture button clickable
takePicBtn.addEventListener("click", () => {
    //Create a 2D drawing context on the HTML <canvas> element
    const context = canvas.getContext("2d");
    //Set the canvas to the same width and height as the HTML <video> element
    canvas.width = videoEle.videoWidth;
    canvas.height = videoEle.videoHeight;
    //Take the current video frame and draw it onto the canvas
    context.drawImage(videoEle, 0, 0, videoEle.videoWidth, videoEle.videoHeight);

    //Convert the drawn image into a PNG data format
    const stillImage = canvas.toDataURL("image/png");
    //Set the HTML <img> element to display the PNG image
    imageEle.src = stillImage;
});