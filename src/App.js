import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Recipe from './Recipe'

function App() {
  const APP_ID = "c429c2cb";
  const APP_key = "89c4802646e5c79f2760ffa2d556f0f4";
  
  const [recipes, setRecipes] = useState([])

  const [searchbar, setSearchBar] = useState('chicken')

  useEffect(() => {
    newfun()
  }, [])
  

  function newfun() {
    axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchbar.toLocaleLowerCase()}&app_id=${APP_ID}&app_key=${APP_key}`)
    .then(function (response) {
      console.log(response);
      // handle success
      setRecipes(response.data.hits)
      setSearchBar("")
    })
    .catch(function (error) {
      // handle error
    
    })
  }

  function newfun2(e) {
    e.preventDefault();
    newfun();
  }

  return (
    <div className="App">
      <form className='search-form' onSubmit={newfun2}>
        <input value={searchbar} onChange = {(event) => setSearchBar(event.target.value)}  className='search-bar' type="text" placeholder='Enter Your Ingredients' />
        <button  className='search-btn'>
          Search
        </button>
        <div className='ddww'>
        {recipes.map((recipe, index)=> {
        return(
          <Recipe key={index}
          title = {recipe.recipe.label}
          calories = {recipe.recipe.calories}
          image = {recipe.recipe.image}
          ingredients={recipe.recipe.ingredientLines}/>
        )
      })}
      </div>
      </form>

    </div>
  );
}

export default App;
