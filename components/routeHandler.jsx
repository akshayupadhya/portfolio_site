import { withRouter } from "next/router";
import { useState, useEffect } from "react";
import { Transition, config } from "react-spring";
const routes = ["/", "/projects", "/bio"];
export const RouteHandler = withRouter(props => {
  const { children, router } = props;
  const [tapStart, RecordTap] = useState(undefined);
  const currentRouteIndex = routes.indexOf(router.pathname);
  const changeRoute = type => {
    let index = routes.indexOf(router.pathname);
    if (type == "up") index -= 1;
    else index += 1;
    if (index >= 0 && index <= routes.length - 1) {
      router.push(routes[index]);
    }
  };
  let timer = false;
  useEffect(() => {
    // i know this is a freaking hack, will definely find a better way to this, but thats it for now
    setTimeout(() => {
      timer = true;
    }, 500);
  });
  const ScrollHandler = (type, e) => {
    e.preventDefault();
    switch (type) {
      case "tapStart":
        RecordTap(e.touches[0].clientY);
        break;
      case "tapEnd":
        Math.abs(tapStart - e.changedTouches[0].clientY) >= 50 // if it is actually a swipe
          ? tapStart > e.changedTouches[0].clientY
            ? changeRoute("down") // scroll up
            : changeRoute("up") // scroll down
          : undefined;
        break;
      case "mouse":
        if (tapStart === undefined && timer) {
          if (e.nativeEvent.deltaY <= 0) {
            /* scrolling up */
            e.preventDefault();
            changeRoute("up");
          } else {
            /* scrolling down */
            e.preventDefault();
            changeRoute("down");
          }
        }
        break;
    }
  };
  return (
    <div
      className="route-handler"
      onTouchStart={e => ScrollHandler("tapStart", e)}
      onTouchEnd={e => ScrollHandler("tapEnd", e)}
      onWheel={e => ScrollHandler("mouse", e)}
    >
      <Transition
        config={config.slow}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {style => props => (
          <div style={{ ...props, style, height: `100%` }}>{children}</div>
        )}
      </Transition>
    </div>
  );
});
