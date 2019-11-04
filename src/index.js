import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const accessedProperties = [];
const derivationGraph = {};

function observable() {}

function autorun(cb) {}

// const store = Observable({
//   count: 0,
//   name: 'Unnamed',

//   incremrnt() {
//     this.count += 1;
//   },

//   setName() {
//     this.name = "Test";
//   },

//   get countPowToSquere() {
//     return this._count * this._count;
//   }
// })

// class Observable {
//   constructor(val) {
//     this._value = val;

//     this._listeners = [];
//   }

//   subscribe(cb) {
//     this._listeners.push(() => cb(this._value));
//   }

//   next(val) {
//     this._value = val;

//     this._listeners.forEach(cb => {
//       cb();
//     })
//   }
// }

// const custumObsorvebal = new Observable(1);

// custumObsorvebal.subscribe(currVal => {
//   console.log(currVal)
// })

// custumObsorvebal.subscribe(currVal => {
//   console.log(currVal + 1)
// })

// custumObsorvebal.next(2)

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
