import React, { useEffect, useState } from "react";
import "./Recomended.css";
import { Api_Key, value_converter } from "../../Data.js";
import { Link } from "react-router-dom";

const Recomended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);
  const fetchRecomendedVideos = async () => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=IN&videoCategoryId=${categoryId}&key=${Api_Key}`
    );
    const data = await response.json();
    setApiData(data.items);
  };

  useEffect(() => {
    fetchRecomendedVideos();
  }, [categoryId]);

  return (
    <div className="recomended">
      {apiData.map((item, idx) => {
        return (
          <Link
            to={`/watch/${item.snippet.categoryId}/${item.id}`}
            key={idx}
            className="side-video-list"
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
              <h4 className="title">{item.snippet.title} </h4>
              <p className="channel-name">{item.snippet.channelTitle}</p>
              <p className="views">
                {value_converter(item.statistics.viewCount)} Views
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recomended;
