import logo from './logo.svg';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component.jsx';

const HatsPage = () => (
  <div>
    <h1>
    Hats Page
    </h1>
  </div>
);

function App() {
  return (
    <div >
      <Switch>
        <Route exact path = '/' component = {Homepage} ></Route>
        <Route path = '/hats' component ={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
