import React, {useEffect} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import { collection, getDocs } from 'firebase/firestore';
// import db from '../database/firebase'
// import { collection, getDocs } from "firebase/firestore";


const Registered = ({navigation}) => {

    const leerMiembros=  () => {
        // const querySnapshot = await getDocs(collection(db, "miembros"));
        // querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        // });
    }

    return (
        <View>
            <Text>Registered</Text>
            <TouchableOpacity
                onPress= { () => {
                    // navigation.navigate('Home')
                    leerMiembros();
                } }
            ><Text>ir a HOME</Text></TouchableOpacity>

        </View>
    )
}

export default Registered
