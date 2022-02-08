import React from 'react';
import recipeStore from '../store/RecipeStore';
import { useParams } from 'react-router-dom';


export default function RecipeDetails (recipe) {
    const recipeSlug = useParams().recipeSlug;
    const recipeProps = recipeStore.recipe.find((e)=>e.slug===recipeSlug)
    console.log(recipeSlug);
    console.log(recipeProps);
  return (
<div>
    <center>
      <>
        <img src={recipeProps.image}alt=""/>
      </>
    </center>
    
    
    <p>Recipe Name: {recipeProps.title}</p>
    
    <p>Description: {recipeProps.description}</p>
    <p>Calories: {recipeProps.calorie}</p>
    
      
 </div>
  )
       
};



