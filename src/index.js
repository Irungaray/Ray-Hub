import React from 'react';
import ReactDOM from 'react-dom'
import HelloWorld from './components/HelloWorld'

// Inyectando los componentes importados al index.html
ReactDOM.render(<HelloWorld />, document.getElementById('app'))