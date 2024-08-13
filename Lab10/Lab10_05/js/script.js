window.onload = function() {
    const canvas = document.getElementById('drawingCanvas');
    const context = canvas.getContext('2d');

    canvas.width = 720;
    canvas.height = 700;

    // โหลดรูปภาพสำหรับพื้นหลัง
    const hexBackground = new Image();
    const octBackground = new Image();
    hexBackground.src = './JJ.jpg'; // เส้นทางไปยังไฟล์รูปภาพพื้นหลังของหกเหลี่ยม
    octBackground.src = './DD.jpg'; // เส้นทางไปยังไฟล์รูปภาพพื้นหลังของแปดเหลี่ยม

    hexBackground.onload = function() {
        octBackground.onload = function() {
            console.log('Both background images loaded successfully.');

            // ฟังก์ชันวาดหกเหลี่ยม
            function drawHexagon(x, y, radius) {
                const pattern = context.createPattern(hexBackground, 'repeat');
                context.save();
                
                context.beginPath();
                for (let i = 0; i < 6; i++) {
                    const angle = Math.PI / 3 * i;
                    const newX = x + radius * Math.cos(angle);
                    const newY = y + radius * Math.sin(angle);
                    context.lineTo(newX, newY);
                }
                context.closePath();
                context.clip(); // คลิปเส้นทาง

                context.fillStyle = pattern;
                context.fill();
            }

            // ฟังก์ชันวาดแปดเหลี่ยม
            function drawOctagon(x, y, radius) {
                const pattern = context.createPattern(octBackground, 'repeat');

                context.beginPath();
                for (let i = 0; i < 8; i++) {
                    const angle = Math.PI / 4 * i;
                    const newX = x + radius * Math.cos(angle);
                    const newY = y + radius * Math.sin(angle);
                    context.lineTo(newX, newY);
                }
                context.closePath();
                context.clip(); // คลิปเส้นทาง

                context.fillStyle = pattern;
                context.fill();
                
                context.restore(); // เรียกคืนสถานะของ context
            }

            // เติมพื้นหลัง
            context.fillStyle = 'white';
            context.fillRect(0, 0, canvas.width, canvas.height);

            // เรียกใช้ฟังก์ชันวาดหกเหลี่ยมและแปดเหลี่ยม
            drawHexagon(300, 250, 100); // วาดหกเหลี่ยม
            drawOctagon(500, 250, 100); // วาดแปดเหลี่ยม
        };
    };

    hexBackground.onerror = function() {
        console.error('Failed to load the hexagon background image.');
    };

    octBackground.onerror = function() {
        console.error('Failed to load the octagon background image.');
    };
};
