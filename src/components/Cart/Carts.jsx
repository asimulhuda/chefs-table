import PropTypes from "prop-types";
import Cook from "../Cook/Cook";

const Carts = ({ carts }) => {
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
          {carts.map((cook) => (
            <Cook key={cook.id} cook={cook}></Cook>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <div className="px-16">
          <h2 className="text-center text-2xl font-semibold pb-4 border-b-[1px] border-[#28282833]">
            Currently cooking: 02
          </h2>
        </div>
        <div className="mt-4 text-[#878787]">
          <tr className="flex justify-around">
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
          </tr>
          <table className="w-full mt-4 bg-[#28282808]">
            <tr className="flex justify-evenly gap-4 p-4 ">
              <td>Spaghetti Bolognese</td>
              <td>30 minutes</td>
              <td>600 calories</td>
            </tr>
            <tr className="flex  justify-evenly gap-4 p-4 ">
              <td>Spaghetti Bolognese</td>
              <td>30 minutes</td>
              <td>600 calories</td>
            </tr>
          </table>
          <tr className="flex justify-end gap-4 text-[#282828CC] pt-4 pr-5">
            <td></td>
            <td></td>
            <td>
              Total Time =<br /> 45 minutes
            </td>
            <td>
              Total Calories =<br /> 1050 caloriess
            </td>
          </tr>
        </div>
      </div>
    </div>
  );
};

Carts.propType = {
  carts: PropTypes.object.isRequired,
};

export default Carts;
