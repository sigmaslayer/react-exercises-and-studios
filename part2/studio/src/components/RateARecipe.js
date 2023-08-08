let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
  function GiveRating()  {
    return <h3>{stars[props.rating - 1]}</h3>
  }
 
  return props.rating >= 1 && props.rating <= 5 ? GiveRating() : null
  

}

export default RateARecipe;


// let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

// function RateARecipe({ rating }) {
//   let userRating = rating <= 5 && rating >= 1 ? rating : null;

//   function GiveRating() {
//     return <h3>{stars[userRating - 1]}</h3>;
//   }
  
//   return GiveRating();
// }

// export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
