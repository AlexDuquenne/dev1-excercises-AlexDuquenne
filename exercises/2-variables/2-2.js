"use strict";

var distance = 50;
var size = 350;
var xy = +(50);
var hw = -(100);

//drawColRect();
//getRandColor();

function getRandColor(){

//     let color = ['red', 'green', 'blue', 'yellow'];
//     let randColor = color[Math.floor(Math.random() * color.length)];

    var red = Math.floor(Math.random()* 255);
    var green = Math.floor(Math.random()* 255);
    var blue = Math.floor(Math.random()* 255);

    return "rgb(" + red + ", " + green + "," + blue + ")";
}

function drawColRect() {


    let canvas = document.querySelector("canvas");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    let context = canvas.getContext("2d");

    for

    context.beginPath();
    context.fillStyle = getRandColor();
    context.rect(distance, distance, size, size);
    context.fill();

    context.beginPath();
    context.fillStyle = getRandColor();
    context.rect(distance + xy , distance + xy , size + hw, size +hw );
    context.fill();

    context.beginPath();
    context.fillStyle = getRandColor();
    context.rect(distance +xy*2 , distance +xy*2 , size +hw*2, size +hw*2 );
    context.fill();

    context.beginPath();
    context.fillStyle = getRandColor();
    context.rect(distance +xy*2.5 , distance +xy*2.5 , size +hw*2.5, size +hw*2.5 );
    context.fill();






}