import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

const Home = ({navigation}) => {
    return (
        <View style={styles.content}>
            <Image
                style={styles.imagen}
                source={require('../img/Planeta.png')}
            />
            <Text style={styles.titulo}>Curso de Astronomia</Text>


            <TouchableOpacity 
                style={styles.boton}
                onPress= { () => {
                    navigation.navigate('SignUp')
                } }
            ><Text style={styles.txtBoton}>Registro</Text></TouchableOpacity>

            <TouchableOpacity
                style={styles.boton}
                onPress= { () => {
                    navigation.navigate('Participants')
                } }
            ><Text style={styles.txtBoton}>Consulta</Text></TouchableOpacity>

            <TouchableOpacity
                style={styles.boton}
                onPress= { () => {
                    navigation.navigate('About')
                } }
            ><Text style={styles.txtBoton}>Acerca de</Text></TouchableOpacity>

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    content:{
        alignItems: 'center',

    },
    imagen:{
        width: 250,
        height: 250,
    },
    titulo:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginBottom:60
    },
    boton:{
        marginBottom:25,
        backgroundColor: "#007aff",
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 12,
        // color: 'green',
        backgroundColor: '#19C1CC',
        width: 200,
        alignItems: 'center',
      },
      txtBoton:{
        fontSize: 22,
        fontWeight: '600',
        color: "#fff",
      }
})
