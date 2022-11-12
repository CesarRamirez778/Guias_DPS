import {Box,Center,FormControl,Input,ScrollView,Text,VStack,HStack,Button,Image,Spacer } from 'native-base'
import React from 'react'
import Colors from "../../Data/Colores"
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native"

function PagoScreen (){
  const navigation = useNavigation()
  
  return(
    <Box flex={1} safeAreaTop bg={Colors.backgroundColor} py={5}>
      <Box h="full" bg={Colors.secondaryColor} px={5}>
        <ScrollView> 
          <VStack space={6} mt={5}> 
            <HStack alignItems="center" bg={Colors.blanco} px={3} py={1} rounded justifyContent="space-between"borderRadius ="150" mt={8}> 
               <Box > 
                  <FontAwesome name="cc-paypal" size={30} color={Colors.rojo} /> 
                  <Spacer/>
               </Box>
             
               
            </HStack>
            <HStack alignItems="center" bg={Colors.blanco} px={3} py={1} rounded justifyContent="space-between"borderRadius ="150"> 
               <Box > 
                  <FontAwesome5 name="bitcoin" size={30} color={Colors.backgroundColor}  /> 
                <Spacer/>
               </Box>
               
            </HStack>

            <HStack alignItems="center" bg={Colors.blanco} px={3} py={1} rounded justifyContent="space-between" borderRadius ="150"> 
               <Box > 
                 <Fontisto name="visa" size={25} color="blue" />
                <Spacer/>
               </Box>
               <Text color={Colors.negro} fontSize={14} bold> VISA</Text> 
               <FontAwesome name="check-circle" size={24} color={Colors.main} />
            </HStack>

             <HStack alignItems="center" bg={Colors.blanco} px={3} py={1} rounded justifyContent="space-between" borderRadius ="150"> 
               <Box > 
                  <Fontisto name="apple-pay" size={24} color="grey" />
                <Spacer/>
               </Box>
              
            </HStack>
            <Button bg={Colors.backgroundColor} mt={5} onPress={() => navigation.navigate('Carrito')}
            >
              Continuar
            </Button>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
 )
}
export default PagoScreen;
