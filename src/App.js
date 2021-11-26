import React, {useState} from 'react'
import './App.css';
import data from './data/recipes.json';
import Menu from './components/Menu';

function App() {
  const [recipes, setRecipes] = useState(data);
  function searchWithBasicApproach(query) {
    if (!query) {return data;}
   return data.filter((recipe) => (recipe.name.toLowerCase().includes(query.toLowerCase()) ));
  }
  
  return (
    <div className="App">
      <header>
         <h1 style={{fontStyle:"italic"}} align="center" > Delicious Recipes</h1>
      </header>

      <form className="search-form" onSubmit={(event) => {
          event.preventDefault();
          const query =event.target.elements.query.value;
          const results = searchWithBasicApproach(query);
          setRecipes(results);
        }}>
        <input className="search-bar" type="text" id="query"/>
        <button className="search-button" type="submit" >
             Search
        </button>
      </form>

      <Menu recipes={recipes} />
     </div>
  );
}

export default App;
