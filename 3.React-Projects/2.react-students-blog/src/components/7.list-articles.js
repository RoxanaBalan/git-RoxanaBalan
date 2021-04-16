import Article from "./6.article";
import Button from "./3.button";
import React, { useState } from "react";
import articlesListData from "../data/article-list-data";

function ListArticles(props) {
  const [articleTitleColor, setArticleTitleColor] = useState("black");
  const changeTitleColor = (color) => {
    setArticleTitleColor(color);
  };

  const [articles, setArticles] = useState(articlesListData);
  const deleteArticleHandler = (index) => {
    let articlesCopy = [...articles];
    articlesCopy.splice(index, 1);
    setArticles(articlesCopy);
  };

  return (
    <div className="articles">
      <Button
        click={() => changeTitleColor("red")}
        buttonTitle="Change Red Color"
      />

      {articles.map((article, index) => (
        <Article
          key={article.id}
          color={articleTitleColor}
          data={article}
          title={article.title}
          deleteArticle={() => deleteArticleHandler(index)}
          click={() => changeTitleColor(article.color)}
        />
      ))}
    </div>
  );
}

export default ListArticles;
