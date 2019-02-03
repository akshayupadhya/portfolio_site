import { FirstScrollHome } from "../components/firstScrollHome";
import "../scss/style.scss";
import "../scss/pages/index.scss";
import { RouteHandler } from "../components/routeHandler";
const Home = ({ url }) => (
  <RouteHandler currentRoute="/" url={url}>
    <div className="home" onScroll={e => console.log(e)}>
      <FirstScrollHome />
    </div>
  </RouteHandler>
);
export default Home;
