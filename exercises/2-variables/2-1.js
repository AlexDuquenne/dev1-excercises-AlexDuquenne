"use strict";

let distance = 50;


//drawMoreLines();

function drawMoreLines(){

    
    let canvas = document.querySelector("canvas");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    let context = canvas.getContext("2d");

    context.beginPath();
    context.moveTo(distance, 100);
    context.lineTo(distance*3, 100);
    context.lineTo(distance, 200);
    context.lineTo(distance * 3, 200);
    context.lineTo(distance , 300);
    context.lineTo(distance * 3, 300);
    context.lineTo(distance , 100 );
    
    context.stroke();
    

    // context.beginPath();
    // context.moveTo(distance, distance);
    // context.lineTo(distance*3, distance);
    // context.lineTo(distance, distance *2);
    // context.lineTo(distance * 3, distance *2);
    // context.lineTo(distance , distance *3);
    // context.lineTo(distance * 3, distance * 3);
    // context.lineTo(distance , distance );
    
    // context.stroke();
    


}