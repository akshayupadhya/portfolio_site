import { OneScroll } from "./OneScroll";
import "../scss/components/firstScrollHome.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faGithubSquare,
  faTwitter,
  faTwitterSquare,
  faLinkedinIn,
  faLinkedin
} from "@fortawesome/fontawesome-free-brands";
import { IconBtn } from "../components/iconBtn";
library.add(
  faEnvelope,
  faKey,
  faTwitter,
  faGithub,
  faLinkedinIn,
  faTwitterSquare,
  faLinkedin,
  faGithubSquare
);
const socialIcons = [
  {
    icon: faGithub,
    url: "https://github.com/akshayupadhya"
  },
  {
    icon: faTwitterSquare,
    url: "https://twitter.com/kcification"
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/akshay-upadhya-68548156/"
  }
];
const socialIconColor = "#fff";
export const FirstScrollHome = () => (
  <OneScroll className="firstScroll">
    <div className="intro">
      <div className="circle" />
      <p className="name">Akshay Upadhya</p>
      <div className="job">
        <p className="designation">FrontEnd developer ,</p>
        <p className="company">Jigsaw Academy</p>
      </div>
      <p className="place">Bangalore</p>
    </div>
    <div className="social-media">
      {socialIcons.map(({ icon, url }) => (
        <IconBtn icon={icon} url={url} color={`${socialIconColor}`} />
      ))}
    </div>
  </OneScroll>
);
