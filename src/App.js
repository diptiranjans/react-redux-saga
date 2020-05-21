import React from "react";
import Button from "./components/Button";
import Loading from "./components/Loading";
import NewsItem from "./components/NewsItem";
const App = () => {
  return (
    <div className="container">
      <div className="row">
        <Button />
      </div>
      <div className="row">
        <Loading />
      </div>

      <NewsItem />
    </div>
  );
};

export default App;
