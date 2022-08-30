
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Script from 'next/script'
   
config.autoAddCss = false;


const sectionFour = () =>{
    return (
        <>
        <section className="mb-5">
    <div className="slide-title my-5">
      <div className="slide-title-wrapper">
        <h3 className="slide-text-title">
          Baazi Poker Tour 2019 Winners
        </h3>
      </div>
    </div>
    <div id="winner-2019" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#winner-2019" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#winner-2019" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#winner-2019" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#winner-2019" data-bs-slide-to="3"></button>
        <button type="button" data-bs-target="#winner-2019" data-bs-slide-to="4"></button>
      </div>
      <div className="carousel-inner">
        <div className="slide-1">
          <div className="slide-1-inner">
            <div className="slide-crsl">
              <div className="slide-1-crsl">
                <div className="carousel-item active">
                  <img src="images/winner-rhit.jpg" alt="rhit" className="d-block carouselImageDesign"/>
                </div>
                <div className="carousel-item">
                  <img src="images/winner-rohan.jpg" alt="rohan" className="d-block carouselImageDesign"/>
                </div>
                <div className="carousel-item">
                  <img src="images/winner-gokul.jpg" alt="gokul" className="d-block carouselImageDesign"/>
                </div>
                <div className="carousel-item">
                  <img src="images/winner-bharat.jpg" alt="bharat" className="d-block carouselImageDesign"/>
                </div>
                <div className="carousel-item">
                  <img src="images/winner-abhijeet.jpg" alt="abhijeet" className="d-block carouselImageDesign"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <a className="carousel-control-prev caro-pre carousel-prev-top" href="#winner-2019" data-bs-slide="prev">
          <span class="pre-btn"><img src="images/prev.png" className="car-img"/></span>
        </a>
        <a class="carousel-control-next caro-nxt carousel-next-top" href="#winner-2019" data-bs-slide="next">
          <span class="nxt-btn"><img src="images/next.png" className="car-img"/></span>
        </a>
      </div>
    </div> 
  </section>
        
        <Script src="bootstrap/dist/js/bootstrap.bundle.min.js"></Script>
        </>
    );
};

export default sectionFour;