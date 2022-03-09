import { FunctionComponent } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

interface IRouterPageProps {}

const RouterPage: FunctionComponent<IRouterPageProps> = () => {
  let element = useRoutes(routes);
  return <>{element}</>;
};

export default RouterPage;
