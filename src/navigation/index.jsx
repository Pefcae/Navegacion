import { NavigationContainer } from '@react-navigation/native';

import ShopNavigator from './login';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <ShopNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
