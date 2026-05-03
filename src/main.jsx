import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
const container = document.querySelector(".sparkles");

for (let i = 0; i < 25; i++) {
  const spark = document.createElement("span");

  spark.style.left = Math.random() * 100 + "%";
  spark.style.top = Math.random() * 100 + "%";

  spark.style.animationDuration = (2 + Math.random() * 3) + "s";
  spark.style.animationDelay = Math.random() * 3 + "s";

  container.appendChild(spark);
}