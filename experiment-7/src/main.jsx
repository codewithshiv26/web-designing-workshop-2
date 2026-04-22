// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )



 let count = 0;

        function updateUI() {
            document.getElementById("count").innerText = count;
        }

        function increment() {
            count++;
            updateUI();
        }

        function decrement() {
            count--;
            updateUI();
        }

        function reset() {
            count = 0;
            updateUI();
        }