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
    Button,
    TextInput
} from 'react-native';

//import TextInput from '../components/uikit/TextInput'
import { whileStatement } from '@babel/types';
//import { getUserToken } from '../authActions';

const MTTextInput = ({
    type,
    dark,
    style,
    placeholderTextColor,
    ...restProps
  }) => {
    return (
            <View style={styles.container}>
                <View style={styles.formcontainer}>  
                    <View style={styles.textinputcontainer}>
                        <TextInput placeholder="login" placeholderTextColor = "white"/>
                    </View>
                    <View style={styles.textinputcontainer}>
                        <TextInput placeholder="password" placeholderTextColor = "white" secureTextEntry={true}/>
                    </View>
                </View>
            </View>
        );
    }

const styles = StyleSheet.create({
    textinputcontainer: {
        marginLeft: 0,
        marginRight: 0,
        marginTop: 15,
        borderWidth: 1,
        borderRadius: 5,
        //backgroundColor: 'green',
        fontSize: 30,
        paddingBottom: 10,
        height: 35,
        fontSize: 100,
    },
    textinputplaceholder: {
        color: 'white'
    },
});

export default MTTextInput;