import { useState } from "react";
const routes = ["/", "/projects", "/bio"];

export const RouteHandler = ({ currentRoute, children, url }) => {
  const [tapStart, RecordTap] = useState(undefined);
  const currentRouteIndex = routes.indexOf(currentRoute);
  const changeRoute = index => {
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
          changeRoute(currentRouteIndex + 1);
        // scroll down
        changeRoute(currentRouteIndex - 1);
      }
      case "mouse": {
        if (tapStart === undefined) {
          if (e.deltaY > 0) changeRoute(currentRouteIndex + 1);
          else changeRoute(currentRouteIndex - 1);
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
      onWheel={e => ScrollHandler("mouse", e)}
    >
      {children}
    </div>
  );
};
