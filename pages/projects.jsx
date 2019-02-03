import { SecondScrollHome } from "../components/secondScrollHome";
import { RouteHandler } from "../components/routeHandler";
export default function({ url }) {
  return (
    <RouteHandler url={url} currentRoute="/projects">
      <SecondScrollHome />
    </RouteHandler>
  );
}
