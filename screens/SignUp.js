import React from 'react'
import { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Button } from 'react-native'


import { collection, addDoc } from "firebase/firestore";
import db from '../database/firebase'




const SignUp = ({navigation}) => {
    const [state, setState] = useState({
        nombre: "",
        matricula: "",
        correo: "",
        carrera: "",
    });

    const handleChangeText = (name, value) => {
        setState({ ...state, [name]: value })
    }

    const addMiembro = async() => {

        try {
            const docRef = await addDoc(collection(db, "miembros"), {
              first: "Alan",
              middle: "Mathison",
              last: "Turing",
              born: 1912
            });
          
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }


    return (
        <View style={styles.content}>
            <Image
                style={styles.imagen}
                source={require('../img/Registro.png')}
            />

            <Text style={styles.txtInput}>Nombre</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingresa tu nombre completo"
                keyboardType= { 'default' }
                onChangeText= {(value) => handleChangeText('nombre', value)}
            />
            
            <Text style={styles.txtInput}>Matricula</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingresa tu matricula"
                keyboardType= { 'number-pad' }
                onChangeText= {(value) => handleChangeText('matricula', value)}
            />

            <Text style={styles.txtInput}>Correo</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingresa tu correo"
                keyboardType= { 'email-address' }
                onChangeText= {(value) => handleChangeText('correo', value)}
            />

            <Text style={styles.txtInput}>Carrera</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingresa tu nombre completo"
                keyboardType= { 'default' }
                onChangeText= {(value) => handleChangeText('carrera', value)}
            />




            <View style={styles.botones}>
            <TouchableOpacity
                style={styles.boton}
                onPress= { () => {
                    // navigation.navigate('Participants')
                    addMiembro()
                } }
            ><Text style={styles.txtBoton}>Aceptar</Text>
            </TouchableOpacity>

            {/* <Button
                title="Press me"
                onPress={() => addMiembro()}
            /> */}


            <TouchableOpacity
                style={styles.boton}
                onPress= { () => {
                    navigation.navigate('Home')
                } }
            ><Text style={styles.txtBoton}>Cancelar</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    content:{
    },
    txtInput: {
        paddingLeft: 10,
        fontSize: 15,
        fontWeight: '900'
    },  
    input:{
        marginLeft: 8,
        borderWidth: 2,
        borderRadius: 12,
        // borderColor: '#003F9C',
        // borderTopColor:'white',
        borderColor:'white',
        borderBottomColor:'black',
        // padding: 8,
        // margin: 10,
        width: 370,
        // backgroundColor: "#fff"
    },
    imagen:{
        alignSelf: 'center',
        width: 200,
        height: 200,
    },
    botones:{
        display: 'flex',
        flexDirection: 'row',
        padding:10,
    },
    boton:{
        margin:15,
        marginBottom:10,
        backgroundColor: "#007aff",
        paddingHorizontal: 0,
        paddingVertical: 5,
        borderRadius: 12,
        // color: 'green',
        backgroundColor: '#19C1CC',
        width: 150,
        alignItems: 'center',
      },
      txtBoton:{
        fontSize: 22,
        fontWeight: '600',
        color: "#fff",
      }
})
}
