import { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PasswordGenerator from "./components/PasswordGenerator";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const PasswordGenerate = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (!numberAllowed) str += "0123456789";
    if (char) str += "!@#$%^&*_+[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, char]);

  return (
    <>
    <PasswordGenerator></PasswordGenerator>
      <div className=" text-center w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-one w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />

          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy the Content
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
         <div className="flex items-center gap-x-1">
          <input type="range"
          min={6}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e) => {
            setLength(e.target.value)
          }}
          />
          <label> Length : {length}</label>
         </div>
         <div className="flex items-center gap-x-1">
          <input type="checkbox" 
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}
          />
         <label htmlFor="numberInput">Number</label>

         </div>

        </div>
      </div>
    </>
  );
}

export default App;
