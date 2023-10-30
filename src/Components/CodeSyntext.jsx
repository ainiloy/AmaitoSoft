import React, { useState, useEffect } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy as codeStyle } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Use the desired style



const TypewriterEffect = ({ code }) => {
    
  const [currentCode, setCurrentCode] = useState('');
  const codeTypingSpeed = 30; 

  useEffect(() => {
    const words = code.split(' ');
    let currentDisplayedWords = [];

    const typingInterval = setInterval(() => {
      if (currentDisplayedWords.length < words.length) {
        currentDisplayedWords = words.slice(0, currentDisplayedWords.length + 1);
        setCurrentCode(currentDisplayedWords.join(' '));
      } else {
        clearInterval(typingInterval);
      }
    }, codeTypingSpeed);

    return () => clearInterval(typingInterval);
  }, [code, codeTypingSpeed]);
  return (
    <SyntaxHighlighter language="jsx" style={codeStyle}>
      {currentCode}
    </SyntaxHighlighter>
  );

}


const CustomRenderer = () =>  {
  const jsxCode = `
1   import { AmaitoSoft } from 'amaitosoft.com'
2   import { useState } from 'react'
3
4   function AmaitoSoft() {
5       const [ interest, setInterest ] = useState( false )
6       const Hire = () => {
7           setInterest( !interest)
8       }
9     return (
10      <div>
11          <button onClick={Hire} > Hire AmaitoSoft </button>
12      </div>
13    )
14  }
15  export default AmaitoSoft`;

  return (
    <div>
      <div className="code-section">
        <TypewriterEffect code={jsxCode} />
      </div>
    </div>
  )
}

export default CustomRenderer