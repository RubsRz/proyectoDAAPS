import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Registered = ({navigation}) => {
    return (
        <View>
            <Text>Registered</Text>
            <TouchableOpacity
                onPress= { () => {
                    navigation.navigate('Home')
                } }
            ><Text>ir a HOME</Text></TouchableOpacity>

        </View>
    )
}

export default Registered
