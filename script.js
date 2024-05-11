const videoEle = document.getElementById("video");
const takePicBtn = document.getElementById("takePicBtn");

window.navigator.mediaDevices.getUserMedia({video: true})
.then(videoStream => {
    console.log(videoStream);
    
    videoEle.srcObject = videoStream;
    videoEle.play();
})
.catch(console.error);

takePicBtn.addEventListener("click", () => {
    
});