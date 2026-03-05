import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Disable Ctrl + wheel zoom
document.addEventListener('wheel', (event) => {
  if (event.ctrlKey) {
    event.preventDefault();
  }
}, { passive: false });

// Disable pinch zoom on touch devices
document.addEventListener('gesturestart', (event) => {
  event.preventDefault();
});

document.addEventListener('gesturechange', (event) => {
  event.preventDefault();
});

document.addEventListener('gestureend', (event) => {
  event.preventDefault();
});
