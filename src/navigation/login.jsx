import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { THEME } from '../constants/theme';
import { Welcome, SignIn, SingUp ,Home} from '../screens/index';
import { View, Text, TouchableOpacity } from 'react-native';


//import { View, Text, TouchableOpacity } from 'react-native';


const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator  
    initialRouteName="Welcome"
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
        name="Welcome" 
        component={Welcome} 
        options={{
        title:'Welcome'
        }}
      />
      <Stack.Screen 
        name="SingUp"   
        component={SingUp} 
        options={{
            headerShow: false,
            title:'SingUp',
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
        name="SignIn" 
        component={SignIn}
        options={{
            headerShow: false,
            title:'SignIn'
            }}
      />
       <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
            headerShow: false,
            title:'Home'
            }}
      />

    </Stack.Navigator>

      
  );
};

export default ShopNavigator;
