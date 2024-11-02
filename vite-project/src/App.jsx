//Puppy Pals. Section 1, Scaffold React App. Refactor the Starting Point
    //Remove the useState import and the count state variable and setCount function.
    //Delete the JSX code that includes the logos, button, counter, and paragraphs.
    //Keep a single <div className="App"> as the parent element for any future content you’ll add.
    //After saving the file, open the app in your browser, and it should display an empty page. This sets up a clean slate for adding custom content.

//Section 2, Puppy Data with useState, step 1 Add Data
  //Import the puppyList from data.js
  //Step 2, Use the Data in React
    //Examine the puppyList array
    //Log puppyList in console
    //Use useState in React
  //Step 3, Map Over the Data
    //Use the map method in React
    //Inside the div element add a set of braces
    //Return a p tag for each puppy with the puppy name rendered
    //When working with lists, React needs a key to maintain the order of elements. Key is a unique identifier. Use that of the puppies. 

import { useState } from 'react';     //IMport useState from react at the top level. Allows us to use the state within the component. 
import {puppyList} from './data.js';    //IMport puppyList and ensure correct path
import './App.css';


function App() {
  const [puppies, setPuppies] = useState(puppyList);    //INitlize the state with the puppy data so it becomes reactive     //Use the useState hook and make the puppyList the value. THis passes the puppList array from the datq.js file to become the default value here.
  //console.log(puppyList);     //Log the puppyList in the console
  console.log(puppies);     //Change the console.log from puppyList to log the puppies array from the useState hook 

  return (  //Add curly braces inside the div element {} to Escape from React back into the Javascript. The braces will access the puppies data. 
    <>
      <div className="card">        
        {  
          puppies.map((puppy) => {    //Use the Array method to map over each puppy. Use Array.map() method to map over the puppies array and return jsx code. 
            //return <p>{puppy.name}</p>    //For each puppy return a p tag 
            return <p key={puppy.id}>{puppy.name}</p>    //Add a key as the unique identifer from the puppies ID so the react knows each individual puppy to map over
          })
        }     
      </div>
                   
    </>
  )
}

export default App;


