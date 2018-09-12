import React,{Component} from 'react';
import firebase from 'firebase';
import {View,Text} from 'react-native';
import {Header, Button, Spinner} from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component{

    state = { loggedIn: null };

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

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            }else {
                this.setState({loggedIn: false});
            }
        });
    }

    renderContent() {
        switch(this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        LogOut
                    </Button>
                );
            case false:
                return <LoginForm />;
            default: 
                return <Spinner size="large"/>;
        }
    }

    render() {
        return (
        <View>
            <Header headerText={'Login'} />
            {this.renderContent()}
        </View>
        );
    }
}

export default App;