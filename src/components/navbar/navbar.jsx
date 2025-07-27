import { createHashRouter, NavLink, Outlet, Link } from 'react-router-dom';
import Home from '../home/home';
import About from '../about/about';
import Contact from '../contact/contact';
import Portfolio from '../portfolio/portfolio';
import navbarCss from '../navbar/navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect } from 'react';
import '../../index.css';

export const allRoutes = createHashRouter([
    {
        path: '', element: <Navbar />, children: [
            { index: true, element: <Home /> },
            { path: 'home', element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'contact', element: <Contact /> },
            { path: 'portfolio', element: <Portfolio /> },
            { path: '*', element: <div className='vh-100 bg-info d-flex justify-content-center align-items-center'> <h2>4 0 4 ERROR</h2></div> },
        ]
    },
])
function Navbar() {
    const[animation,setAnimation]=useState("py-4");
    function navAnimation(){
        if(window.scrollY>50){
            setAnimation("py-2");
        }else{
            setAnimation("py-4");
        }
    }
    useEffect(function(){
        document.addEventListener("scroll",navAnimation);
        return function(){
        document.removeEventListener("scroll",navAnimation);
        }
    },[]);
    return (
        <>
            <nav className={navbarCss.welcome_bg + " navbar navbar-expand-lg my_nav fixed-top updated-nav overflow-hidden " + animation } >
                <div className="container px-lg-5 ">
                    <Link className={navbarCss.fontlogo+"  text-white  "} to="home" >START FRAMEWORK</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-align-items-lg-center justify-content-center gap-4 gap-lg-0">
                            <li className="nav-item px-lg-4 mt-3 mt-lg-0">
                                <NavLink className="nav-link"  aria-current="page" to="about" >ABOUT</NavLink>
                            </li>
                            <li className="nav-item px-lg-4">
                                <NavLink className="nav-link" to="portfolio" >PORTFOLIO</NavLink>
                            </li>
                            <li className="nav-item px-lg-4">
                                <NavLink className="nav-link" to="contact" >CONTACT</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div>
                <Outlet />
            </div>
            <div className={navbarCss.footer+"   p-5"}>
                <div className="container py-5 p-lg-5">
                    <div className="row gap-5 gap-lg-0 ">
                        <div className="col-lg-4 d-flex flex-column align-items-center ">
                            <h2 className='text-white'>LOCATION</h2>
                            <p  className='text-white'>2215 John Daniel Drive</p>
                            <p  className='text-white'>Clark, MO 65243</p>
                        </div>
                        <div className="col-lg-4 d-flex flex-column align-items-center ">
                            <h2 className=' text-white'>AROUND THE WEB</h2>
                            <div className="brands-icons d-flex gap-2">
                                <div className={ navbarCss.iconstyle+" facebook d-flex justify-content-center align-items-center"}>
                                    <FontAwesomeIcon icon={faFacebook} className='text-white' />
                                </div>
                                <div className={ navbarCss.iconstyle+" twitter d-flex justify-content-center align-items-center"} >
                                    <FontAwesomeIcon icon={faTwitter} className='text-white' />
                                </div>
                                <div className={ navbarCss.iconstyle+" linkedin d-flex justify-content-center align-items-center"}>
                                    <FontAwesomeIcon icon={faLinkedin} className='text-white' />
                                </div>
                                <div className={ navbarCss.iconstyle+" linkedin d-flex justify-content-center align-items-center"}>
                                    <FontAwesomeIcon icon={faGlobe} className='text-white' />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 d-flex flex-column align-items-center  j text-center">
                            <h2 className='text-white'>ABOUT FREELANCER</h2>
                            <p  className='text-white'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={navbarCss.copyright+ " p-4 text-center"}>
                <p className='text-white'>Copyright © Your Website 2021</p>
            </div>
        </>
    )

}
