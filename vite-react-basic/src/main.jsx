import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './components/Card.jsx' 
import './index.css';
import App from './App.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Card/>
  </React.StrictMode>,
)


