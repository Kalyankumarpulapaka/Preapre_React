import React, { useState } from 'react';
import Card from "./othercompo/Card";
import './App.css';

function App() {
 const [Total,setTotal]=useState(0)
 const fun=()=>{
  setTotal(count);
 }

  return (
  <div><h1 className='navbar'>The Total Cart Itoms are : {Total}</h1>
  <div className="container-fluid">
        <div className="row">
        <div className="col-md-3">
          <Card/>
        </div>
        <div className="col-md-3">
          <Card/>
        </div>
        <div className="col-md-3">
          <Card/>
        </div>
        <div className="col-md-3">
          <Card/>
        </div>
        </div>
</div>
</div>

  )
}

export default App;



