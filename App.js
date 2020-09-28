import React from 'react';
import { BrowserRouter, switch,Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import User from "./User";
import Task from "./Task";




function App() {
  return (
    <BrowserRouter>
      
        <div>
        <switch>
          <Route path="/" exact component={Home} />
          <Route path="/Task" component={Task} />
          
          <Route path="/User" component={User} />
         <swutch>
        </div>
        
      
    </BrowserRouter>
  );
}

export default App;

