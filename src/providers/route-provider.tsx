import { Action, BrowserHistory, Location } from "history";
import { ReactNode, useLayoutEffect, useState } from "react";

import { Router } from "react-router-dom";

interface CustomRouterProps {
  basename?: string;
  children: ReactNode;
  history: BrowserHistory;
}

interface RouterProviderState {
  action: Action;
  location: Location;
}

const RouterProvider: React.FC<CustomRouterProps> = ({
  history,
  children,
  basename,
}) => {
  const [state, setState] = useState<RouterProviderState>({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);
  return (
    <Router
      basename={basename || ""}
      location={state.location}
      navigationType={state.action}
      navigator={history}>
      {children}
    </Router>
  );
};

export default RouterProvider;
