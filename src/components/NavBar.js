import classes from '../styles/Navbar.module.css';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';

function NavBar(){

    
    const style = {
        navdark:{
            backgroundColor:'rgb(17,17,17)',
        
        },
        header:{
            borderBottom: '0 none !important'
        },
        footer:{
            borderTop:'0 none !important'
        }
        
    }

    const handleFeatures = ()=>{
        window.location.href='/#features'
    }

    const handleDownload = ()=>{
        window.location.href='/#download'
    }

    return(
        <>
     
            
            <nav className="navbar navbar-expand-lg" style={style.navdark}>
            <div className="container d-flex align-items-center">
                <div className='navbar-brand d-flex'>
                    <Link to='/'>
                        <div className={`${classes.img_fit} ${classes.logo} me-3 animate__animated animate__fadeInDown`}>
                        
                        </div>
                    </Link>
                    
    
                </div> 

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className={`navbar-toggler-icon`} style={{color:'white'}}><i className="fa-solid fa-bars"></i></span>
                    </button>
                <div className="collapse navbar-collapse  d-lg-flex justify-content-between align-items-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mt-4 mt-lg-0 m-auto mb-2 mb-lg-0 w-adjust d-flex flex-column flex-lg-row justify-content-lg-end align-items-lg-center">
                            
                            <li className={`nav-item d-inline-block my-3 mx-lg-4 text-light fs-5`}>
                                <div style={{cursor:'pointer'}} onClick={handleFeatures} className='animate__animated animate__fadeInDown'><b className={classes.navHover}>Features</b></div>
                            </li>
                            
                            <li className='nav-item my-2 my-lg-0 mb-3 mb-lg-0 mx-lg-4 d-flex flex-column text-light fs-5'>
                                <Link to='/privacy' className='no-decor animate__animated animate__fadeInDown d-inline-block mb-3 my-lg-0 mx-0 mx-lg-2 ' style={{fontWeight:'bold'}}><b className={classes.navHover}>Privacy Policy</b></Link>
                            </li>
                            <li className='nav-item my-2 my-lg-0 mb-3 mb-lg-0 mx-lg-4 text-light d-flex flex-column d-lg-inline-block fs-5'>
                                <Link to='/support' className='no-decor animate__animated animate__fadeInDown d-inline-block mb-3 my-lg-0 mx-0 mx-lg-2 ' style={{fontWeight:'bold'}}><b className={classes.navHover}>Support</b></Link>
                            </li>
                        </ul>
                </div>
                
                
                
                
            </div>
        </nav>
        </>
    )
}

export default NavBar;