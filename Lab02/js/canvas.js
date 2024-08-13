// scripts.js

window.onload = function() {
    const canvas = document.getElementById('drawingCanvas');
    const context = canvas.getContext('2d');

    // Draw a straight line
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(450, 50);
    context.stroke();

    // Draw a triangle
    context.beginPath();
    context.moveTo(250, 100);
    context.lineTo(100, 400);
    context.lineTo(400, 400);
    context.closePath();
    context.stroke();

    // Draw a rectangle
    context.beginPath();
    context.rect(150, 150, 200, 100);
    context.stroke();

    // Draw a circle
    context.beginPath();
    context.arc(250, 350, 50, 0, 2 * Math.PI);
    context.stroke();
};
