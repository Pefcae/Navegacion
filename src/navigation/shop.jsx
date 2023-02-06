import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { THEME } from '../constants/theme';
import { Categories, ProductDetail, Products } from '../screens/index';
import { View, Text, TouchableOpacity } from 'react-native';


//import { View, Text, TouchableOpacity } from 'react-native';


const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator  
    initialRouteName="Categories"
    screenOptions={{
      headerTintColor: THEME.colors.primary, // color del header
      navigationBarColor: THEME.colors.secondary, // color a la barra inferior solo android
      headerTitleStyle: {
        fontSize:18,
        color:THEME.colors.title,
      }
        }}
    >
      <Stack.Screen 
        name="Categories" 
        component={Categories} 
        options={{
        title:'Categorias'
        }}
      />
      <Stack.Screen 
        name="Products"   
        component={Products} 
        options={{
            headerShow: false,
            title:'Productos',
            headerRight:()=>{ //serviría para la foto de perfil?
              return(
                <TouchableOpacity>
                    <Text>Clich here</Text>
                </TouchableOpacity>

              )
            }
            }}
      />
      <Stack.Screen 
        name="ProductDetail" 
        component={ProductDetail}
        options={{
            headerShow: false,
            title:'Detalle del Producto'
            }}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
