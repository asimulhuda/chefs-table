import PropTypes from "prop-types";
const Cooking = (cookings, index) => {
  return (
    <table className="w-full mt-4 bg-[#28282808]">
      <tr className="flex justify-evenly gap-4 p-4 ">
        <td>{index + 1}</td>
        <td>{cookings.recipe_name}</td>
        <td>{cookings.preparing_time} minutes</td>
        <td>{cookings.calories} calories</td>
      </tr>
    </table>
  );
};

Cooking.propType = {
  toCooking: PropTypes.object.isRequired,
  index: PropTypes.index,
};

export default Cooking;
