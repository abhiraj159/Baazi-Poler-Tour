import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Script from 'next/script'
   
config.autoAddCss = false;


const sectionFive = () =>{
    return (
        <>
        <section>
  <div className="container">
    <div className="slide-title my-5">
      <div className="slide-title-wrapper">
        <h3 className="slide-text-title">
          From our Baazigars
        </h3>
      </div>
    </div>
    <div id="testnml" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="carousel-caption">
                    <p>“I made my very first LIVE Final Table at BPT ‘16, and am extremely excited about the upcoming Edition! Looking forward to trademark Baazi hospitality and some big events at BPT ’19!”</p> 
                    <img src="images/Kartik-150x150.png"/>
                    <div id="image-caption">Kartik Ved (High-Roller - 2nd Runner Up, BPT’16)</div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="carousel-caption">
                    <p>“I’m looking forward to the next Edition of BPT! We have missed the series for a few years now. I have very special memories of the BPT, having finished 3rd in the Main Event back in 2016!”</p> 
                    <img src="images/Simon-150x150.png" className="img-fluid"/>
                    <div className="image-caption">Simon Mint (Main Event - 2nd Runner Up, BPT’16)</div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="carousel-caption">
                    <p> “I’m absolutely stoked that the BPT is back! The previous Edition witnessed an incredible turnout and to be honest, I’ve been waiting for Edition 2 ever since!”</p> 
                    <img src="images/Puneet-Dua-150x150.png" className="img-fluid"/>
                    <div className="image-caption">Puneet Dua (Main Event Winner, BPT’16)</div>
                </div>
            </div>
        </div> 
        <div>
        <a className="carousel-control-prev" href="#testnml" data-bs-slide="prev">
          <span className="pre-btn car-pre-btn"><img src="images/prev.png"/></span>
        </a>
        <a className="carousel-control-next" href="#testnml" data-bs-slide="next">
          <span className="nxt-btn car-pre-btn"><img src="images/next.png"/></span>
        </a>
      </div>
    </div>
</div>
 </section>
        
        <Script src="bootstrap/dist/js/bootstrap.bundle.min.js"></Script>
        </>
    );
};

export default sectionFive;