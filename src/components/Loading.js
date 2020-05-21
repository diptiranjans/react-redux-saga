import React from "react";
import { useSelector } from "react-redux";
import img from "../assets/images/loader.png";
const Loading = () => {
  const { loading } = useSelector(state => state.news);
  return (
    loading && (
      <div style={{ textAlign: "center" }}>
        <img src={img} alt="loading" />
        <h1>LOADING</h1>
      </div>
    )
  );
};

export default Loading;
