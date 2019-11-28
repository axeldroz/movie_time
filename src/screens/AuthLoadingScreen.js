import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import { connect } from 'react-redux';
//import { MyContext } from '../Provider';
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

    // Fetch the token from storage then navigate to our appropriate place
    /*_bootstrapAsync = async () => {
        console.
        this.props.getUserToken()
            .then(() => {
                console.log("token" + token);
                console.log("DID MOUNT" + this.props.store["auth"].token);
                this.props.getUserToken().then(() => {
                    const tokenSaved = this.props.store["auth"].token;
                    console.log("DID MOUNT = " + tokenSaved);
                    if (tokenSaved !== null)
                    this.props.navigation.navigate( (userToken != null) ? 'SignedIn' : 'SignedOut');
                })
                    .catch(error => {
                        console.log("ERROR" + error);
                        this.setState({ error })
                    })
                // This will switch to the App screen or Auth screen and this loading
                // screen will be unmounted and thrown away.
            })
            .catch(error => {
                this.setState({ error });
            })
    };*/

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