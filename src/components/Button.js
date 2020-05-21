import React from "react";

import { useDispatch } from "react-redux";
import { fetchData } from "../actions/newsAction";
const Button = () => {
  const dispatch = useDispatch();

  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <button onClick={() => dispatch(fetchData())} className="btn btn-primary">
        Click to fetch News
      </button>
    </div>
  );
};

export default Button;
