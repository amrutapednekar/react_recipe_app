import React from "react";
import Recipe from './Recipe';

function toggleFunction(divName) {
    var x = document.getElementById("toggle_"+divName);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function Menu({recipes})
{
return (
    <article>
        <ul>
        {recipes.map((recipe,i)=>
            <li  style= {{listStyle:"none"}}> <div  className="recipeName">
            <a id={recipe.name} href="#"
             onClick={() => toggleFunction(recipe.name)}>{recipe.name}</a>
              <span style= {{margin:"10px"}}>{recipe.desc}</span>
            </div>
            <div  id={"toggle_"+recipe.name} style={{display:"none"}}>
                <Recipe  key={i} {...recipe}/>
            </div>
            </li>)
        }
        
        </ul>
       
           
      
    </article>
)
}
export default Menu;