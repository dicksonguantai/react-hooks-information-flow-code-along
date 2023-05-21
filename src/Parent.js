import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {

  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildColor]=useState("fffe")

  function newColorHandler(newChildColor){
    console.log(newChildColor)
    const newColor = getRandomColor()
    console.log(newColor)
    setColor(newColor)
    setChildColor(newChildColor)
  }
  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={newColorHandler} childColor ={childColor} />
      <Child onChangeColor={newColorHandler} childColor ={childColor}/>
    </div>
  );
}

export default Parent;
