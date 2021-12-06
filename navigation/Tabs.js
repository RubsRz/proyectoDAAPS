import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import About from '../screens/About';
import Home from '../screens/Home';
import SignUp from '../screens/SignUp';
import Registered from '../screens/Registered';


const Stack = createNativeStackNavigator();

const Tabs = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='SignUp' component={SignUp}/>
                <Stack.Screen name='Participants' component={Registered}/>
                <Stack.Screen name='About' component={About}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Tabs
