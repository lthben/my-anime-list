import React from "react";
import { makeAPIRequest } from "./APIquery";

const Form = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    makeAPIRequest(props.search);
  };

  const handleSearchChange = (e) => {
    props.setSearch(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="animeTitleInput">Anime title</label>
          <input
            type="text"
            onChange={handleSearchChange}
            value={props.search}
            className="form-control"
            id="animeTitleInput"
            placeholder="Enter anime title"
          ></input>
        </div>
      </form>
      {/* <div className="row">
          <div className="col-sm-3">
            <input
              type="text"
              onChange={handleNameChange}
              value={props.name}
              placeholder="Enter anime title"
            ></input>
          </div>
          <div className="col-sm-3">
            <input
              type="text"
              onChange={handlePriceChange}
              value={props.price}
              placeholder="Enter product price"
            ></input>
          </div>
          <div className="col-sm-3">
            <input
              type="text"
              onChange={handleDescChange}
              value={props.desc}
              placeholder="Enter product description"
            ></input>
          </div>
          <div className="col-sm-3">
            <button type="submit">Submit</button>
          </div>
        </div> */}
    </React.Fragment>
  );
};

export default Form;
