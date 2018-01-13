import React from "react";

const search = props => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Search</h3>
      </div>
      <div className="panel-body">
        <form method="POST">
          <div className="form-group">
            <label>Topic</label>
            <input
              type="text"
              className="form-control"
              value={props.Topic}
              onChange={props.handleInputChange}
              name="Topic"
              placeholder="Topic"
            />
          </div>

          <div className="form-group">
            <label>Starting Year</label>
            <input
              type="text"
              className="form-control"
              value={props.Year_start}
              onChange={props.handleInputChange}
              name="Year_start"
              placeholder="Starting Years"
            />
          </div>

          <div className="form-group">
            <label>Ending Year</label>
            <input
              type="text"
              className="form-control"
              value={props.Year_end}
              onChange={props.handleInputChange}
              name="Year_end"
              placeholder="Ending Years"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={props.handleFormSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default search;
