import "./App.css";
import Button from "./components/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("red")}
            classname="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button onClick={() => setColor("blue")}
            classname="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
          <button onClick={() => setColor("pink")}
            classname="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            pink
          </button>
          <button onClick={() => setColor("yellow")}
            classname="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
          <button onClick={() => setColor("green")}
            classname="outlline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>
          <button onClick={() => setColor("black")}
            classname="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
