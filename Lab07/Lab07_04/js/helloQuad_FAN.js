function main() {
    const canvas = document.getElementById('webgl-canvas');
    const gl = canvas.getContext('webgl');

    if (!gl) {
        console.error("Unable to initialize WebGL.");
        return;
    }

    const vertices = new Float32Array([
        0.5,  0.5,  // V0
        -0.5, -0.5, // V1
        0.5, -0.5,  // V2
        -0.5, 0.5, // V3
    ]);

    const vertexShaderSource = `
        attribute vec2 a_Position;
        void main() {
            gl_Position = vec4(a_Position, 0.0, 1.0);
        }
    `;

    const fragmentShaderSource = `
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // สีแดง
        }
    `;

    function createShader(gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error('Shader compilation failed:', gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Program linking failed:', gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
        return;
    }

    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const a_Position = gl.getAttribLocation(program, 'a_Position');
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(a_Position);

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // วาดรูปโดยใช้ gl.TRIANGLE_FAN
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
}

main();
