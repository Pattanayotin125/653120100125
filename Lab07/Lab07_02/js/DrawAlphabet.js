window.onload = function() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // Set the background color to white
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Define the points to form the letter "A"
    const points = [];

    // Left side of A
    for (let y = 50; y <= 450; y += 20) {
        points.push({ x: 200 - (y - 50) / 4, y: y, color: 'black' });
    }

    // Right side of A
    for (let y = 50; y <= 450; y += 20) {
        points.push({ x: 300 + (y - 50) / 4, y: y, color: 'black' });
    }

    // Middle horizontal bar of A
    for (let x = 225; x <= 275; x += 20) {
        points.push({ x: x, y: 250, color: 'black' });
    }

    // Draw each point
    points.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = point.color;
        ctx.fill();
        ctx.closePath();
    });
};
