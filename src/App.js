import React, {useState, useEffect} from 'react';
import Recipe from './Recipe';
import './App.css';
import axios from 'axios';


function App() {

  const APP_ID = "74de586e" ;
  const APP_KEY = "29af486d82d10bce32f00d2ab4076d94" ;

  const [recipes, setRecipes] = useState([])
  const [input, setInput] = useState("naan");


  useEffect(() => {
    getRecipes()
  
  }, [])
  


  const getRecipes =  () =>{
    axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${input}&app_id=${APP_ID}&app_key=${APP_KEY}`)
   .then(function (response) {
    // handle success
    console.log(response);
    setRecipes(response.data.hits)
    setInput("")
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  }
  const onSubmitBtn =(e) =>{

    e.preventDefault()
    getRecipes();
  }
console.log(recipes);

  return (
    <div className="App">
      <form onSubmit={(e) => onSubmitBtn(e)} className='search-from'>
      <input value={input} onChange={(e) => setInput(e.target.value)} className='search-bar' type='text' />
      <button className='search-button' type='submit'>Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe  key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}/>
      ))}
   </div>
  );
}

export default App;
