import { OneScroll } from "./OneScroll";
import "../scss/components/firstScrollHome.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedinIn,
  faGithub
} from "@fortawesome/fontawesome-free-brands";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faEnvelope, faKey, faTwitter, faGithub, faLinkedinIn);
export const FirstScrollHome = () => (
  <OneScroll className="firstScroll">
    <div className="intro">
      <div className="circle" />
      <p className="name">Akshay Upadhya</p>
      <p className="job">FrontEnd developer,Jigsaw Academy</p>
      <p className="place">Bangalore</p>
    </div>
    <div className="social-media">
      <FontAwesomeIcon icon={faGithub} color="#6DB65B" size="5x" />
      <FontAwesomeIcon icon={faTwitter} color="#6DB65B" size="5x" />
      <FontAwesomeIcon icon={faLinkedinIn} color="#6DB65B" size="5x" />
    </div>
  </OneScroll>
);
