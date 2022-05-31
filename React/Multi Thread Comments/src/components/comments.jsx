import React from "react";
import { useState } from "react";
import "./comments.css";
export const Comments = ({ data }) => {
  const [comment, setComment] = useState(true);

  if (data.replies) {
    return (
      <div className="maindiv">
        <div className="inner">
          <div className="comment">
            <span
              onClick={() => setComment(!comment)}
              style={{ cursor: "pointer", fontWeight: "bold" }}
            >
              {comment ? "show" : "hide"}
            </span>
            <div>{data.author}</div>
            <div>{data.points} points</div>
            <div>{data.timestamp.split(" ").splice(4, 1)}</div>
          </div>
          <div>
            {data.body}
            <br />
          </div>
        </div>
        <div
          style={{
            display: comment === false ? "block" : "none",
            paddingLeft: "5%",
          }}
        >
          {data.replies.map((e) => {
            return <Comments data={e} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="inner" style={{ paddingLeft: "5px" }}>
        <div className="comment">
          <div>{data.author}</div>
          <div>{data.points} points</div>
          <div>{data.timestamp.split(" ").splice(4, 1)}</div>
        </div>
        <div>
          {data.body}
          <br />
        </div>
      </div>
    );
  }
};
