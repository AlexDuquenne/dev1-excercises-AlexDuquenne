"use strict";

//drawRectangles();

function drawRectangles() {

    let canvas = document.querySelector("canvas");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    let context = canvas.getContext("2d");

    //rode vierkanten

    //links boven
    context.beginPath();
    context.strokeStyle = "red";
    context.rect(50, 50, 150, 150);
    context.stroke();

    //rechts onder
    context.beginPath();
    context.strokeStyle = "red";
    context.rect(200, 200, 150, 150);
    context.stroke();

    //midden rechts
    context.beginPath();
    context.rect(275, 75, 50, 50);
    context.stroke();

    //midden links
    context.beginPath();
    context.rect(75, 275, 50, 50);
    context.stroke();


    //zwarte vierkanten

    //midden
    context.beginPath();
    context.strokeStyle = "black";
    context.rect(125, 125, 150, 150);
    context.fill();

    //links onder
    context.beginPath();
    context.rect(50, 325, 25, 25);
    context.fill();

    //rechts boven
    context.beginPath();
    context.rect(325, 50, 25, 25);
    context.fill();

}