import { StyleSheet, StatusBar } from 'react-native';
import {THEME} from '../../constants/theme'


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.background,
    justifyContent:'center',
    alignItem:'center',
    //marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  title: {
    fontSize: 18,
    //fontFamily: 'Bitter-Bold',
    color: THEME.colors.title,
    padding: 10,
  },
  //containerList: {
//    flex: 1,
//  },
});
