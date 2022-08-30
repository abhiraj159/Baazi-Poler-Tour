import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Script from 'next/script'
   
config.autoAddCss = false;


const sectionSix = () =>{
    return (
        <>
        <section>
        <div className="margin_top">
        <div className="text-mgs">
        <h2 className="quote-text">If you’re visiting us for the first time, visit our Players Guide Section for a complete overview on our services, facilities and policies.
        </h2>
        <div className="player-btn mt-3">
        <a href=""><button className="btn btn-warning btn-shape">Players Guide</button></a>
        </div>
        </div>
        </div>
        </section>
        <div class="pull-right pull-right d-sm-none d-md-block">
        <a href="#" onclick="topFunction()" id="btnTop" class="badge btn-warning btn-xs btn_warning">
        <i class="fa fa-arrow-up"></i> Top
        </a>
        </div>      
        <Script src="bootstrap/dist/js/bootstrap.bundle.min.js"></Script>
        </>
    );
};

export default sectionSix;