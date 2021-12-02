import React from "react";
import "./App.css";
import Data from "./Data";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

const App = () => {
  const dataElements = Data.map(item=>{
    return(
      <Card
      key= {item.id}
      data={item}

      />
    )
  })
  return (
    <>
      <Navbar />
      {dataElements}
    </>
  );
};
export default App;
