import logo from './logo.svg';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';

function App() {
  return (
    <div >
      <Header></Header>
      <Switch>
        <Route exact path = '/' component = {Homepage} ></Route>
        <Route path = '/shop' component ={ShopPage}></Route>
        <Route path = '/signin' component = {SignInAndSignUpPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
