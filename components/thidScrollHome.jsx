import { OneScroll } from "./OneScroll";
import "../scss/components/thirdScrollHome.scss";

export const ThirdScrollHome = () => {
	const me = {
		name: "Akshay Upadhya",
		title: "Full stack JS developer",
		company: "Jigsaw Academy",
		place: "Bangalore",
		languages: ["JavaScript", "HTML", "CSS", "PHP"],
		frameWorks: ["nodeJS", "reactJS", "vueJS", "ExpressJS"],
		tools:["git"],
		misc:{
			favroiteFont:"IBM Plex Mono",
			editors:["VS Code","VIM"],
			tabSpace:2,
			OsOfChoice:["elementary OS","Ubuntu"],
			education:"B.E, Electronics And Communication, 2013-17",
			others:[
				"Tabs over Spaces",
				"Been in bangalore all my life",
				"Filter coffee over Chai"
			]
		}
	};
	return (
		<OneScroll className="thirdScroll">
			<div className="title">About me</div>
			<code>
				<pre>
				{
					// JSON.stringify(me, null, 1)
						JSON.stringify(me, function (k, v) {
							if (v instanceof Array)
								return JSON.stringify(v);
							return v;
						}, 2)
							.replace(/"\[/g, '[')
							.replace(/\]"/g, ']')
							.replace(/\\"/g, '"')
							.replace(/""/g, '"')
				}
				</pre>
			</code>
		</OneScroll>
	);
};
