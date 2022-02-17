import "./App.css";
import DayInfo from "./components/DayInfo";
import WeatherInfo from "./components/WeatherInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={WeatherInfo} />
          <Route path="/dayinfo" component={DayInfo} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
