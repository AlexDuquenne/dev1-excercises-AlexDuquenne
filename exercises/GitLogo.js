"use strict";

//drawLogo();

function drawLogo() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.beginPath();
    context.fillStyle = "#A9E584";
    context.rect(50, 200, 100, 100);
    context.rect(150, 100, 100, 100);
    context.rect(250, 200, 100, 100);
    context.rect(250, 300, 100, 100);
    context.rect(250, 400, 100, 100);
    context.rect(150, 400, 100, 100);
    context.rect(350, 400, 100, 100);
    context.rect(350, 100, 100, 100);
    context.rect(450, 200, 100, 100);
    context.fill();
}