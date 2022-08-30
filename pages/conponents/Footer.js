import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Script from 'next/script'
   
config.autoAddCss = false;


const Footer = () =>{
    return (
        <>
        <footer>
  <div class="display-flex footer1">
    <div class="footer">
      <div class="footer-body">
        <div class="bottom-logo pt-4">
          <a href="">
            <img src="images/bpt_website_logo2.png" alt="" class="img-fluid"/>
          </a>
        </div>
        <div class="row w-100 p-5">
          <div class="col-md-4 col-12 col-sm-12">
            <div class="link">
              <h5 class="links">Links</h5>
            </div>
            <div class="link-menu">
              <p>
                <a href="https://baazipokertour.com/players-guide" className="players-guide">Players Guide</a>
              </p>
            </div>
          </div>
          <div class="col-md-4 col-12 col-sm-12">
            <div class="link">
              <h5 class="links">Presented By</h5>
            </div>
            <div class="link-menu">
              <p>
                <img class="footer-img" src="images/pokerbaazi-logo-white-2.png" alt=""/>
              </p>
            </div>
          </div>
          <div class="col-md-4 col-12 col-sm-12">
            <div class="link">
              <h5 class="links">Follow Us</h5>
            </div>
            <div class="link-menu mt-4">
              <div class="row">
                <div class="col-md-2 col-4 col-sm-4">
                  <a href="https://www.facebook.com/baazipokertour">
                  <span className="social-media"><img src="images/facebook.png" className="social-media-img"/></span>
                  </a>
                </div>
                <div class="col-md-2 col-4 col-sm-4">
                  <a href="https://www.instagram.com/_baazipokertour/">
                  <span className="social-media"><img src="images/instagram.png" className="social-media-img"/></span>
                  </a>
                </div>
                <div class="col-md-2 col-4 col-sm-4">
                  <a href="https://twitter.com/baazipokertour">
                  <span className="social-media"><img src="images/twitter.png" className="social-media-img"/></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
        <Script src="bootstrap/dist/js/bootstrap.bundle.min.js"></Script>
        </>
    );
};

export default Footer;