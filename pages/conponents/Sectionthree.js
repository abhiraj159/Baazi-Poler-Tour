
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Script from 'next/script'
   
config.autoAddCss = false;


const sectionTwo = () =>{
    return (
        <>
        <section>
    <div class="slide-title my-5">
      <div class="slide-title-wrapper">
        <h3 class="slide-text-title">
          Baazi Poker Tour 2020 Winners
        </h3>
      </div>
    </div>
    <div id="winner-2020" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#winner-2020" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#winner-2020" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#winner-2020" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#winner-2020" data-bs-slide-to="3"></button>
        <button type="button" data-bs-target="#winner-2020" data-bs-slide-to="4"></button>
      </div>
      
     
      <div className="carousel-inner">
        <div className="slide-1">
          <div className="slide-1-inner">
            <div className="slide-crsl">
              <div className="slide-1-crsl">
                <div className="carousel-item active">
                  <img src="images/navi.jpg" alt="navi" className="d-block carouselImageDesign"/>
                </div>
                <div className="carousel-item">
                  <img src="images/tanmei.jpg" alt="tanmei" className="d-block carouselImageDesign"/>
                </div>
                <div className="carousel-item">
                  <img src="images/kshitij.jpg" alt="kshitij" className="d-block carouselImageDesign"/>
                </div>
                <div className="carousel-item">
                  <img src="images/devang.jpg" alt="devang" className="d-block carouselImageDesign"/>
                </div>
                <div className="carousel-item">
                  <img src="images/ashish-ahuja.jpg" alt="ashish-ahuja" className="d-block carouselImageDesign"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <a className="carousel-control-prev caro-pre carousel-prev-top" href="#winner-2020" data-bs-slide="prev">
          <span className="pre-btn"><img src="images/prev.png" className="car-img"/></span>
        </a>
        <a className="carousel-control-next caro-nxt carousel-next-top" href="#winner-2020" data-bs-slide="next">
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