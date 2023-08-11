const RecipeAuthor = () => {
  let authorLink = "https://en.wikipedia.org/wiki/File:Tuna_Casserole2.jpg";
  let authorPhoto =
    "https://en.wikipedia.org/wiki/File:Chef_Tom_Wandera_at_work.jpg";
  let authorName = "JAICARD";

  return (
    <div>
      <img
        src={authorPhoto}
        alt=""
        style={{ objectFit: "contain", borderRadius: "50%" }}
      />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}></a>
      </div>
    </div>
  );
};

const RecipeIngredients = () => {
  const ingredients = [
    "1 (12 ounce) package egg noodles",
    "2 (10.5 ounce) cans condensed cream of mushroom soup",
    "2 cups shredded Cheddar cheese, divided",
    "2 (5 ounce) cans tuna, drained",
    "1 cup frozen green peas",
  ];
  return (
    <div>
      <h3>Recipe Ingredients</h3>
      <ul>
        <li>{ingredients[0]}</li>
        <li>{ingredients[1]}</li>
        <li>{ingredients[2]}</li>
        <li>{ingredients[3]}</li>
        <li>{ingredients[4]}</li>
      </ul>
    </div>
  );
};

const RecipeDescription = () => {
  return (
    <div>
      <div>
        <h1>Tune Casserole</h1>
        <p>
          This is a tuna casserole that even my picky family loves! The potato
          chips give the casserole a crunchy crust.
        </p>
      </div>
      <div className="recipePhotoBlock">
        <RecipeIngredients />
        <RecipeAuthor />
      </div>
    </div>
  );
};

const RecipePhoto = () => {
  return <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Tuna_Casserole2.jpg" alt="Tuna Casserole" className="imageUpdates" />;
};

export default function RecipeDisplay() {
  return (
    <div className="recipePhotoBlock">
      <RecipePhoto />
      <div>
        <RecipeDescription />
      </div>
    </div>
  );
}
