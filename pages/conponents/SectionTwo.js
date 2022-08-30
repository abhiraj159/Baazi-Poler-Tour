// import Image from 'next/image';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Script from 'next/script'
   
config.autoAddCss = false;


const sectionTwo = () =>{
    return (
        <>
        <section>
        <div className="slide-title slide-title-1">
        <div className="slide-title-wrapper">
        <h3 className="slide-text-title">
          Baazi Poker Tour 2022 Winners
        </h3>
        </div>
      
        </div>
        <div id="winner3" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#winner3" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#winner3" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#winner3" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#winner3" data-bs-slide-to="3"></button>
        <button type="button" data-bs-target="#winner3" data-bs-slide-to="4"></button>
      </div>
      <div className="carousel-inner">
        <div className="slide-1">
          <div className="slide-1-inner">
            <div className="slide-crsl">
              <div className="slide-1-crsl">
                <div className="carousel-item active">
                  <img src="images/BPT-winner-website-gaurav.jpg" alt="gaurav" className="d-block carouselImageDesign"/>
                </div>
                <div className="carousel-item">
                  <img src="images/BPT-winner-website-Karunanithi.jpg" alt="Karunanithi" className="d-block carouselImageDesign"/>
                </div>
                <div className="carousel-item">
                  <img src="images/BPT-winner-website-nitin.jpg" alt="nitin" className="d-block carouselImageDesign"/>
                </div>
                <div className="carousel-item">
                  <img src="images/BPT-winner-website-ujjwal.jpg" alt="ujjwal" className="d-block carouselImageDesign"/>
                </div>
                <div className="carousel-item">
                  <img src="images/BPT-winner-website-zarvan.jpg" alt="zarvan" className="d-block carouselImageDesign"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <a className="carousel-control-prev caro-pre carousel-prev-top" href="#winner3" data-bs-slide="prev">
          <span className="pre-btn"><img src="images/prev.png" className="car-img"/></span>
        </a>
        <a className="carousel-control-next caro-nxt carousel-next-top" href="#winner3" data-bs-slide="next">
          <span className="nxt-btn"><img src="images/next.png" className="car-img"/></span>
        </a>
      </div>
    </div>
    
        </section>
        <Script src="bootstrap/dist/js/bootstrap.bundle.min.js"></Script>
        </>
    );
};

export default sectionTwo;