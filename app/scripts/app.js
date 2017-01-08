import React from 'react';
import ReactDOM from 'react-dom';

const App = function render() {
  return (
    <p>hola</p>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

export default App;
