import React from 'react';
import { View, Text ,Button,TextInput} from 'react-native';
import {THEME} from '../../constants/theme'

import { styles } from './styles';

const singUp = ({navigation}) => {
  

  return (
    <View style={styles.container}>
        <Text style={styles.title }>singUp</Text>
        
        <Text style={styles.title }>Nombre</Text>
        <TextInput placeholder="Nombre" />
        <Text style={styles.title }>Apellido</Text>
        <TextInput placeholder="Apellido" />
        <Text style={styles.title }>Mail</Text>
        <TextInput placeholder="Mail" />
        <Text style={styles.title }>Password</Text>
        <TextInput placeholder="Password" />
        < Button
          title="Click para registrarse"
          onPress={()=>navigation.navigate('Home')}
          color={THEME.colors.primary}
        />
    </View>

  );
};

export default singUp;
