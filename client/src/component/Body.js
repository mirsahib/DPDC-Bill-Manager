import React from "react";
function Body() {
  return (
    <div class="container">
      <br />
      <div class="row">
        <div class="col-sm-3">
          <div class="form-group">
            <div class="input-group date" id="datetimepicker1">
              <input type="text" class="form-control" />
              <span class="input-group-addon">
                <span class="glyphicon glyphicon-calendar"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
