import { View, Text } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Login from '../screens/LoginScreen';
import Welcome from '../screens/WelcomeScreen';
import Signup from '../screens/SignUpScreen';
import useAuth from '../hooks/useAuth';
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    const {user} = useAuth();
    if(user)
    {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home'>
                    <Stack.Screen options={{headerShown:false}} name='Home' component={HomeScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
          )
    }
    else
    {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='welcome'>
                    <Stack.Screen options={{headerShown:false}} name='welcome' component={Welcome}/>
                    <Stack.Screen options={{headerShown:false}} name='Login' component={Login}/>
                    <Stack.Screen options={{headerShown:false}} name='Signup' component={Signup}/>            
                </Stack.Navigator>
            </NavigationContainer>
          )
    }
}

export default AppNavigation