import React from 'react';
import { View, Text ,Button,TextInput} from 'react-native';
import {THEME} from '../../constants/theme'

import { styles } from './styles';

const SignIn = ({navigation}) => {
  

  return (
    <View style={styles.container}>
        <Text style={styles.title }>SignIn</Text>
        <Text style={styles.title }>Mail</Text>
        <TextInput placeholder="Mail" />
        <Text style={styles.title }>Password</Text>
        <TextInput placeholder="Password" />
        < Button
          title="Pantalla para iniciar sesión"
          
          onPress={()=>navigation.navigate('Home')}
          color={THEME.colors.primary}
        />
    </View>

  );
};

export default SignIn;
