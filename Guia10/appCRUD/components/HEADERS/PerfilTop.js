import {HStack,Center, Text} from "native-base";
import React from "react";
import Colors from "../../Data/Colores"
import { FontAwesome } from '@expo/vector-icons';


function PerfilTop(){
  return (

    <HStack 
      space={3} 
      w="full" px={6} 
      bg={Colors.secondaryColor} py={4} 
      alignItems="center"
      safeAreaTop
      >
        <Text 
          color={Colors.blanco} 
          fontSize="20"
          fontWeight="bold" 
          ml="auto" 
          mr="auto"
          mt="5"
          > 
          AGREGAR INFORMACION{"\n"}
          
        </Text>
     </HStack >
  )


}

export default PerfilTop;

