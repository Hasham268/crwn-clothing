//import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import { auth, createUSerProfileDocument } from './firebase/firebase.utils';
import React from'react';
import {connect} from 'react-redux'
import { setCurrentUser } from './redux/user.actions';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async (userAuth) => {
      if (userAuth) {
        const userRef = await createUSerProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            });
        });
      }

      setCurrentUser(userAuth);
  
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div >
        <Header ></Header>
        <Switch>
          <Route exact path = '/' component = {Homepage} ></Route>
          <Route path = '/shop' component ={ShopPage}></Route>
          <Route exact path = '/signin' 
            render = {() => this.props.currentUser 
              ? 
              (<Redirect to = '/'></Redirect>) 
              : 
              (<SignInAndSignUpPage></SignInAndSignUpPage>)}>
          </Route>
        </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
