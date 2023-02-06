import React from 'react';
import { View, Text, Button ,Image} from 'react-native';
import {THEME} from '../../constants/theme'

import { styles } from './styles';

const Welcome = ({navigation}) => {
  

  return (
    <View style={styles.container}>
        <Text style={styles.title }>Bienvenido a Avellaneda Recicla</Text>
        <Image
          source={{
            uri: "https://img.freepik.com/foto-gratis/elemento-diseno-icono-reciclaje-verde_53876-103073.jpg?w=2000",
          }}
          style={styles.image}
        />

        < Button
          title="Registrarse"
          onPress={()=>navigation.navigate('SingUp')}
          color={THEME.colors.primary }
        />
        < Button
          title="Iniciar Sesión"
          onPress={()=>navigation.navigate('SignIn')}
          color={THEME.colors.primary }
        />
    </View>

  );
};

export default Welcome;
