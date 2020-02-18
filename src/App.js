import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import Loginform from './components/Loginform';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component{

    componentDidMount(){
        const firebaseConfig = {
            apiKey: "AIzaSyBy-hhdf2IH9-mGGHqVEhqlDGX8bDDZ4UU",
            authDomain: "manager-f0c73.firebaseapp.com",
            databaseURL: "https://manager-f0c73.firebaseio.com",
            projectId: "manager-f0c73",
            storageBucket: "",
            messagingSenderId: "822165082161",
            appId: "1:822165082161:web:e5b857920935783a"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
    }
    render(){
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
        <Provider store={store} >
            <Router />
        </Provider>
        );
    }
}

export default App;