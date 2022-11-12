import { Flex,Pressable, ScrollView, Text ,Image,Button} from 'native-base';
import React from 'react';
import MenuData from '../../Data/MenuData';
import Colors from "../../Data/Colores"
import {useNavigation} from "@react-navigation/native"

import firebase from "../../Data/DataBase/firebase"
import 'firebase/auth';

function Menu() {

  const navigation = useNavigation()

  const handleSingOut =()=>{

    firebase.auth.signOut()
    .then(()=>
    {
      navigation.replace("Login")
    })
    .catch(error=> alert(error.message))
  }

  return (
    <ScrollView flex={1}>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={3} >
        
        <Button
            onPress={() => navigation.navigate('Productos')}
            _pressed={{background:Colors.blanco}}
            w={'48%'}
            bg={Colors.blanco}
            rounded="md" 
            shadow={2} 
            pt={0} 
            my={3} 
            pb={2}
            overflow="hidden">
            <Image source={require('../../Assets/ImagenesMenu/productos.png')}
              w={'100%'} h={40} 
              resizeMode="contain" 
              marginRight="auto" marginLeft="auto"/>
            <Text fontWeight='bold' fontSize="auto" marginRight="auto" marginLeft="auto" >
             PRODUCTOS
            </Text>
        </Button>

        <Button
            onPress={() => navigation.navigate('Descuento')}
            w={'48%'}
            bg={Colors.blanco}
            rounded="md" 
            shadow={2} 
            pt={0} 
            my={3} 
            pb={2}
            overflow="hidden">
            <Image source={require('../../Assets/ImagenesMenu/promociones.png')}
              w={'85%'} h={40}
              resizeMode="contain" 
              marginRight="auto" marginLeft="auto"/>
            <Text fontWeight='bold' fontSize="auto" marginRight="auto" marginLeft="auto" >
             PROMOCIONES
            </Text>
        </Button>
        <Button
            onPress={() => navigation.navigate('PedidoVacio')}
            w={'48%'}
            bg={Colors.blanco}
            rounded="md" 
            shadow={2} 
            pt={0} 
            my={3} 
            pb={2}
            overflow="hidden">
            <Image source={require('../../Assets/ImagenesMenu/pedidos.png')}
              w={'100%'} h={40}
              resizeMode="contain" 
              marginRight="auto" marginLeft="auto"/>
            <Text fontWeight='bold' fontSize="auto" marginRight="auto" marginLeft="auto" >
             ㅤPEDIDOSㅤ
            </Text>
        </Button>
        <Button
            onPress={() => navigation.navigate('Carrito')}
            w={'48%'}
            bg={Colors.blanco}
            rounded="md" 
            shadow={2} 
            pt={0} 
            my={3} 
            pb={2}
            overflow="hidden">
            <Image source={require('../../Assets/ImagenesMenu/carrito.png')}
              w="80%" h={40} 
              resizeMode="contain" 
              marginRight="auto" marginLeft="auto"/>
            <Text fontWeight='bold' fontSize="auto" marginRight="auto" marginLeft="auto" >
            ㅤCARRITOㅤ
            </Text>
        </Button>
        <Button
            onPress={() => navigation.navigate('Perfil')}
            w={'48%'}
            bg={Colors.blanco}
            rounded="md" 
            shadow={2} 
            pt={0} 
            my={3} 
            pb={2}
            overflow="hidden">
            <Image source={require('../../Assets/ImagenesMenu/perfil.png')}
              w="80%" h={40} 
              resizeMode="contain" 
              marginRight="auto" marginLeft="auto"/>
            <Text fontWeight='bold' fontSize="auto" marginRight="auto" marginLeft="auto" >
              ㅤPERFILㅤ
            </Text>
        </Button>
        <Button
            onPress={handleSingOut}
            w={'48%'}
            bg={Colors.blanco}
            rounded="md" 
            shadow={2} 
            pt={0} 
            my={3} 
            pb={2}
            overflow="hidden">
            <Image source={require('../../Assets/ImagenesMenu/salir.png')}
              w="80%" h={40} 
              resizeMode="center" 
              marginRight="auto" marginLeft="auto"
            />
            <Text fontWeight='bold' fontSize="auto" marginRight="auto" marginLeft="auto" >
              ㅤSALIRㅤ
            </Text>
        </Button>
        
      </Flex>
    </ScrollView>
  );
}

export default Menu;
