"use strict";

//drawSquarre();


function drawSquarre() {

    let canvas = document.querySelector("canvas");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    let context = canvas.getContext("2d");

    //rechthoek
    context.beginPath();
    //context.lineWidth = 5;
    //context.rect(50,50,150,150);
    context.lineWidth = 5;
    context.moveTo(50, 50);
    context.lineTo(50, 200);
    context.lineTo(200, 200);
    context.lineTo(200, 50);
    context.lineTo(50, 50);
    context.stroke();


    //rode lijnen
    context.beginPath();
    context.strokeStyle = "red";
    context.moveTo(50, 50);
    context.lineTo(200, 200);
    context.moveTo(200, 50);
    context.lineTo(50, 200);
    context.stroke();

}