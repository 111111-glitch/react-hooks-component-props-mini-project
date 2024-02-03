import React from "react";

function Article({ title, date = "January 1, 1970", preview }) {
  
  const minutesToRead = Math.ceil(preview.split(" ").length / 200); 
  const coffeeCups = Array.from({ length: Math.ceil(minutesToRead / 5) }, (_, index) => (
    <span key={index} role="img" aria-label="Coffee Cup">
      ☕️
    </span>
  ));

  const bentoBoxes = Array.from({ length: Math.ceil(minutesToRead / 10) }, (_, index) => (
    <span key={index} role="img" aria-label="Bento Box">
      🍱
    </span>
  ));

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <div>
        {minutesToRead < 30 ? coffeeCups : bentoBoxes} {minutesToRead} min read
      </div>
    </article>
  );
}

export default Article;
