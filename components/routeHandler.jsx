import { useState } from "react";
const routes = ["/", "/projects", "/bio"];

export const RouteHandler = ({ currentRoute, children, url }) => {
  const [tapStart, RecordTap] = useState(0);
  const currentRouteIndex = routes.indexOf(currentRoute);
  const changeRoute = index => {
    // console.log(index, "index");
    if (index >= 0 && index <= routes.length - 1) {
      console.log(`counted index`, index);
      url.push(routes[index]);
    }
  };
  const ScrollHandler = (type, e) => {
    switch (type) {
      case "tapStart": {
        //coz i like brackets
        RecordTap(e.touches[0].clientY);
        console.log(e.touches[0].clientY);
        break;
      }
      case "tapEnd": {
        if (tapStart > e.changedTouches[0].clientY) {
          console.log(`scroll up`);
          changeRoute(currentRouteIndex + 1);
        } else {
          console.log(`scroll down`);
          changeRoute(currentRouteIndex - 1);
        }
      }
      case "mouse": {
        console.log(e);
        if (e > 0) changeRoute(currentRouteIndex + 1);
        else changeRoute(currentRouteIndex - 1);
        break;
      }
    }
  };
  return (
    <div
      className="routeHandler"
      onTouchStart={e => ScrollHandler("tapStart", e)}
      onTouchEnd={e => ScrollHandler("tapEnd", e)}
      onWheel={e => ScrollHandler("mouse", e.deltaY)}
      // onMouseDown={() => changeRoute(currentRouteIndex + 1)}
    >
      {children}
    </div>
  );
};
