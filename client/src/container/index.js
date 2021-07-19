import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route paht="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routing;
