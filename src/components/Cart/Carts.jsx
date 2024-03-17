import PropTypes from "prop-types";
import Cook from "../Cook/Cook";
import Cooking from "../Cooking/Cooking";

const Carts = ({ carts, handlePreparing, cooking }) => {
  return (
    <div className="py-8 border-[1px] border-[#28282833] rounded-2xl ">
      <div>
        <div className="px-16">
          <h2 className="text-center text-2xl font-semibold pb-4 border-b-[1px] border-[#28282833]">
            Want to cook: {carts.length}
          </h2>
        </div>
        <div className="mt-4 text-[#878787]">
          <tr className="flex justify-around">
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
            <th></th>
          </tr>
          {carts.map((cook, index) => (
            <Cook
              key={cook.id}
              cook={cook}
              index={index}
              handlePreparing={handlePreparing}
            ></Cook>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <div className="px-16">
          <h2 className="text-center text-2xl font-semibold pb-4 border-b-[1px] border-[#28282833]">
            Currently cooking: {cooking.length}
          </h2>
        </div>
        <div className="mt-4 text-[#878787]">
          <tr className="flex justify-around">
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
          </tr>
          <table className="w-full mt-4 bg-[#28282808]">
            {cooking.map((cookings, index) => (
              <tr key={index} className="flex justify-evenly gap-4 p-4 ">
                <td>{index + 1}</td>
                <td>{cookings.recipe_name}</td>
                <td>{cookings.preparing_time} minutes</td>
                <td>{cookings.calories} calories</td>
              </tr>
            ))}
          </table>

          <tr className="flex justify-end gap-4 text-[#282828CC] pt-4 pr-5">
            <td>
              Total Time =<br />
              {cooking.reduce(
                (time, cookings) => time + cookings.preparing_time,
                0
              )}{" "}
              minutes
            </td>
            <td>
              Total Calories =<br />{" "}
              {cooking.reduce((time, cookings) => time + cookings.calories, 0)}{" "}
              calories
            </td>
          </tr>
        </div>
      </div>
    </div>
  );
};

Carts.propType = {
  carts: PropTypes.array.isRequired,
  handlePreparing: PropTypes.func.isRequired,
  cooking: PropTypes.array.isRequired,
};

export default Carts;
