import Image from 'next/image';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../conponents/Header.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
   
config.autoAddCss = false;


const headers = () =>{
    return (
        <>
            <header id="myHeader" className="sticky">
            <div className="container">
            <nav id="navbar" className="navbar navbar-expand-md navbar-light">
            <a className="navbar-brand"
            href="https://www.cardbaazi.com/"> 
            <Image id="Logo" src="/bpt_website_logo2.png"
            alt="Cardbaazi" width="213" height="50"></Image></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent">
            <div className="animated-icon-3">
            <span className="navbar-toggler-icon"></span>
            </div>
            </button>
            <div className="navbar-collapse collapse" id="navbarSupportedContent">
            <ul className={`${styles.msAuto} navbar-nav mb-2 mb-lg-0`}>
            <li className="nav-item"><a href="/about-us" className="nav-link">HOME</a></li>
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button"
                data-bs-toggle="dropdown">
                ABOUT
              </a>
              <ul className="dropdown-menu">
                <li>
                <a className="dropdown-item" href="https://baazipokertour.com/about-us/">About Us</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" role="button"
                data-bs-toggle="dropdown">
                GALLERY
              </a>
              <ul className="dropdown-menu">
                <li><a href="https://baazipokertour.com/gallery-2022/" className="dropdown-item">BPT 2022</a></li>
                <li><a href="https://baazipokertour.com/gallery-2020/" className="dropdown-item">BPT 2020</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" role="button"
                data-bs-toggle="dropdown">
                STREAM
              </a>
              <ul className="dropdown-menu">
                <li><a href="https://baazipokertour.com/bpt-2022/" className="dropdown-item">BPT 2022</a></li>
                <li><a href="https://baazipokertour.com/bpt-2020/" className="dropdown-item">BPT 2020</a></li>
                <li><a href="https://baazipokertour.com/stream/" className="dropdown-item">BPT 2019</a></li>
              </ul>
            </li>
            <li className="nav-item"><a href="https://baazipokertour.com/contact-us/" className="nav-link">Contact Us</a></li>
          </ul>
        </div>
        
        
      </nav>
    </div>  
            </header>
        </>
    );
};

export default headers;