import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGripHorizontal,
  faGripVertical
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../scss/components/secondScrollHome.scss";
import { GitContext } from "../components/OneScroll";
library.add(faGripHorizontal, faGripVertical);
export const Projects = () => {
  const [counter, updateCounter] = useState(0);
  const classNames = ["oneThird", "oneFourth", "half", "fullWidth"];

  const classToggle = () => updateCounter((counter + 1) % classNames.length);

  return (
    <div className="projects">
      <div className="title">
        <div>Projects</div>
        <FontAwesomeIcon
          icon={counter % 2 === 0 ? faGripHorizontal : faGripVertical}
          onClick={classToggle}
          size="2x"
        />
      </div>
      <div className={`projects ${classNames[counter]}`} />
      <GitContext.Consumer>
        {context => (
          <div>
            {[...(context.data || null)]
              .filter(({ stargazers_count }) => stargazers_count)
              .map(({ name, stargazers_count }, j) => (
                <p key={j}>
                  {name},{stargazers_count}
                </p>
              ))}
          </div>
        )}
      </GitContext.Consumer>
    </div>
  );
};
export default Projects;
