import React from "react";
import "./PlayVideo.css";
import Video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";

const PlayVideo = () => {
  return (
    <div className="play-video-container">
      <video src={Video1} controls autoPlay muted></video>
      <h3>Best Youtube Channel to learn web development</h3>
      <div className="play-video-info">
        <p>154k views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt="" />
            123K
          </span>
          <span>
            <img src={dislike} alt="" />2
          </span>
          <span>
            <img src={share} alt="" />
            share
          </span>
          <span>
            <img src={save} alt="" />
            save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>Greatstack</p>
          <span>10M subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="description">
        <p>Channel thats make learning easy</p>
        <p>Subscribe for more videos like this.</p>
        <hr />
        <h4>130 comments</h4>
        <div className="add-comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Thander <span>1Days ago</span>
            </h3>
            <p>A great channel to learn web development</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>144</span>
              <img src={dislike} alt="" />
              <span>2</span>
            </div>
          </div>
        </div>
        <div className="add-comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Thander <span>1Days ago</span>
            </h3>
            <p>A great channel to learn web development</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>144</span>
              <img src={dislike} alt="" />
              <span>2</span>
            </div>
          </div>
        </div>
        <div className="add-comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Thander <span>1Days ago</span>
            </h3>
            <p>A great channel to learn web development</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>144</span>
              <img src={dislike} alt="" />
              <span>2</span>
            </div>
          </div>
        </div>
        <div className="add-comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Thander <span>1Days ago</span>
            </h3>
            <p>A great channel to learn web development</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>144</span>
              <img src={dislike} alt="" />
              <span>2</span>
            </div>
          </div>
        </div>
        <div className="add-comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Thander <span>1Days ago</span>
            </h3>
            <p>A great channel to learn web development</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>144</span>
              <img src={dislike} alt="" />
              <span>2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
