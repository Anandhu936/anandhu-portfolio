import React, { useState, useEffect } from 'react';

const TextChanger = () => {
  const texts = ["Anandhu Unnimadhavan", "Anandhu Unnimadhavan", "Anandhu Unnimadhavan"];
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const fullText = texts[index];
  
      if (endValue > 0) {
        setCurrentText(fullText.substring(0, endValue));
      }
  
      if (isForward) {
        setEndValue((prev) => prev + 1);
        if (endValue > fullText.length + 5) {
          setIsForward(false);
        }
      } else {
        setEndValue((prev) => prev - 1);
        if (endValue <= 1) { 
          setIsForward(true);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, 70);
  
    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);
  
  return (
    <div className='transition ease duration-300'>{currentText}</div>
  );
};

export default TextChanger;
