import React from 'react';
import Home from './Home';
import {Switch,Route} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import Skills from './Skills';


const App = ()=>{
   return(
     <React.Fragment>
      
      <Navbar/>
      <hr/>
  
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/contact" component={Contact}/>
       <Route exaxt path="/about" component={About}/> 
       <Route exact path='/skills' component={Skills}/>
      </Switch>
      
      <Footer/>

     </React.Fragment>

    
   )
}
export default App;
