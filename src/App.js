import React from 'react';
import {Route, Switch} from 'react-router-dom';
import IndiaActive from './Components/IndiaActive';
import State from './Components/State';
import Country from './Components/Country';
import Menu from './Components/Menu';


const App = ()=>{
  return(
    <>
      <IndiaActive/>
      <Menu/>
      <Switch>
             <Route exact path='/' component={State}/>
             <Route exact path='/country/' component={Country}/>
      </Switch>
    </>
  )
}
export default App;