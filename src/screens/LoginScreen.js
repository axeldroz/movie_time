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
                <Text style={styles.title}>Hello World !!</Text>
                <TextInput></TextInput>
                <Button title="NEXT" onPress={() => navigate('Next', {name: 'Jane'})} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    title : {
        top: '20%',
        paddingLeft: '25%',
        paddingRight: '25%',
        textAlign: 'center',
        fontSize: 25
    }
});

const mapStateToProps = state => ({
    //token: state.token,
});


const mapDispatchToProps = dispatch => ({
    //getUserToken: () => dispatch(getUserToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);