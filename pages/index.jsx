import "../scss/components/firstScrollHome.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithubSquare,
  faTwitterSquare,
  faLinkedin
} from "@fortawesome/fontawesome-free-brands";
import { IconBtn } from "../components/iconBtn";
library.add(faTwitterSquare, faLinkedin, faGithubSquare);
const socialIcons = [
  {
    icon: faGithubSquare,
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
export const Home = () => {
  return (
    <div className="firstScroll">
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
        {socialIcons.map(({ icon, url }, index) => (
          <IconBtn key={index} icon={icon} url={url} />
        ))}
      </div>
    </div>
  );
};
export default Home;
