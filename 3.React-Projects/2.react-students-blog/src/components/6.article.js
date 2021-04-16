import React, { useState } from "react";
import Button from "./3.button";

function Article(props) {
  const [title, setTitle] = useState(props.data.title);

  const handlerChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="card full-width">
      <h1 onClick={props.click} style={{ color: props.color }}>
        {title}
      </h1>

      <p>{props.data.text}</p>
      <p>
        <b>You can change the article title here:</b>
      </p>

      <input
        onChange={(e) => handlerChangeTitle(e)}
        type="text"
        value={title}
      ></input>

      <Button buttonTitle={"Delete"} click={props.deleteArticle} />
    </div>
  );
}

export default Article;
