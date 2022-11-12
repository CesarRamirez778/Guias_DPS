import {Button,Input,Heading,Text,Image,View,Box,VStack,Pressable} from 'native-base'
import React from 'react'
import Colors from "../../Data/Colores"
import { MaterialIcons,FontAwesome5,Ionicons} from '@expo/vector-icons';
import {useEffect,useState} from "react"

function Ciats ({navigation})
{
    const [estado,setEstado] = useState('')
    const [Citas,SetCitas] = useState('')
    
    const handleCitas=()=>
    {
      firebase.auth.createUserWithEmailAndPassword(email,password)
      .then(citas=>{
        const user = userCredentials.user;
        alert('Usuario Registrado')
        navigation.navigate('Perfil')
      })
      .catch(error =>alert(error.message))
    }
    
 


  return (
    <Box flex={1} bg={Colors.backgroundColor} >
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
      <Heading 
        color={Colors.blanco} fontSize="30" fontWeight='bold'   textAlign='center' >HEALTH PLUS
      </Heading>
      <Image alt="logo" size="130" marginRight="auto" marginLeft="auto"
       source ={require("../../Assets/logo.png")}
      />
      <VStack space={5}>
        
        {/*INPUT PARA correos*/}
        <Input
          InputLeftElement= {<MaterialIcons name="email" size={30} color={Colors.underline} /> }
          variant="underline"
          placeholder="correo@gmail.com"
          w="90%"
          fontWeight='bold'
          fontSize="25"
          marginTop="30" 
          pl={2}
          color={Colors.blanco}
          borderBottomColor={Colors.underline}
          borderBottomWidth="2"

          value={email}
          onChangeText={text => setEmail(text)}
        />
         {/*INPUT PARA CONTARASEÑA*/}
         <Input
          InputLeftElement= {<FontAwesome5 name="key" size={30} color={Colors.underline}  /> }
          variant="underline"
          type="password"
          placeholder="••••••••••"
          marginTop="30" 
          pl={5}
          w="90%"
          fontWeight='bold'
          fontSize="25"
          color={Colors.underline}
           borderBottomColor={Colors.underline}
          borderBottomWidth="2"

          value={password}
          onChangeText={text => setPassword(text)}
        />
      </VStack>

      <Button 
        my={30}
        w="40%" 
        rounded={50}
        marginRight="auto" marginLeft="auto"
        fontWeight='bold'
        bg={Colors.secondaryColor}
        
        onPress={handleLogin}
        >
        LOGIN
      </Button>

      <Pressable>
        <Text ml="auto" mr="auto" underline color={Colors.blanco} onPress={handleSignUp} >
         Crear Cuenta 
        </Text>
      </Pressable>
    </Box>

    </Box>
  );
}

export default LoginScreen; 
