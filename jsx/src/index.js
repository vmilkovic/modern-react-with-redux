// Import the React and RactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

/// Create a react component
const App = () => {
  const buttonText = { text: 'Click me' };
  const style = { backgroundColor: 'blue', color: 'white' };
  const labelText = 'Enter name:';

  return (
    <div>
      <label htmlFor="name" className="label">
        {labelText}
      </label>
      <input type="text" id="name" />
      <button style={style}>{buttonText.text}</button>
    </div>
  );
};

// Take the react component and show it on screen
ReactDOM.render(<App />, document.querySelector('#root'));
