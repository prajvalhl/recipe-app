import React from "react";

const RecipeItem = (props) => {
  const { name, image, ingredientLines } = props;
  return (
    <div className="card py-2 text-center">
      <img
        src={image}
        className="img-fluid w-50 mx-auto rounded-circle"
        alt={name}
      />
      <div className="card-body">
        <h5>{name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        {ingredientLines.map((ingredient) => (
          <li key={Math.random() * 100} className="list-group-item">
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeItem;
