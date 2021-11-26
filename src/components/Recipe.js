import React from 'react';
import style from '../recipe.module.css';
import IngredientsList from './IngredientsList';
import Instructions from './Instructions';
function closeDiv(divName) {
    
    var x = document.getElementById("toggle_"+divName);
   
      x.style.display = "none";
    } 

function Recipe({name,ingredients,steps})
{  console.log({name});
    return(
            <div className={style.recipe}>
                <a id={"close_"+name}  href="#" onClick={() => closeDiv(name)}>Close</a>
                <h1>{name}</h1>
                <IngredientsList list={ingredients}/>
                <Instructions title="Cooking Instructions" steps={steps}/>
            </div>
         )
    
}
export default Recipe;