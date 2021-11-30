import React from "react";
import "./App.css";
import Jokes from "./components/Jokes";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import JokesData from "./Data";
import Data from "./Data";

const App = () => {
  //   return(
  //     <>
    
  //     <Hero/>
  //     <Card  rating="5.0" count="(6) ." country="USA" title="Life lessons with Katie Zaferes" price="From $136"/>
  //     <Jokes/>

  // <Jokes setup="Where does a waitress with only one leg work?" punchline="IHOP."/>

  // <Jokes setup="What does a house wear?" punchline="Address!"/>
  //     </>
  //   )
  // }

  // const jokeElements = JokesData.map(joke =>{
  //   return(
  //     <Jokes setup = {joke.setup} punchline = {joke.punchline}/>
  //   )
  // })

  const dataElements = Data.map(data => {
    return (
      
        <Card key ={data.id}
        item={data}
        />
     
    );
  });
  return (

    <>
      <Navbar/>
      <Hero/>
      <section className="card--list">

    {dataElements}
      </section>
    </>
    /* {jokeElements} */
    // <Jokes />
   
  );
};
export default App;
