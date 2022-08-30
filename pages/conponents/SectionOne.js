import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

   
config.autoAddCss = false;



const sectionOne = () =>{
    return (
        <>
        <section>
        <div className="banner-image" id="bannerImage" style={{marginTop:10 + "px"}}>
        </div>
        <div className="container">
      <div className="banner-text">
        <div className="position-relative">
          <p style={{fontSize:20 + "px"}}>Baazi Poker Tour </p>
        </div>
        <div className="position-relative">
          <p style={{fontSize:50 + "px", fontWeight: "700"}}>India's Premier</p>
        </div>
        <div className="position-relative">
          <p style={{fontSize:50 + "px", fontWeight: "700"}}>Live Poker Series</p>
        </div>
        <div className="position-relative">
          <p style={{fontSize:20 + "px"}}>#LiveTheBaazi </p>
        </div>
        <div className="position-relative mt-4">
          <p style={{fontSize:20 + "px"}}>Presented By</p>
        </div>
        <div className="position-relative" style={{right:10 + "px"}}>
          <img src="images/pokerbaazi-logo-white-2.png" style={{width: 190 + "px", height: 40 + "px"}} />
        </div>
        <div className="position-relative my-3">
          <p style={{fontSize:20 + "px"}}>Venue </p>
        </div>
        <div className="position-relative">
          <img src="images/PB_Live_Website.png" style={{width: 190 + "px", height: 40 + "px"}} />
        </div>
      </div>
    </div>
  </section>

  
        </>
    );
};

export default sectionOne;