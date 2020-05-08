import React from 'react'
import {View,StyleSheet } from 'react-native'
import AuthForm from '../component/AuthForm'
import {signUp} from '../actions/authAction';

const SignupScreen = () => {
    return (
       <View style={styles.container}>
           <AuthForm
            title="Register" 
            buttonText="Sign Up"
            routeName="SignIn"
            text="If you are register,Plese login"
            onSubmit={signUp}
           />
       </View>
    )
}

export default SignupScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        borderWidth: 3,
        borderColor:"red",
        justifyContent:"center"
    }
})
