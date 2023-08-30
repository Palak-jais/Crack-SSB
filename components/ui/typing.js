import React, { useState, useEffect } from 'react';

const TYPING_DELAY = 100; // Delay between typing each character
const STRING_CHANGE_DELAY = 200; // Delay before switching to the next string

function TypingEffect() {
    
  const stringsToType = [
    "Hello Cadet,Welcome to CrackSSB👏",
    "Ace your interview Prepration with us!",
    "Explore section relevent to your preparation!",
    "Learn and test in one platform!",
  ];

  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < stringsToType[currentStringIndex].length) {
      const timer = setTimeout(() => {
        setTypedText(prevTypedText => prevTypedText + stringsToType[currentStringIndex][currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, TYPING_DELAY);
      return () => clearTimeout(timer);
    } else {
      // Move to the next string after typing is complete
      setTimeout(() => {
        setCurrentIndex(0);
        setTypedText('');
        setCurrentStringIndex(prevIndex => (prevIndex + 1) % stringsToType.length);
      }, STRING_CHANGE_DELAY);
    }
  }, [currentIndex, currentStringIndex, stringsToType]);

  return (
    <div className="p-10">
      <h1 className='text-3xl text-blue-700 font-bold m-10'>{typedText}</h1>
    </div>
  );
}

export default TypingEffect;
