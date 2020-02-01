
/**
 * Created by Axel Drozdzynski on February 1st 2020
 */

import React, { Component } from 'react';
//import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    Image,
    StyleSheet,
    View,
    Text,
    Dimensions,
    Button
} from 'react-native';

import MTTextInput from '../components/MTTextInput';
import { getUserToken, removeUserToken } from '../redux/actions/auth/authActions'
import { addMovieFetch } from '../redux/actions/movieActions'

let deviceWidth = Dimensions.get('window').width; // used for UI

class AddMovieScreen extends Component {
  static navigationOptions = {
    title: 'Add a movie'
  };

  constructor() {
    super();
    this.state = {
      name: "",
      episode: "",
      season: ""
  }
  }

  componentDidMount() {
    
    //userInfoFetch(this.props.store["auth"].token);
  }

  fetchAddMovie(token, username) {
    const movie = {
      name: this.state.name,
      season: this.state.season,
      episode: this.state.episode,
      type: "TV_SHOW",
      owner_username: username
    };
    console.log("movie:", movie);
    this.props.addMovieFetch(token, movie);
  }

  render() {
    const message = this.props.store['main']['infos'];
    var token = this.props.store["auth"].token;
    const username = this.props.store['main']['username'];
    const created_date = this.props.store['main']['created_date'];
    console.log('message=', message); 
    console.log('token=', token); 

    return (
      <View style={styles.container}>
          <View style={styles.movieInfos}>
            <MTTextInput placeholder="TV Show's Name"
                        onChangeText={(text) => this.setState( { name: text } )}
                        style={styles.textField}
                         />
            
            <MTTextInput placeholder="Season"
                        onChangeText={(text) => this.setState( { season: text } )}
                        style={styles.textField} />
            
            <MTTextInput placeholder="Episode"
                        onChangeText={(text) => this.setState( { episode: text } )}
                        style={styles.textField}
                         />
          </View>
          <View style={styles.saveButtonContainer1}>
            <View style={styles.saveButtonContainer}>
              <Button title="SAVE" onPress={ () => this.fetchAddMovie(token, username) }></Button>
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white',
      marginTop: 140,
      marginLeft: 0,
      marginRight: 0,
  },
  movieInfos: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  saveButtonContainer1 : {
    position: "relative",
    top: 15,
    width: deviceWidth,
    alignItems: "center"
  },
  saveButtonContainer: {
    flexDirection: "row",
    bottom: 0,
    //backgroundColor: "red",
  },
});

const mapStateToProps = state => {
  return {
    store: state,
  };
};

export default connect(mapStateToProps, { getUserToken, addMovieFetch })(AddMovieScreen);