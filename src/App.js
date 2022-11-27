import "./styles/App.css";

import Gameboard from "./components/Gameboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Gameboard />
    </div>
  );
}

export default App;
