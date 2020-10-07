"use strict";

//drawEllipse();

function drawEllipse() {

    let canvas = document.querySelector("canvas");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    let context = canvas.getContext("2d");

    context.beginPath();
    context.fillStyle = 'orange';
    context.rect(50, 50, 350, 350);
    context.fill();

    context.beginPath();
    context.fillStyle = "yellow";
    context.ellipse(225, 250, 100, 0, Math.PI / 4, 0, Math.PI * 2);
    context.fill();

    context.beginPath();
    context.fillStyle = "blue";
    context.rect(50, 250, 350, 150);
    context.fill();



}