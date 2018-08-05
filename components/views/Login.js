import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Image, TouchableHighlight, StatusBar } from 'react-native'

import LoginController from "../controllers/Login.controller"

import Icon from 'react-native-vector-icons/FontAwesome'

export default class Login extends Component {
    constructor(){
        super()

        this.state= {
            _emailInput: '',
            _passwordInput: ''
        }
    }

    handleLogin = () => {
        var controller = new LoginController()

        controller.doLogin({
            email:    this.state._emailInput,
            password: this.state._passwordInput
        }).then(result => {
			if (result.code === 200) {
				this.props.navigation.navigate('Home', {user: result.user})
			} else {
				alert("Datos incorrectos")
			}
        })
    }

    render() {
        return (
            <View style={styles.mainContainer}>
            <StatusBar hidden/>
                <View style={[styles.loginHeader, styles.shadow]}>
                    <Image source={require('../../src/images/color_logo_transparent.png')} style={{width: '70%', height: '70%'}}/>
                </View>
                <View style={styles.loginContentContainer}>
                    <View style={styles.loginInputsContainer}>
                        <Text>INICIA SESIÓN</Text>

                        <TextInput
                        style={[styles.inputs, styles.shadow]}
                        placeholder="Email"
                        textContentType="username"
                        onChangeText={(text) => this.setState({_emailInput: text})}
                        >
                        </TextInput>

                        <TextInput
                        style={[styles.inputs, styles.shadow]}
                        placeholder="Password"
                        textContentType="password"
                        onChangeText={(text) => this.setState({_passwordInput: text})}
                        >

                        </TextInput>
                        <View style={styles.allBtnsContainer}>
                            <TouchableHighlight 
                            underlayColor='#BA8B49' 
                            style= {styles.loginBtn}
                            onPress={this.handleLogin}
                            >
                                <Icon name="play" size={30} color="#f2f2f2"/>
                            </TouchableHighlight>
                            <View style= {styles.socialBtnsContainer}>
                                <TouchableHighlight style= {[styles.socialBtn,{backgroundColor:'#3b579d'}]}>
                                    <Icon name="facebook" size={20} color="#f2f2f2"/>
                                </TouchableHighlight>
                                <TouchableHighlight style= {[styles.socialBtn,{backgroundColor:'#1da0f1'}]}>
                                    <Icon name="twitter" size={20} color="#f2f2f2"/>
                                </TouchableHighlight>
                                <TouchableHighlight style= {[styles.socialBtn,{backgroundColor:'#b64138'}]}>
                                    <Icon name="google-plus" size={20} color="#f2f2f2"/>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableHighlight 
                underlayColor='#BA8B49' 
                style= {[styles.createAccBtn, styles.shadow]}
                >
                    <Text style={{color:'#f2f2f2'}}>CREAR UNA CUENTA</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    shadow: {
        shadowOpacity: 0.25,
        shadowRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 }
    },
    loginHeader: {
        flex: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333333',
    },
    loginContentContainer: {
        flex: 70,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    loginInputsContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'stretch',
        margin: 20,
        marginTop: 30
    },
    inputs: {
        alignSelf: 'stretch',
        textAlign: 'center',
        height: 60,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: '#f2f2f2'
    },
    allBtnsContainer: {
        flex: 1,
        width: 170,
        flexDirection: 'column'
    },
    socialBtnsContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    loginBtn: {
        width: 170,
        height: 50,
        backgroundColor: '#333333',
        borderRadius:10,
        marginTop: 10,
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    socialBtn: {
        width: 50,
        height: 50,
        borderRadius: 10,
        margin:5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    createAccBtn: {
        margin: 20,
        marginBottom: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: '#333333',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
})