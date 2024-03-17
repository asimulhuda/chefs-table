import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import Carts from "../Cart/Carts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleCart = (recipe) => {
    const alreadyExists = carts.find((food) => food.id == recipes.id);
    const newCart = [...carts, recipe];
    if (!alreadyExists) {
      setCarts(newCart);
      toast.success("Food Added");
    } else {
      toast.warn("Food Already Exists");
    }
  };

  return (
    <div className="flex lg:flex-row flex-col-reverse justify-between gap-6 mb-28 space-y-10">
      <div className="lg:w-3/5 grid lg:grid-cols-2 grid-cols-1 gap-6">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            recipe={recipe}
            handleCart={handleCart}
          ></Recipe>
        ))}
      </div>
      <div className="lg:w-2/5">
        <Carts carts={carts}></Carts>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Recipes;
