import { useEffect } from "react";
import "./App.css";
import Game from "./components/Game/Game";

function App() {
  useEffect(() => {
    const areYouSure = () => {
      return "Are you sure you want to leave?";
    };
    window.onbeforeunload = areYouSure;
    return () => {
      window.onbeforeunload = null;
    };
  }, []);

  return (
    <div className="app">
      <Game />
    </div>
  );
}

export default App;
