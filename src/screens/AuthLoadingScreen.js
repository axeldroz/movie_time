import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import { connect } from 'react-redux';
import { getUserToken } from '../redux/actions/auth/authActions'



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

class AuthLoadingScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    constructor() {
        super();

    }
    componentDidMount() {
        this._bootstrapAsync();
    }

    _bootstrapAsync = () => {
        console.log("DID MOUNT" + this.props.store["auth"].token);
        this.props.getUserToken().then(() => {
            const tokenSaved = this.props.store["auth"].token;
            console.log("DID MOUNT = " + tokenSaved);
            if (tokenSaved !== null)
                this.props.navigation.navigate('SignedIn');
            else {
                this.props.navigation.navigate('SignedOut');
            }
        })
            .catch(error => {
                console.log("ERROR" + error);
                this.setState({ error })
            })

    };    

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <ActivityIndicator />
                    <StatusBar barStyle="default" />
                </View>
            </View>
        );
    }
};

const mapStateToProps = state => {
    return {
      store: state,
    };
  };

export default connect(mapStateToProps, {getUserToken})(AuthLoadingScreen);