import React, { Component } from 'react'
import DrawerNavigator from './DrawerNavigator'
import OsaScreen from '../../screens/OsaScreen'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export class MainNavigator extends Component {


  render() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="drawerNavigator"
              component={DrawerNavigator}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="testStack"
              component={OsaScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
    )
  }
}

export default MainNavigator