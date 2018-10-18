import { OneScroll } from "./OneScroll";
import "../scss/components/firstScrollHome.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,faGithubSquare,
  faTwitter,faTwitterSquare,
  faLinkedinIn,faLinkedin
} from "@fortawesome/fontawesome-free-brands";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faEnvelope, faKey, faTwitter, faGithub, faLinkedinIn,faTwitterSquare,faLinkedin,faGithubSquare);
export const FirstScrollHome = () => (
  <OneScroll className="firstScroll">
    <div className="intro">
      <div className="circle" />
      <p className="name">Akshay Upadhya</p>
      <p className="job">FrontEnd developer,Jigsaw Academy</p>
      <p className="place">Bangalore</p>
    </div>
    <div className="social-media">
      <FontAwesomeIcon icon={faGithubSquare} color="#6DB65B" size="5x" className='twitter' />
      <FontAwesomeIcon icon={faTwitterSquare} className ='twitter' color="#6DB65B" size="5x" />
      <FontAwesomeIcon icon={faLinkedin} color="#6DB65B" size="5x" className='twitter'/>
    </div>
  </OneScroll>
);
