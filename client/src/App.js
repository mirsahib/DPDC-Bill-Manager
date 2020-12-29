import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import logo from "./images/logo.png";

import "./App.css";
import axios from "axios";

function App() {
  // major app state
  const [tableOne, settableOne] = useState([]); // to handle list of customer no
  const [customerNoId, setCustomerNoId] = useState(1); // to handle table 1 hastag tag value
  const [tableTwo, setTableTwo] = useState([]);

  //Customer number state and event listener
  const [customerNo, setCustomerNo] = useState(""); //to handle customer no. input field
  const handleCustomerNo = (e) => {
    setCustomerNo(e);
  };

  const handleSubmitCustomerNo = (e) => {
    e.preventDefault();
    const customerNoObj = { id: customerNoId, cno: customerNo }; // create a customer number object with id (table # tag value)
    settableOne([...tableOne, customerNoObj]); // append new customer no.
    setCustomerNoId(customerNoId + 1); // increment table 1 hastag value
    setCustomerNo(""); // clear customer no. input field
  };

  //Customer number table state and event listener (table 1)
  //clear table t
  const handleTableClear = () => {
    settableOne([]);
  };

  //Date state and event listener
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null); // there is no use of this state but we are using this to avoid datepicker bug(maybe i need to look into this)
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  // Fetch api
  const handleFetchApi = async () => {
    // check if table 1 is empty
    // if (tableOne.length === 0) {
    //   alert("Customer No table is empty");
    //   return;
    // }
    // deconstruct date
    const month = startDate.getMonth() + 1; // date object start from 0,our api month range is 1-12
    const year = startDate.getFullYear();
    console.log("month", month, "year", year);
    // build api link
    const extractCustomerNo = tableOne.map((e) => {
      return e.cno;
    });
    const url = `/scraper?cno=${extractCustomerNo}&year=${year}&month=${month}`;
    // fetch data
    // const data = await axios.get(url);
    const data = JSON.parse(localStorage.getItem("sample"));

    //calculate total amount
    const totalAmount = data.reduce(function (prevElement, currElement) {
      return prevElement + Number(currElement.Amount);
    }, 0);
    const totalAmountWithFine = data.reduce(function (
      prevElement,
      currElement
    ) {
      return prevElement + Number(currElement.Amount_With_Fine);
    },
    0);
    const totalRow = {
      id: "*",
      Name: "***",
      Customer_No: "***",
      Meter_No: "***",
      Previous_Unit: "***",
      Current_Unit: "***",
      Unit_Consumtion: "***",
      Amount: totalAmount,
      Amount_With_Fine: totalAmountWithFine,
    };
    data.push(totalRow);

    setTableTwo(data);
  };

  //Bill table and event listener (table 2)

  return (
    <div>
      <nav id="nav-prim" className="navbar py-0 navbar-dark bg-dark">
        <a className="navbar-brand" href="/#">
          <img src={logo} className="mr-1 pb-1" alt="DPDC-B-M" />
          DPDC Bill Manager
        </a>
      </nav>
      <div className="container">
        <div className="row mb-3">
          <div className="col-sm">
            <form onSubmit={handleSubmitCustomerNo}>
              <div className="input-group py-0">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Customer No."
                  aria-label="Enter Customer No."
                  aria-describedby="basic-addon2"
                  value={customerNo}
                  onChange={(e) => handleCustomerNo(e.target.value)}
                  required
                />
                <div className="input-group-append">
                  <button className="btn btn-primary mr-3" type="submit">
                    Add
                  </button>
                  <button
                    className="btn btn-danger"
                    type="button"
                    onClick={handleTableClear}
                  >
                    Clear
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/**end of row 1 */}
        <div className="row">
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Customer Number</th>
              </tr>
            </thead>
            <tbody>
              {tableOne.length !== 0 ? (
                tableOne.map((element) => {
                  return (
                    <tr key={element.id}>
                      <th scope="row">{element.id}</th>
                      <td>{element.cno}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <th scope="row">0</th>
                  <td>NA</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/**end of row 2 */}
        <div className="row mb-3">
          <div className="col-sm">
            <h5>Select Month & Year</h5>
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
            <button
              className="btn btn-success float-right"
              onClick={handleFetchApi}
            >
              Submit
            </button>
          </div>
        </div>
        {/**end of row 3 */}
        <div className="row">
          <table className="table table-dark">
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
              {tableTwo.length !== 0 ? (
                tableTwo.map((element) => {
                  return (
                    <tr key={element.id}>
                      <th scope="row">{element.id}</th>
                      <td>{element.Name}</td>
                      <td>{element.Customer_No}</td>
                      <td>{element.Meter_No}</td>
                      <td>{element.Previous_Unit}</td>
                      <td>{element.Current_Unit}</td>
                      <td>{element.Unit_Consumtion}</td>
                      <td>{Number(element.Amount)}</td>
                      <td>{Number(element.Amount_With_Fine)}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <th scope="row">0</th>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                </tr>
              )}
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
