import React from "react";
import { useSelector } from "react-redux";

const NewsItem = () => {
  const { loading, newsList } = useSelector(state => state.news);
  return (
    <div className="row">
      {newsList &&
        newsList.map((x, index) => {
          return (
            <div
              key={index}
              className="card"
              style={{
                width: "26rem",
                marginTop: "20px",
                float: "left",
                marginRight: "20px"
              }}
            >
              <img
                className="card-img-top"
                src={
                  x.urlToImage
                    ? x.urlToImage
                    : `https://www.w3schools.com/howto/img_avatar.png`
                }
                alt="Card image cap"
                width="240"
              />
              <div className="card-body">
                <h5 className="card-title">{x.author}</h5>
                <p className="card-text">{x.title}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default NewsItem;
