window.onload = function() {
    const canvas = document.getElementById('drawingCanvas');
    const context = canvas.getContext('2d');

    // กำหนดขนาดของ canvas
    canvas.width = 800;
    canvas.height = 600;

    // เติมพื้นหลังสีขาว
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // วาดส่วนต่าง ๆ ของปืน
    context.beginPath();

    // ลำกล้องปืน
    context.rect(300, 250, 200, 40);

    // ส่วนด้ามจับ
    context.rect(400, 290, 30, 100);

    // ไกปืน
    context.moveTo(380, 290);
    context.lineTo(420, 290);
    context.lineTo(400, 320);
    context.closePath();

    // ใช้การ stroke เพื่อวาดเส้น
    context.stroke();
}
