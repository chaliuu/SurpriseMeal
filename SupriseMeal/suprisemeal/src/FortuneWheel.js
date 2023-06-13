import React, { useState } from 'react';

const Wheel = () => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState('');

  const spinWheel = () => {
    // Simulate a delay before getting the result
    setSpinning(true);
    setTimeout(() => {
      const randomResult = getRandomResult(); // Implement your logic to get a random result
      setResult(randomResult);
      setSpinning(false);
    }, 2000); // 2 seconds delay before showing the result
  };

  const getRandomResult = () => {
    // Implement your logic to generate a random result
    const results = ['Prize 1', 'Prize 2', 'Prize 3', 'Prize 4', 'Prize 5'];
    const randomIndex = Math.floor(Math.random() * results.length);
    return results[randomIndex];
  };

  return (
      <div>
      <div className={`wheel ${spinning ? 'spinning' : ''}`}></div>
      <button disabled={spinning} onClick={spinWheel}>
        Spin
      </button>
      {result && <div>Resulte: {result}</div>}
    </div>
  );
};
export default Wheel;
