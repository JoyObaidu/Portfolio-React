import './App.css';
import { recipes } from './Greeting';

export default function RecipeList() {
  const recipeList = recipes.map((recipe) => (
    <div key={recipe.id}>
      <h2>{recipe.name}</h2>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Recipes</h1>
       {recipeList}
    </div>
  );
}



