import { FaRegClock } from "react-icons/fa6";
import { PiFireSimpleLight } from "react-icons/pi";
import PropTypes from "prop-types";
const Recipe = ({ recipe, handleCart }) => {
  const {
    recipe_name,
    recipe_image,
    calories,
    preparing_time,
    ingredients,
    short_description,
  } = recipe;
  return (
    <div className="p-6 border-[1px] border-[#28282833] rounded-2xl space-y-6 *:border[#2828281A]">
      <div className=" space-y-4 pb-6 border-b-[1px]">
        <img className="w-full rounded-2xl" src={recipe_image} alt="" />
        <h3 className="text-[28px] font-semibold">{recipe_name}</h3>
        <p className="text-[#878787]">{short_description}</p>
      </div>
      <div className="space-y-4 pb-6 border-b-[1px]">
        <h6 className="text-lg text-[#282828] font-medium">
          Ingredients: {ingredients.length}
        </h6>
        <ul className="list-disc ml-4 *:text-lg *:text-[#878787]">
          {ingredients.map((ing) => (
            <li>{ing}</li>
          ))}
        </ul>
      </div>
      <div className="flex gap-6 *:flex *:items-center *:gap-2 *:text-[#282828CC]">
        <p>
          <FaRegClock />
          {preparing_time} minutes
        </p>
        <p>
          <PiFireSimpleLight />
          {calories} calories
        </p>
      </div>
      <button
        onClick={() => handleCart(recipe)}
        className="text-black bg-[#0BE58A] py-3 px-4 rounded-full text-lg font-medium"
      >
        Want to Cook
      </button>
    </div>
  );
};

Recipe.propType = {
  recipe: PropTypes.object.isRequired,
  handleCart: PropTypes.func.isRequired,
};

export default Recipe;
