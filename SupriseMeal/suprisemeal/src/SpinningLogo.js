import React, { useEffect, useState } from 'react';

/**
 <div>
                <SpinningLogo logoSrc="logo.png" />
  </div>

  <div>
        <WheelComponent
          segments={segments}
          segColors={segColors}
          winningSegment="MM"
          onFinished={(winner) => onFinished(winner)}
          primaryColor="black"
          contrastColor="white"
          buttonText="Start"
          isOnlyOnce={false}
          size={190}
          upDuration={500}
          downDuration={600}
          fontFamily="Helvetica"
        />
      </div>
 */

const SpinningLogo = ({ logoSrc }) => {
    let isStarted = false;
    const [isFinished, setFinished] = useState(false);
    let timerHandle = 0;
    const timerDelay = 50; // Adjust the delay for smoother animation
    let angleCurrent = 0;
    let angleDelta = 0;
    let canvasContext = null;
    const maxSpeed = Math.PI / 16; // Adjust the speed of rotation
    const upTime = 1000;
    const downTime = 3000;
    let spinStart = 0;
    let frames = 0;
    const centerX = 300;
    const centerY = 300;

    useEffect(() => {
        initCanvas();
        setTimeout(() => {
            window.scrollTo(0, 1);
        }, 0);
    }, []);

    const initCanvas = () => {
        const canvas = document.getElementById('canvas');
        canvas.addEventListener('click', spin, false);
        canvasContext = canvas.getContext('2d');
    };

    const spin = () => {
        isStarted = true;
        if (timerHandle === 0) {
            spinStart = new Date().getTime();
            frames = 0;
            timerHandle = setInterval(onTimerTick, timerDelay);
        }
    };

    const onTimerTick = () => {
        frames++;
        draw();

        const duration = new Date().getTime() - spinStart;
        let progress = duration / upTime;
        let finished = false;

        if (progress >= 1) {
            finished = true;
        }

        angleDelta = maxSpeed * Math.sin((progress * Math.PI) / 2 + Math.PI / 2);

        angleCurrent += angleDelta;
        while (angleCurrent >= Math.PI * 2) angleCurrent -= Math.PI * 2;

        if (finished) {
            setFinished(true);
            clearInterval(timerHandle);
            timerHandle = 0;
            angleDelta = 0;
        }
    };

    const draw = () => {
        clear();
        drawLogo();
    };

    const drawLogo = () => {
        const ctx = canvasContext;
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(angleCurrent);

        const logoImage = new Image();
        logoImage.src = logoSrc;

        ctx.drawImage(logoImage, -logoImage.width / 2, -logoImage.height / 2);

        ctx.restore();
    };

    const clear = () => {
        const ctx = canvasContext;
        ctx.clearRect(0, 0, 1000, 800);
    };

    return (
        <div id='wheel'>
            <canvas
                id='canvas'
                width='1000'
                height='800'
                style={{
                    pointerEvents: isFinished ? 'none' : 'auto',
                }}
            />
        </div>
    );
};

export default SpinningLogo;