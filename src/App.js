import React from 'react'
import {Route, Switch} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Menu from "./Menu";
import Service from "./Service"
const Name=()=>{
    return <h1>Name Page</h1>
}

const App=()=>{
    return(
    <> 
    <Menu/>
    <Switch >
    <Route exact path='/' component={About}/> 
    <Route exact path='/service' component={Service}/> 
    <Route exact path='/contact' component={Contact}/> 
    <Route path='/contact/Name' component={Name}/> 
    <Route component={Error} />
    </Switch>
    
    {/*<About/>
    <Contact/> */}
     </> 
    )
}

export default App;