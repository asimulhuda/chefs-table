import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import Carts from "../Cart/Carts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [carts, setCarts] = useState([]);
  const [cooking, setCooking] = useState([]);

  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleCart = (recipe) => {
    const isExist = carts.find((food) => food.recipe_id == recipe.recipe_id);
    const newCart = [...carts, recipe];
    if (!isExist) {
      setCarts(newCart);
      toast.success("Food Added");
    } else {
      toast.warn("This Food Already Exists");
    }
  };

  const handlePreparing = (id, cook) => {
    const delCart = carts.filter((item) => item.recipe_id != id);
    setCarts(delCart);
    const isExist = cooking.find((cooks) => cooks.recipe_id == cook.recipe_id);
    const newCook = [...cooking, cook];
    if (!isExist) {
      setCooking(newCook);
      toast.success("Start Cooking");
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
        <Carts
          carts={carts}
          handlePreparing={handlePreparing}
          cooking={cooking}
        ></Carts>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Recipes;
