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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
			<IconBtn
				icon={faGithubSquare}
				color="#6DB65B"
				size="5"
				url="https://github.com/akshayupadhya"
				target="blank"
			/>
			<IconBtn
				icon={faTwitterSquare}
				className="twitter"
				color="#6DB65B"
				size="5"
				url="https://twitter.com/kcification"
				target="blank"
			/>
			<IconBtn
				icon={faLinkedin}
				color="#6DB65B"
				size="5"
				url="https://www.linkedin.com/in/akshay-upadhya-68548156/"
				target="blank"
			/>
		</div>
	</OneScroll>
);
