import "../scss/components/thirdScrollHome.scss";
import me from "../data/bio.json";
const TabChar = (match, offset, string) => (offset > 0 ? `\n->->` : "");
export const Bio = () => {
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
export default Bio;
