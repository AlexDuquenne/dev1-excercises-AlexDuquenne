"use strict";


//drawFish();

function drawFish() {

    let canvas = document.querySelector("canvas");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    let context = canvas.getContext("2d");

    context.beginPath();
    context.lineWidth = 5;
    context.moveTo(50, 390);
    context.lineTo(390, 100);
    context.stroke();

    context.beginPath();
    context.lineWidth = 5;
    context.moveTo(390, 100);
    context.lineTo(550, 320);
    context.stroke();

    context.beginPath();
    context.lineWidth = 5;
    context.moveTo(550, 320);
    context.lineTo(720, 220);
    context.stroke();

    context.beginPath();
    context.lineWidth = 5;
    context.moveTo(720, 220);
    context.lineTo(655, 400);
    context.stroke();

    context.beginPath();
    context.lineWidth = 5;
    context.moveTo(655, 400);
    context.lineTo(730, 560);
    context.stroke();

    context.beginPath();
    context.lineWidth = 5;
    context.moveTo(730, 560);
    context.lineTo(570, 460);
    context.stroke();

    context.beginPath();
    context.lineWidth = 5;
    context.moveTo(570, 460);
    context.lineTo(400, 630);
    context.stroke();
}