
import React, { Component } from 'react';
//import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import {
    StyleSheet,
    View,
    Text,
    FlatList
} from 'react-native';

import { getUserToken, removeUserToken } from '../redux/actions/auth/authActions'
import { addMovieFetch, getAllMoviesFetch } from '../redux/actions/movieActions'

class FeedScreen extends Component {
  static navigationOptions = {
    title: 'FeedScreen'
  };

  constructor() {
    super();
    this.state = {
      username: ''
    }
  }

  componentDidMount() {
    this.props.getUserToken().then(() => {
      const tokenSaved = this.props.store["auth"].token;
      if (tokenSaved !== null) {
        console.log("OK555");
        this.props.getAllMoviesFetch(tokenSaved);
        this.state.username = this.props.store['main']['username'];
      }
    })
    .catch(error => {
      console.log("ERROR" + error);
      this.setState({ error })
    })
  }

  renderItem = ({ item }) => (
    <View style={styles.item}>
<Text>{item.owner_username} is watching {item.name} Season {item.season} Episode {item.episode}</Text>
    </View>
  );
  render() {
    const { movies } = this.props.store["movie"];
    console.log("movies:", movies);
    return (
      <View>
          <FlatList
          styles={styles.container}
          data={movies}
          renderItem={this.renderItem}
        />
      </View>
    );

  }
}

const mapStateToProps = state => {
  return {
    store: state,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default connect(mapStateToProps, {getAllMoviesFetch, getUserToken} )(FeedScreen);