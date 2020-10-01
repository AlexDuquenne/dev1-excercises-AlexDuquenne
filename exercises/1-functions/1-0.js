"use strict";

window.onresize = drawOrange;

//sayHelloMultimedia();
//drawLine();
//drawRect();
//drawArc();
//drawEllipse();
drawOrange();

// alert box "hello" en "multimedia"
function sayHelloMultimedia() {

    alert("Hello");
    alert("Multimedia");
}


// lijn trekken
function drawLine() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(50, 100);
    context.lineTo(200, 50);
    context.stroke();
}


// rechthoek maken met kleur fill en rand
function drawRect() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.fillStyle = "red";
    context.strokeStyle = "purple";
    context.lineWidth = 5;
    context.beginPath();
    context.rect(50, 50, 100, 100);
    context.fill();
    context.stroke();
}


// arc/boog maken
function drawArc() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.beginPath();
    context.fillStyle = "yellow";
    context.arc(200, 200, 50, 0, Math.PI, true);
    context.fill();
}


// ellipse maken
function drawEllipse() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.beginPath();
    context.fillStyle = "yellow";
    context.ellipse(200, 200, 100, 50, Math.PI / 4, 0, Math.PI * 2);
    context.fill();
}


// fruit tekenen + resize volgens window groote
function drawOrange() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.beginPath();
    context.fillStyle = "orange";
    context.arc(100, 100, 50, 0, Math.PI * 2);
    context.fill();
}