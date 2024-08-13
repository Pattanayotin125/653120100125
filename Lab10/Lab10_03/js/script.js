// DrawnPicture.js

window.onload = function() {
    const canvas = document.getElementById('drawingCanvas');
    const context = canvas.getContext('2d');

    canvas.width = 600;
    canvas.height = 600;

    // เติมพื้นหลังเป็นสีขาว
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // ฟังก์ชันวาดจุดด้วยการไล่ระดับสี
    function drawGradientCircle(cx, cy, radius) {
        // สร้างการไล่ระดับสี
        const gradient = context.createRadialGradient(cx, cy, 0, cx, cy, radius);
        gradient.addColorStop(0, 'red');
        gradient.addColorStop(0.5, 'orange');
        gradient.addColorStop(1, 'yellow');

        // ใช้การไล่ระดับสีในการวาดจุด
        context.beginPath();
        context.arc(cx, cy, radius, 0, 2 * Math.PI);
        context.fillStyle = gradient;
        context.fill();
        context.closePath();
    }

    // วาดหลายจุดที่มีการไล่ระดับสี
    const numCircles = 10;
    const radiusStep = 20;
    for (let i = 0; i < numCircles; i++) {
        const radius = radiusStep * (i + 1);
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        drawGradientCircle(cx, cy, radius);
    }
};
