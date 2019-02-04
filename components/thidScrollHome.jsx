import "../scss/components/thirdScrollHome.scss";

export const ThirdScrollHome = () => {
  const me = {
    name: "Akshay Upadhya",
    title: "Full stack JS developer",
    company: "Jigsaw Academy",
    place: "Bangalore",
    languages: ["JavaScript", "HTML", "CSS", "PHP"],
    frameWorks: ["nodeJS", "reactJS", "vueJS", "ExpressJS", "nextJS", "nuxtJS"],
    tools: ["git", "zsh", "tmux", "guake"],
    misc: {
      favroiteFonts: ["IBM Plex Mono", "Fira Code"],
      editors: ["VS Code", "Atom", "VIM"],
      tabSpace: 2,
      OsOfChoice: ["elementary OS", "Ubuntu"],
      education: "B.E, Electronics And Communication, 2013-17",
      others: [
        "Tabs over Spaces",
        "Bengalooru namma ooru",
        "Filter coffee over Chai"
      ]
    }
  };
  const TabChar = (match, offset, string) => (offset > 0 ? `\n->->` : "");
  return (
    <div className="bio">
      <div className="title">About me</div>
      <code>
        <pre>
          {// JSON.stringify(me, null, 1)
          JSON.stringify(
            me,
            function(key, value) {
              if (value instanceof Array) return JSON.stringify(value);
              return value;
            },
            2
          )
            .replace(/"\[/g, "[")
            .replace(/\]"/g, "]")
            .replace(/\\"/g, '"')
            .replace(/""/g, '"')
            // .replace(/\n/g,TabChar)// will fix it some day
            // .replace(/->\s{2}/g)
            .replace(/  /g, "->|")
            .replace(/ /g, "·")}
        </pre>
      </code>
    </div>
  );
};
