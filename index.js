window.onload = function() {
    const canvas = document.getElementById('stickmanCanvas');
    const ctx = canvas.getContext('2d');

    ctx.strokeStyle = 'white';
    ctx.lineWidth = 4;

    function drawStickman() {
        // Head
        ctx.beginPath();
        ctx.arc(160, 60, 20, 0, Math.PI * 2, true); // Circle
        ctx.stroke();

        // Body
        ctx.beginPath();
        ctx.moveTo(160, 80);
        ctx.lineTo(160, 140);
        ctx.stroke();

        // Left leg (bent)
        ctx.beginPath();
        ctx.moveTo(160, 140);
        ctx.lineTo(130, 170);
        ctx.lineTo(130, 200);
        ctx.stroke();

        // Right leg (bent)
        ctx.beginPath();
        ctx.moveTo(160, 140);
        ctx.lineTo(190, 170);
        ctx.lineTo(190, 200);
        ctx.stroke();

        // Left arm
        ctx.beginPath();
        ctx.moveTo(160, 100);
        ctx.lineTo(130, 130);
        ctx.stroke();

        // Right arm
        ctx.beginPath();
        ctx.moveTo(160, 100);
        ctx.lineTo(190, 130);
        ctx.stroke();
    }

    drawStickman();

    function createFallingElement() {
        const poop = document.createElement('div');
        poop.style.width = '32px';
        poop.style.height = '32px';
        poop.style.backgroundImage = 'url("poop.png")';
        poop.style.backgroundSize = 'cover';
        poop.style.position = 'relative';
        poop.style.left = '144px';
        poop.style.top = '-100px'; 

        document.getElementById("main").appendChild(poop);

        let topPosition = -100;

        function fall() {
            if (topPosition < window.innerHeight - 500) {
                topPosition += 5;
                poop.style.top = topPosition + 'px';
                requestAnimationFrame(fall);
            } else {
                document.getElementById("main").removeChild(poop);
            }
        }

        fall();
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            createFallingElement();
        }
    });

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', createFallingElement);
    });
};