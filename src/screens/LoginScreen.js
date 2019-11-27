/**
 * written by Axel Drozdzynski on November 27th
 */

import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import { connect } from 'react-redux';

import TextInput from '../components/uikit/TextInput'
import { whileStatement } from '@babel/types';
//import { getUserToken } from '../authActions';

class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };

    constructor() {
        super();
    }

    componentDidMount() {
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <View style={styles.logincontainer}>
                    <Text style={styles.title}>Get Started !!</Text>
                    <View style={styles.textinputcontainer}>
                        <TextInput />
                    </View>
                    <View style={styles.textinputcontainer}>
                        <TextInput />
                    </View>
                    <View style={styles.buttoncontainer}>
                        <Button title="LOGIN" onPress={() => navigate('Main', {name: 'Jane'})} />
                    </View>
                    <View style={styles.buttoncontainer}>
                        <Button title="REGISTER" onPress={() => navigate('Next', {name: 'Jane'})} />
                    </View>
                </View>
            </View>
        );
    }
}

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
    textinputcontainer: {
        marginLeft: 0,
        marginRight: 0,
        marginTop: 15,
        //backgroundColor: 'green',
        fontSize: 30,
        paddingBottom: 10
    },
    buttoncontainer : {
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: 'white'
    }
});

const mapStateToProps = state => ({
    //token: state.token,
});


const mapDispatchToProps = dispatch => ({
    //getUserToken: () => dispatch(getUserToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);