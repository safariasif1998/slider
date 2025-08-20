// 📌 Import the global stylesheet for the app
import "./App.css";

// 📌 Import the Slider component (main UI element of this app)
import Slider from "./components/Slider";

// 📌 Root Component of the React app
// Every other component will eventually be rendered inside this one
function App() {
  return (
    <div>
      {/* 📌 Render the Slider component on the page */}
      <Slider />
    </div>
  );
}

// 📌 Export the App component so it can be used in index.js
export default App;
