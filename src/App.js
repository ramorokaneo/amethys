import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Input Example</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter something..."
      />
      <p>You entered: {inputValue}</p>
    </div>
  );
}

export default App;
