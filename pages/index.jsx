import { Component } from "react";
import { FirstScrollHome } from "../components/firstScrollHome";
import { SecondScrollHome } from "../components/secondScrollHome";
import { ThirdScrollHome } from "../components/thidScrollHome";
import "../scss/style.scss";
import "../scss/pages/index.scss";
import { RouteHandler } from "../components/routeHandler";
export default class Home extends Component {
  render() {
    console.info(this.props);
    return (
      <RouteHandler currentRoute="/" url={this.props.url}>
        <div className="home" onScroll={e => console.log(e)}>
          <FirstScrollHome />
          {/* <SecondScrollHome/>
        <ThirdScrollHome/>  */}
        </div>
      </RouteHandler>
    );
  }
}
// export default RouteHandler(FirstScrollHome,'/')
