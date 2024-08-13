window.onload = function() {
    const canvas = document.getElementById('drawingCanvas');
    const context = canvas.getContext('2d');

    // กำหนดขนาดของ canvas
    canvas.width = 800;
    canvas.height = 600;

    // เติมพื้นหลังสีขาว
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // วาดฐานของขวดน้ำ
    context.beginPath();
    context.moveTo(350, 500); // จุดล่างซ้ายของฐาน
    context.lineTo(450, 500); // จุดล่างขวาของฐาน
    context.lineTo(460, 400); // จุดขวาบนของฐาน
    context.lineTo(340, 400); // จุดซ้ายบนของฐาน
    context.closePath();
    context.stroke();

    // วาดลำขวดน้ำ
    context.beginPath();
    context.moveTo(340, 400); // ซ้ายล่าง
    context.lineTo(340, 200); // ซ้ายบน
    context.lineTo(460, 200); // ขวาบน
    context.lineTo(460, 400); // ขวาล่าง
    context.closePath();
    context.stroke();

    // วาดคอขวดน้ำ
    context.beginPath();
    context.moveTo(360, 200); // ซ้ายล่าง
    context.lineTo(360, 150); // ซ้ายบน
    context.lineTo(440, 150); // ขวาบน
    context.lineTo(440, 200); // ขวาล่าง
    context.closePath();
    context.stroke();

    // วาดฝาขวดน้ำ
    context.beginPath();
    context.moveTo(360, 150); // ซ้ายล่างของฝา
    context.lineTo(440, 150); // ขวาล่างของฝา
    context.lineTo(440, 130); // ขวาบนของฝา
    context.lineTo(360, 130); // ซ้ายบนของฝา
    context.closePath();
    context.stroke();
}
