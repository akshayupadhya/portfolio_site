import { ThirdScrollHome } from "../components/thidScrollHome";
import { RouteHandler } from "../components/routeHandler";
export default function Bio({ url }) {
  return (
    <RouteHandler url={url} currentRoute="/bio">
      <ThirdScrollHome />
    </RouteHandler>
  );
}
