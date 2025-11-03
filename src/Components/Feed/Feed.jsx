import React, { useEffect, useState } from "react";
import thumbnail1 from "../../assets/thumbnail1.png";

import { Api_Key, value_converter } from "../../Data";

import "./Feed.css";
import { Link } from "react-router-dom";
import moment from "moment";

const Feed = ({ category }) => {
  const [Data, setData] = useState([]);
  const fetchData = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${Api_Key} `;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {Data.map((item, idx) => {
        return (
          <Link
            to={`/watch/${item.snippet.categoryId}/${item.id}`}
            className="card"
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {value_converter(item.statistics.viewCount)} views &bull;{" "}
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
