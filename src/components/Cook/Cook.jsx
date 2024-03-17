import PropTypes from "prop-types";
const Cook = ({ cook }) => {
  const { recipe_name, preparing_time, calories } = cook;
  return (
    <table className="w-full">
      <tr className="flex mt-4 justify-around gap-4 p-4 bg-[#28282808]">
        <td>{recipe_name}</td>
        <td>{preparing_time} minutes</td>
        <td>{calories} calories</td>
        <button className="text-black bg-[#0BE58A] py-2 px-4 rounded-full text-base font-medium">
          Preparing
        </button>
      </tr>
    </table>
  );
};

Cook.propType = {
  cook: PropTypes.object.isRequired,
};

export default Cook;
