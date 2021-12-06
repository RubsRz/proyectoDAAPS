import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

const About = ({navigation}) => {
    return (
        <View style={styles.content}>
            <Image
                style={styles.imagen}
                source={require('../img/Astronauta.png')}
            />
            <Text style={styles.titulo}>Integrantes:</Text>
            <View style={styles.integrantes}>
                <Text style={{fontSize:15, color:'black'}}>Herrera Anda Álvaro Emmanuel</Text>   
                <Text style={{fontSize:15, color:'black'}}>Matricula: 200138{"\n"}</Text>
                <Text style={{fontSize:15, color:'black'}}>Muñiz Gutierrez Israel de Jesús</Text>   
                <Text style={{fontSize:15, color:'black'}}>Matricula: 200140{"\n"}</Text>   
                <Text style={{fontSize:15, color:'black'}}>Ramírez Prieto Oscar</Text>   
                <Text style={{fontSize:15, color:'black'}}>Matricula: 200147{"\n"}</Text>
                <Text style={{fontSize:15, color:'black'}}>Rodríguez Pérez Rubén Alejandro</Text>   
                <Text style={{fontSize:15, color:'black'}}>Matricula: 200083{"\n"}</Text>
            </View>
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    content:{
    //por ahora nada
    },
    imagen:{
        alignSelf: 'center',
        width:300,
        height:300
    },
    titulo:{
        paddingLeft:15,
        fontSize:20,
        fontWeight: 'bold',
        color: 'black'
    },
    integrantes:{
        paddingLeft:15,
    }

})
