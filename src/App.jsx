import React from "react";
import "./App.css";

export default function App() {

  return (
    <div>
      <div>
      <h1>
        Bukola Simple To-do List App
      </h1>
      </div>

      <div>
      <input
            type="text"
            placeholder="Add a new task..."
          />
          <button onClick="">Add</button>
    </div>

    <div>
      <h2>Current Tasks</h2>
    </div>

    <div>
      <h2>Completed Tasks</h2>
    </div>
        </div>
  );
}
