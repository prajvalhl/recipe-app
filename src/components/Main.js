import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import Recipes from "./Recipes";
import Axios from "axios";
import BounceLoader from "react-spinners/BounceLoader";

function Main() {
  const [search, setSerach] = useState("");
  const [recipes, setRecipes] = useState([]);
  let [loading, setLoading] = useState(false);

  const APP_ID = "1edcf472";
  const APP_KEY = "d868d59c172c42effbc54e4b6065c0e6";

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  useEffect(() => {
    getRecipes("chicken");
  }, []);

  const getRecipes = async (foodToSearch) => {
    setLoading(true);
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${foodToSearch}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(res.data.hits);
    setLoading(false);
  };

  const onInputChange = (e) => {
    setSerach(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes(search);
  };
  return (
    <div className="App">
      <div className={loading ? "recipe-loader" : ""}>
        <BounceLoader loading={loading} color="#ff0" cssOverride={override} />
      </div>
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default Main;
