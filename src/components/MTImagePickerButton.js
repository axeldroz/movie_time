/**
 * written by Axel Drozdzynski on December 6th
 */

import React, { Component } from 'react';

import {
    StyleSheet,
    Button,
    Platform,
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
              temp = response.data;
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