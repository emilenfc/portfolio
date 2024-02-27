
import { useState, useEffect } from 'preact/hooks';

export default function Greeting({ messages }) {
  const [greetingIndex, setGreetingIndex] = useState(0);

  const handleAnimationIteration = () => {
    setGreetingIndex(prevIndex => (prevIndex + 1) % messages.length);
  };

  useEffect(() => {
    const greetingText = document.querySelector('.greeting-text');
    greetingText.addEventListener('animationiteration', handleAnimationIteration);
    
    return () => {
      greetingText.removeEventListener('animationiteration', handleAnimationIteration);
    };
  }, []);

  return (
    <div>
      <h3 className="greeting-text">{messages[greetingIndex]}!</h3>
    </div>
  );
}
