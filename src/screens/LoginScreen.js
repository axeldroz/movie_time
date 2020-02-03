/**
 * Created by Axel Drozdzynski on November 27th
 */

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loginFetch } from '../redux/actions/loginAction';
import { getUserToken, saveUserToken } from '../redux/actions/auth/authActions'
import MTTextInput from '../components/MTTextInput'

class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };

    constructor() {
        super();

        this.state = {
            token: '',
            username: 'YO',
            password: ''
        }
    }

    componentDidMount() {
        //this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = () => {
        console.log("DID MOUNT" + this.props.store["auth"].token);
        this.props.getUserToken().then(() => {
            const tokenSaved = this.props.store["auth"].token;
            console.log("DID MOUNT = " + tokenSaved);
            if (tokenSaved !== null)
                this.props.navigation.navigate('SignedIn');
        })
            .catch(error => {
                console.log("ERROR" + error);
                this.setState({ error })
            })

    };    

    handleChange(event = {}) {
        const name = event.target && event.target.name;
        const value = event.target && event.target.value;
    }

    goTo(screenName) {
        this.props.navigation.navigate(screenName);
    }

    loadLogin(username, password) {
        console.log(( "username=" + username + ", password=" + password ) );
        username = username.toLowerCase();
        this.props.loginFetch(username, password).then(() => {
            var token = token = this.props.store["login"]["token"]; 
            if (token !== '' && token != 'ERROR') {
                this.props.saveUserToken(token).then(() => {
                    this.props.getUserToken().then(() => {
                        const tokenSaved = this.props.store["auth"].token;
                        this.props.navigation.navigate('SignedIn');
                    })
                })
            } else {
                console.log("not connected");
            }
        })
    }

    render() {
        const token = this.props.store["login"]["token"];
        const msg = this.props.store["login"]["message"];
        const err = this.props.store["login"];

        return (
            <View style={styles.container}>
                <View style={styles.logincontainer}>
                    <Text style={styles.title}>Get Started !!</Text>
                    <View style={styles.formcontainer}>
                        <View style={styles.formcontainer}>
                        
                            <MTTextInput placeholder="username"
                                    onChangeText={(text) => this.setState( { username: text } )} />
                            
                            <MTTextInput placeholder="password" 
                                     secureTextEntry={true} 
                                     onChangeText={(text) => this.setState( { password: text } )}/>
                        </View>

                    </View>
                    <View style={styles.buttonscontainer}>                  
                         <View style={styles.buttoncontainer}>
                            <Button title="LOGIN" onPress={() => this.loadLogin(this.state.username, this.state.password)} />
                        </View>
                        <View style={styles.buttoncontainer}>
                            <Button title="REGISTER" onPress={() => this.goTo('Register')} />
                        </View>
                    </View>
                    <View style={styles.outputs}>
                        <Text>OUTPUT : { "login : " + this.state.username + " password : " + this.state.password + '\nToken =' + token}</Text>
                    </View>
 
                </View>
            </View>
        );
    }
}

LoginScreen.propTypes = {
    loginFetch: PropTypes.func.isRequired,
    store: PropTypes.object.isRequired,
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
    },
    logincontainer : {
        marginTop: 120,
        marginLeft: 50,
        marginRight: 50,
    },
    title : {
        marginTop: 20,
        paddingLeft: '25%',
        paddingRight: '25%',
        textAlign: 'center',
        fontSize: 25
    },
    formcontainer: {
        marginTop: 35,
    },
    textinputcontainer: {
        marginLeft: 0,
        marginRight: 0,
        marginTop: 15,
        borderWidth: 1,
        borderRadius: 5,
        //backgroundColor: 'green',
        fontSize: 30,
        paddingBottom: 10,
    },
    textinputplaceholder: {
        color: 'white'
    },
    buttoncontainer : {
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: 'white'
    },
    outputs: {
        marginTop: 40
    }
});

const mapStateToProps = state => {
    return {
      store: state,
    };
  };

export default connect(mapStateToProps, {loginFetch, getUserToken, saveUserToken})(LoginScreen);