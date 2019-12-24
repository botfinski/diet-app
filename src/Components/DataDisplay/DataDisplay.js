import React from "react";
// import PropTypes from "prop-types";
import "./DataDisplay.scss";
import ProgressBar from "../ProgressBar/ProgressBar";

// const dataDisplay = props => {

// console.log(props);

//   return(
//   <div className="Data-Display">
//     <table>
//       <tbody>
//         <tr>
//           <td>
//             {/* {props.userData.kcal - props.nutritionData.kcal || '0'} kcal */}
//             {props.userData.kcal} kcal
//             <br/>
//             {props.nutritionData.kcal || '0'} kcal
//           </td>
//         </tr>
//         <tr className="Flex Flex-25">
//           <th>białko</th>
//           <th>węgle<span>cukry</span></th>
//           <th>tłuszcze<span>nasycone</span></th>
//           <th>sól</th>
//         </tr>
//         <tr className="Flex Flex-25">
//           <td>{props.nutritionData.protein || '0'} g</td>
//           <td>{props.nutritionData.carbohydrates || '0'} g<span>{props.nutritionData.sugar || '0'} g</span></td>
//           <td>{props.nutritionData.fat || '0'} g<span>{props.nutritionData.saturated || '0'} g</span></td>
//           <td>{props.nutritionData.salt || '0'} g</td>
//         </tr>
//       </tbody>

//     </table>
//   </div>
// )};

const dataDisplay = props => {
  console.log(props);

  return (
    <div className="Data-Display">
      {props.nutritionsNames.map(name => {
        return <ProgressBar name={name} data={props.data} />;
      })}
    </div>
  );
};

// dataDisplay.propTypes = {
//   nutritionData: PropTypes.shape({
//     name: PropTypes.string,
//     kcal: PropTypes.number,
//     protein: PropTypes.number,
//     carbohydrates: PropTypes.number,
//     sugar: PropTypes.number,
//     fat: PropTypes.number,
//     saturated: PropTypes.number,
//     salt: PropTypes.number
//   }),
//   userData: PropTypes.shape({
//     username: PropTypes.string,
//     weight: PropTypes.number,
//     heigth: PropTypes.number,
//     kcal: PropTypes.number
//   })
// };

export default dataDisplay;
