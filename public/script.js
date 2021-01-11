//const { Socket } = require("net");
const socket = io('/');
const videoGrid = document.getElementById('video-grid');
const userVideo = document.createElement('video');
userVideo.muted = true;

let userVideoStream;
 
navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => {
    userVideoStream = stream;
    addVideoStream(userVideo, userVideoStream);
});

socket.emit('join-room');

const addVideoStream = (video, stream) => {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play();
    });
    videoGrid.append(video);
}