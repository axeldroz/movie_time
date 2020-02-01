/**
 * written by Axel Drozdzynski on December 6th
 */

import React, { Component } from 'react';

import URL_BASE from '../redux/actions/types';

import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
    Text,
    Button,
    TextInput,
    Platform,
    TouchableHighlight
} from 'react-native';

import ImagePicker from 'react-native-image-picker'

import PropTypes from 'prop-types';

const Colors = {
    brandText: '#fff',
    placeHolderText: '#000',
    brandSecondaryText: '#000'
  }

class MTImagePickerButton extends Component {
    static propTypes = {
        containerStyle: PropTypes.style,
        style: PropTypes.style,
        autoFocus: PropTypes.bool,
        textColor: PropTypes.string,
        value: PropTypes.string,
    }

    constructor () {

    }

    render() {
        return(
            <Button title="EDIT PICTURE" onPress={ () =>  { this.editPressed(); } } >
                
            </Button>
        );
    }

    editPressed() {
        const options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            //console.log('Response = ', response);

            if (response.didCancel) {
              console.log('User cancelled photo picker');
            }
            else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            }
            else {
              var source, temp;
              // You can display the image using either:
              //source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
          
              temp = response.data;
          
              //Or:
              if (Platform.OS === 'android') {
                source = {uri: response.uri, isStatic: true};
              } else {
                source = {uri: response.uri.replace('file://', ''), isStatic: true};
              }
          
              this.setState({
                avatarSource: source,
                imgBase64: temp,
              });
            }
        });
    }

}

const styles = StyleSheet.create({
});

export default MTImagePickerButton;