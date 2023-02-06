//import {useFonts} from 'expo-font'
import {  View,ActivityIndicator } from 'react-native';
import AppNavigator from './navigation'
import { styles } from './styles';



const  App =() => {
//  const [loaded] = useFonts({
  //  'Bitter-Regular' : require("../assets/fonts/Bitter-Regular"),
  //  'Bitter-Light' : require("../assets/fonts/Bitter-Light"),
   // 'Bitter-Medium' : require("../assets/fonts/Bitter-Medium"),
    
  //});

   // if(!loaded){
    //  return (
     //   <View style={styles.container}> 
      //    <ActivityIndicator size="large" color="#0000ff" />
       // </View>
      //);
   // }

  return <AppNavigator />
  
}

export default App;