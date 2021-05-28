import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },        
  },
}));


const Navbar =()=>{
  const classes = useStyles();


  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light myStyle" >
            <div className="container-fluid">
            <div className={classes.root}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      
    </div>
            <a  className="navbar-brand" href="#" >MyWeb</a >
            <button className="navbar-toggler btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
               <li className="nav-item">
                  <NavLink to="/" activeClassName="menu_active" className="nav-link active acv" aria-current="page" href="#">Home</NavLink >
                </li>
               <li className="nav-item">
                   <NavLink to="/about" activeClassName="menu_active" className="nav-link active acv" aria-current="page" href="#">About</NavLink >
                </li>
                <li className="nav-item">
                     <NavLink to="/contact" activeClassName="menu_active" className="nav-link active acv" aria-current="page" href="#">Contact</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/skills" activeClassName="menu_active" className="nav-link active acv" aria-current="page" href="#">Skills</NavLink >
                </li>
                
               </ul>
      
    </div>
  </div>
</nav>



    </React.Fragment>




  )



}


export default Navbar;