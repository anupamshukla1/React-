import React from 'react';
import "./index.css";
import { add,sub,div,multi } from "./Calc";

function App(){
    const cssStyle ={ };

let curDate=new Date();

/*const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();*/
curDate =curDate.getHours();
let greeting="";
if(curDate >=1 &&curDate<12){
  greeting='Good Morning';
  cssStyle.color ="green";

}
else if(curDate>=12 && curDate<=19 ){
  greeting='Good Afternoon';
  cssStyle.color ="orange";
}
else{
  greeting='Good Night';
  cssStyle.color ="black";
}
return(
    <>
    <div className="div">
  <h1 className="h1"> &nbsp; Hello Anupam,<span style={cssStyle}>{greeting}</span></h1>
</div>
<div className="div1">
<h1 className="h2">Calculator</h1>
<ul>
  <li> Sum of two no is : {add(40,4)}</li>
  <li>subtraction of two no is : {sub(40,4)}</li>
  <li>division of two no is : {div(40,4)}</li>
  <li>multiply of two no is  : {multi(40,4)}</li>
  </ul>
  

  


</div>
</>
);

}
export default App;