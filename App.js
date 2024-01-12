import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/login/login';
import Register from './screens/register/register';
import Portofolio from './screens/portofolio/portofolio'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="login" component={Login}
         />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="portofolio" component={Portofolio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
