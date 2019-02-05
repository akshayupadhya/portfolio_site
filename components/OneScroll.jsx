import { createContext, useState, useEffect } from "react";
import "../scss/components/oneScroll.scss";
import gitData from "../data/data.json";
export const GitContext = createContext({
  data: gitData
});
export const OneScroll = ({ className, children }) => {
  const [data, addGitData] = useState(gitData);
  useEffect(async () => {
    console.info(`oneScroll`);
    try {
      const response = await fetch(
        `https://api.github.com/users/akshayupadhya/repos`,
        {
          headers: {
            Accept: "application/json"
          }
        }
      );
      const gData = await response.json();
      // console.table(gData);
      addGitData(gData);
    } catch (e) {
      console.error(`failed to fetch`, e);
    }
  }, []);
  return (
    <div className={`OneScroll ${className ? className : ""}`}>
      <GitContext.Provider value={{ data }}>{children}</GitContext.Provider>
    </div>
  );
};
