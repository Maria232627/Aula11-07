import React, { useState } from 'react';
import {KeyboardAvoidingView, View, Text, TextInput, Alert} from 'react-native';
import {MaterialIcons, Entypo} from "@expo/vector-icons";
import {styles} from './style';
import { styleContainer } from "../../styles/globalstyle";
import {ButtonInterface} from '../../components/ButtonInterface';
import {LoginTypes} from '../../navigation/login.navigation';

export interface IAuthenticate {
    email?: string;
    password?: string;
}
export function Login({navigation}: LoginTypes) {

    const [data, setData] = useState<IAuthenticate>();
    async function handleSignIn(){
        if(data?.email && data.password) {
            console.log(data)
        } else{
            Alert.alert("Preencha todos os campos!!!")
        }
    }
    function handleRegister(){
        navigation.navigate("Register")
    }

    function handleChange(item: IAuthenticate){
        setData({...data, ...item});
    }
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Login</Text>
                <View style={styles.formRow}>
                    <MaterialIcons name="email" style={styles.icon}/>
                    <TextInput
                        placeholderTextColor={colors.offWite}
                        style={styles.input}
                        placeholder="Email"
                        keyboardType="email-adress"
                        autoCapitalize='none'
                        onChangeText={(i) => handleChange({email: i})}
                    />
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}




/* dando errado pq ta incompleto */