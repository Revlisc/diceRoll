import React, { Fragment, Component } from 'react';
import './App.css';
import RollDice from './Components/RollDice';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import SignInPage from './Pages/SignInPage';
import Header from './Components/Header';

class App extends Component {
  
  state = {
    currentUser: null,
    userInfo: null
  }
  
  setCurrentUser = ({username, email, password}) => {
    //username email and password
    console.log(username);
    this.setState({currentUser: username, userInfo: {username, email, password}})
  }

  render() {
      const { currentUser, userInfo } = this.state;
      return (
        <Fragment>
            <Header />
            <Switch>
              <Route exact path='/' render={() => <HomePage currentUser={currentUser} userInfo={userInfo} />} />
              <Route exact path='/login'
                render={() => currentUser ? (
                  <Redirect to='/' />
                ) : (
                  <SignInPage setCurrentUser={this.setCurrentUser} />
                )}
              />
            </Switch>
            
            <div className="App">
              <RollDice className='rollDice'/>
            </div>
        </Fragment>
        
      );
  };
}


export default App;
