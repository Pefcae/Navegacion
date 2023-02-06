import { StyleSheet, StatusBar } from 'react-native';
import {THEME} from '../../constants/theme'


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.white,
    alignItem:'center',
    justifyContent:'center',
  },
  title: {
    fontSize: 18,
    //fontFamily: 'Bitter-Bold',
    color: THEME.colors.title,
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
    justifyContent:'center',


  },
  
});
