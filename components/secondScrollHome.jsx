import {Component} from 'react'
import { OneScroll } from "./OneScroll";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGripHorizontal,faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../scss/components/secondScrollHome.scss";
library.add(faGripHorizontal,faGripVertical);
export class SecondScrollHome extends Component {
	constructor(){
		super()
		this.state={
			counter:0
		}
		console.log(`re built`);
	}
	classNames = ["oneThird", "oneFourth", "half", "fullWidth"];

	classToggle=()=>{
		const currentState = (this.state.counter + 1) % this.classNames.length
		this.setState({
			counter:currentState
		})
	}
	render(){
	return <OneScroll className="SecondScroll">
      <div className="title">
        <div>Projects</div>
			<FontAwesomeIcon icon={this.state.counter % 2 === 0 ? faGripHorizontal : faGripVertical} onClick={this.classToggle} size="2x" />
      </div>
      <div className={`projects ${this.classNames[this.state.counter]}`}>
        {[...Array(8).keys()].map(i => <div className="project" key={i}>
            {i}
          </div>)}
      </div>
    </OneScroll>;
	}
};
