"use strict";

drawImage();

function drawImage() {

    let canvas = document.querySelector("canvas");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    let context = canvas.getContext("2d");

    context.beginPath();
    context.fillStyle = '#ADD9E6';
    context.lineWidth = 3;
    context.rect(50, 50, 300, 300);
    context.stroke();
    context.fill();

    context.beginPath();
    context.lineWidth = 2;
    context.moveTo(100, 50);
    context.lineTo(100, 250);

    context.stroke();


}