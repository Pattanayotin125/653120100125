window.onload = function() {
    const canvas = document.getElementById('drawingCanvas');
    const context = canvas.getContext('2d');

    canvas.width = 500;
    canvas.height = 500;

    // โหลดรูปภาพสำหรับ texture
    const textureImage = new Image();
    textureImage.src = './BB.png'; // ระบุเส้นทางไปยังไฟล์รูปภาพของคุณ

    textureImage.onload = function() {
        console.log('Texture image loaded successfully.');

        // วาดเพชรพร้อมพื้นหลัง
        function drawDiamondWithTexture(x, y, width, height) {
            // สร้าง pattern จาก texture
            const pattern = context.createPattern(textureImage, 'repeat');

            // วาดเพชร
            context.beginPath();
            context.moveTo(x, y - height / 2); // จุดบนสุด

            context.lineTo(x + width / 2, y); // จุดขวาล่าง
            context.lineTo(x, y + height / 2); // จุดล่างสุด
            context.lineTo(x - width / 2, y); // จุดซ้ายล่าง

            context.closePath();

            // คลิปเส้นทางการวาดเพื่อให้พื้นหลังอยู่ในรูปเพชร
            context.clip();

            // ตั้งค่าสีของเพชร
            context.fillStyle = pattern;

            // เติมพื้นที่ของเพชรด้วย texture
            context.fill();
        }

        // เติมพื้นหลังสีดำ
        context.fillStyle = 'Black';
        context.fillRect(0, 0, canvas.width, canvas.height);

        // เรียกใช้ฟังก์ชันวาดเพชร
        drawDiamondWithTexture(360, 250, 200, 200);
    };

    textureImage.onerror = function() {
        console.error('Failed to load the texture image.');
    };
};
