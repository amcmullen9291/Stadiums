import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Stadiums from './Components/StadiumsList.js';
import SelectedStadium from './Components/SelectedStadium'

function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route path={"/"} exact component={Stadiums}/>
          <Route path={"/"} exact component={SelectedStadiums}/>
          <Redirect to={"/"} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
