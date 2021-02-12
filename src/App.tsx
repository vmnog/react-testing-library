import React from 'react';
import Home from './pages/Home';
import {Switch, Route, BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Switch>  
        <Route path="/" exact>
          <Home /> 
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
