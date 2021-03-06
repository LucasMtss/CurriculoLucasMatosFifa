import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
} from 'react-router-dom';

interface RouteProps extends ReactDOMRouteProps {
  component: React.ComponentType;
}

export const Route: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return <Component />;
      }}
    />
  );
};
