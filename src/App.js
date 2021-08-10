import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Stadiums from './Components/Stadiums.js';

function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route path={"/"} exact component={Stadiums}/>
          <Redirect to={"/"} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
