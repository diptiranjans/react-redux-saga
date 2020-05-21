import React from "react";
import { useSelector } from "react-redux";

const NewsItem = () => {
  const { news_list } = useSelector(state => state.news);
  return (
    <>
      <div className="row">
        {news_list &&
          news_list.map((x, index) => {
            return (
              <div className="column" key={index}>
                <div className="card">
                  <img
                    src={
                      x.urlToImage
                        ? x.urlToImage
                        : `https://www.w3schools.com/howto/img_avatar.png`
                    }
                    alt="Avatar"
                    style={{ width: "100%" }}
                  />
                  <div className="container">
                    <h4>
                      <b>{x.author}</b>
                    </h4>
                    <p>{x.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default NewsItem;
