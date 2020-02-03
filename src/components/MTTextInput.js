/**
 * created by Axel Drozdzynski on November 27th
 */

import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    TextInput,
} from 'react-native';

import PropTypes from 'prop-types';

const Colors = {
    brandText: '#fff',
    placeHolderText: '#000',
    brandSecondaryText: '#000'
  }

class MTTextInput extends Component {
    static propTypes = {
        containerStyle: PropTypes.style,
        style: PropTypes.style,
        autoFocus: PropTypes.bool,
        editbale: PropTypes.bool,
        textColor: PropTypes.string,
        onChangeText: PropTypes.func,
        value: PropTypes.string,
        placeholder: PropTypes.string,
        secureTextEntry: PropTypes,
        onChangeText: PropTypes.func,
        defaultValue: PropTypes.string
      }

  render() {
      return(
        <View style={styles.container}>
        <View style={styles.formcontainer}>  
            <View style={styles.textinputcontainer}>
                <TextInput 
                    style={styles.textinput} 
                    placeholder={ (this.props.placeholder != undefined) ? this.props.placeholder : 'undefined'} 
                    placeholderTextColor = "white"
                    secureTextEntry={this.props.secureTextEntry}
                    onChangeText={this.props.onChangeText}
                    defaultValue={this.props.defaultValue}
                />
            </View>
        </View>
    </View>
      )
  }
}

const styles = StyleSheet.create({
    textinputcontainer: {
        marginLeft: 0,
        marginRight: 0,
        marginTop: 15,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'green',
        fontSize: 30,
        paddingBottom: 10,
        height: 55,
        fontSize: 100,
    },
    textinputplaceholder: {
        color: 'white'
    },
    textinput: {
        fontSize: 20,
        color: 'black',
        paddingLeft: 20,
        paddingTop: 15,
    }
});

export default MTTextInput;