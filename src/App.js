//import logo from './logo.svg';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import { auth, createUSerProfileDocument } from './firebase/firebase.utils';
import React from'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async (userAuth) => {
      if (userAuth) {
        const userRef = await createUSerProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          }, console.log(this.state));
        });
        
      }

      this.setState({
        currentUser: userAuth
      });
  
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div >
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path = '/' component = {Homepage} ></Route>
          <Route path = '/shop' component ={ShopPage}></Route>
          <Route path = '/signin' component = {SignInAndSignUpPage}></Route>
        </Switch>
      </div>
    );
  }
  
}

export default App;
