import { useState } from "react";
const routes = ["/", "/projects", "/bio"];
export const RouteHandler = ({ currentRoute, children, url }) => {
  const [tapStart, RecordTap] = useState(undefined);
  const currentRouteIndex = routes.indexOf(currentRoute);
  const changeRoute = type => {
    let index = currentRouteIndex;
    switch (type) {
      case "up":
        index += 1;
        break;
      case "down":
        index -= 1;
        break;
    }
    if (index >= 0 && index <= routes.length - 1) {
      url.push(routes[index]);
    }
  };
  const ScrollHandler = (type, e) => {
    e.preventDefault();
    switch (type) {
      case "tapStart": {
        //coz i like brackets
        RecordTap(e.touches[0].clientY);
        console.log(e.touches[0].clientY);
        break;
      }
      case "tapEnd": {
        if (tapStart > e.changedTouches[0].clientY)
          // scroll up
          changeRoute("up");
        // scroll down
        else changeRoute("down");
      }
      case "mouse": {
        if (tapStart === undefined) {
          if (e.deltaY > 0) changeRoute("up");
          else changeRoute("down");
        }
        break;
      }
    }
  };
  return (
    <div
      className="routeHandler"
      onTouchStart={e => ScrollHandler("tapStart", e)}
      onTouchEnd={e => ScrollHandler("tapEnd", e)}
      onWheel={e => ScrollHandler("mouse", e)}>
      {children}
    </div>
  );
};
