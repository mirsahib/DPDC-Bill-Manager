import React from "react";
import "./App.css";
import Navbar from "./component/Header";
//import Body from "./component/Body";

function App() {
  return (
    <div>
      <Navbar />
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Customer No."
                aria-label="Customer No."
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">
                  Button
                </button>
              </div>
            </div>
          </div>
          <div class="col-sm">One of three columns</div>
        </div>
      </div>
    </div>
  );
}

export default App;
