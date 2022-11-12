import {Button,Input,Heading,Text,Image,View,Box,VStack} from 'native-base'
import React from 'react'
import Colors from "../../Data/Colores"
import { MaterialIcons,FontAwesome5,FontAwesome,Entypo  } from '@expo/vector-icons';
import 'firebase/firestore';
import firebase from "../../Data/DataBase/firebase"
import {useState} from "react"
import {useNavigation} from "@react-navigation/native"

function RegisterScreen (){
    
    const [nombre, setNombre]=useState('')
    const [apellido, setApellido]=useState('')
    const [dui, setDui]=useState('')
    const [telefono, setTelefono]=useState('')
    
    const navigation = useNavigation()

    function RegistrarUser()
  {
    try 
    {
          firebase.db.collection("Usuarios").add({
          nombre:nombre,
          apellido:apellido,
          dui:dui,
          telefono:dui,
         
        })
        alert('Registrado Correctamente')
        navigation.navigate('Bottom')
    }
      catch(e) {
        console.log(e)
      }
      finally
      {
        setNombre('')
        setApellido('')
        setDui('')
        setTelefono('')
    }
  }

  
return (
    <Box flex={1} bg={Colors.blanco} >
      <Image flex={1} alt="logo" 
       resiseMode="cover"
       size="lg"
       w="full"
       />
      {/*Mantiene los items del login en el centro*/}
      <Box 
        w="full"
        h="full" 
        position="absolute" 
        top ="-150"
        px="30" 
        justifyContent="center"
        marginTop="40"
        
      >
      <Image alt="logo" size="lg" marginRight="auto" marginLeft="auto" 
       source ={require("../../Assets/logo.png")}
      />
      <VStack space={5}>
        
        {/*INPUT PARA NOMBRE USER*/}
        <Input
          InputLeftElement= {<FontAwesome5 name="user-alt"size={30} color={Colors.backgroundColor} /> }
          variant="underline"
          placeholder="Nombre"
          w="90%"
          fontWeight='bold'
          fontSize="20"
          marginTop="5"
          pl={3}
          color={Colors.backgroundColor}
          borderBottomColor={Colors.backgroundColor}
          borderBottomWidth="2"
          
          value={nombre}
          onChangeText={text=> setNombre(text)}
        />
        {/*INPUT PARA apellido USER*/}
        <Input
          InputLeftElement= {<MaterialIcons name="drive-file-rename-outline"size={30} color={Colors.backgroundColor} /> }
          variant="underline"
          placeholder="Apellido"
          w="90%"
          fontWeight='bold'
          fontSize="20"
          pl={3}
          color={Colors.backgroundColor}
          borderBottomColor={Colors.backgroundColor}
          borderBottomWidth="2"
          
          value={apellido}
          onChangeText={text=> setApellido(text)}
        />
        {/*INPUT PARA DUI USER*/}
         <Input
          InputLeftElement= {<FontAwesome name="vcard" size={30} color={Colors.backgroundColor} /> }
          variant="underline"
          placeholder="Dui"
          w="90%"
          fontWeight='bold'
          fontSize="20"
          pl={3}
          color={Colors.backgroundColor}
          borderBottomColor={Colors.backgroundColor}
          borderBottomWidth="2"

          value={dui}
          onChangeText={text=> setDui(text)}
        />
        {/*INPUT PARA Telefono*/}
        <Input
          InputLeftElement= {<Entypo name="phone" size={30} color={Colors.backgroundColor} /> }
          variant="underline"
          placeholder="Telefono"
          w="90%"
          fontWeight='bold'
          fontSize="20"
          pl={3}
          color={Colors.backgroundColor}
          borderBottomColor={Colors.backgroundColor}
          borderBottomWidth="2"
            
          value={telefono}
          onChangeText={text=> setTelefono(text)}
          
        />
      </VStack>

      <Button 
        my={30}
        w="50%" 
        rounded={50}
        marginTop="10"
        marginRight="auto" marginLeft="auto"
        fontWeight='bold'
          bg={Colors.secondaryColor}
          onPress={()=>RegistrarUser()}
        >
        REGISTRAR
      </Button>
      
    </Box>

    </Box>
  );
}

export default RegisterScreen; 
