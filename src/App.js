import React,{Component} from 'react';
import firebase from 'firebase';
import {View,Text} from 'react-native';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component{

    componentWillMount() {
        firebase.initializeApp({
                apiKey: 'AIzaSyB4rzc-bySCx6ECjGWfX7vDUYBWsu1bD_8',
                authDomain: 'loginauth-c52da.firebaseapp.com',
                databaseURL: 'https://loginauth-c52da.firebaseio.com',
                projectId: 'loginauth-c52da',
                storageBucket: 'loginauth-c52da.appspot.com',
                messagingSenderId: '463050275524'
              }
        );
    }

    render() {
        return (
        <View>
            <Header headerText={'Login'} />
            <LoginForm />
        </View>
        );
    }
}

export default App;