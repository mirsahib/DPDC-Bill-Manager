import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./App.css";

function App() {
  //Customer number state and event listener
  //Customer number table state and event listener (table 1)
  //Date state and event listener
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  //Bill table and event listener (table 2)

  return (
    <div>
      <nav id="nav-prim" className="navbar py-0 navbar-dark bg-dark">
        <a className="navbar-brand" href="/#">
          DPDC Bill Manager
        </a>
      </nav>
      <div className="container">
        <div className="row mb-3">
          <div className="col-sm">
            <div className="input-group py-0">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Customer No."
                aria-label="Enter Customer No."
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
        {/**end of row 1 */}
        <div className="row">
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Customer Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>12312</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>123123</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>645645</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/**end of row 2 */}
        <div className="row mb-3">
          <div className="col-sm">
            <h5>Select Month and Year</h5>
          </div>
          <div className="col-sm">
            <DatePicker
              dateFormat="MM/yyyy"
              showMonthYearPicker
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
            />
          </div>
          <div className="col-sm ">
            <button className="btn btn-success float-right">Submit</button>
          </div>
        </div>
        {/**end of row 3 */}
        <div className="row">
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Customer No</th>
                <th scope="col">Meter No</th>
                <th scope="col">Prev Reading</th>
                <th scope="col">Current Reading</th>
                <th scope="col">Unit Consumtion</th>
                <th scope="col">Amount</th>
                <th scope="col">Amount With Fine</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>111111</td>
                <td>33213123</td>
                <td>123213</td>
                <td>4543</td>
                <td>12334</td>
                <td>6546</td>
                <td>6546</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>111111</td>
                <td>33213123</td>
                <td>123213</td>
                <td>4543</td>
                <td>12334</td>
                <td>6546</td>
                <td>6546</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>111111</td>
                <td>33213123</td>
                <td>123213</td>
                <td>4543</td>
                <td>12334</td>
                <td>6546</td>
                <td>6546</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/**end of row 4 */}
      </div>
      {/**end of container */}
    </div>
  );
}

export default App;
