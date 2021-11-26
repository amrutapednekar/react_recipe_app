import React from 'react';
import Ingredient from './Ingredient';

function IngredientsList({list})
{ 
    return(
        <ul> 
             {list.map((ingredient, i) =>(
                 <Ingredient key= {i}  {...ingredient} />
             )
             )}
        </ul>
         )
}
export default IngredientsList;