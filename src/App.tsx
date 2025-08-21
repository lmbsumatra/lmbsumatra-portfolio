import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Landing from "./pages/Landing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" bg-neutral-900">
      <Landing />
    </div>
  );
}

export default App;
