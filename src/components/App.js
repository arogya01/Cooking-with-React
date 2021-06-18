import React, {useState} from 'react';
import RecipeList from './RecipeList';
import '../css/app.css';

function App() {
  const [recipe,setRecipes] = useState(recipeSamples)
  return ( 
    <RecipeList recipes={recipeSamples}/>

  )
}

const recipeSamples=[
  { 
  
  id:1,
  name:"Plain Chicken", 
  CookTime: "1:45",
  Servings:3,
  Instructions:"1.Put Salt On Chicken \n2.Put Chicken in Oven \n3.Eat Chicken",
  ingredients:[
    {
      id:1,
      name:'chicken',
      amount:'2 Pounds',
    },
    {
      id:2,
      name:'salt',
      amount:'1 tbs',
    }
  ]
},
  { 
  
  id:2,
  name:"Pork Chicken", 
  CookTime: "1:45",
  Servings:3,
  Instructions:"1.Put paparika on pork \n2.Put Pork in Oven \n3.Eat Pork",
  ingredients:[
    {
      id:1,
      name:'Pork',
      amount:'2 Pounds',
    },
    {
      id:2,
      name:'poprika',
      amount:'2 Pounds',
    }
  ]
}

]

export default App;
