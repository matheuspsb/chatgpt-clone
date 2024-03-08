import { useState, useEffect } from 'react';

export const useTypingEffect = (text: string, author: 'me' | 'ai') => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (author === 'ai') {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayedText(text.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 20);

      return () => clearInterval(interval);
    } else {
      setDisplayedText(text);
    }
  }, [text, author]);

  return displayedText;
};
