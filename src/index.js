// 📌 Import React to enable JSX syntax
import React from 'react';

// 📌 Import ReactDOM from the new client API (React 18+)
import ReactDOM from 'react-dom/client';

// 📌 Import the root App component
import App from './App';

// 📌 Create a root element, targeting the <div id="root"> in public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// 📌 Render the App component inside the root element
// This is where your entire React application starts
root.render(<App />);
