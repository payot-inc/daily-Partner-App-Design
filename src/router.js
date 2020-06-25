import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './views/Main';
import OrderDetail from './views/OrderDetail'
import CustomHeader from './components/CustomHeader';
import SubHeader from './components/SubHeader';
import Login from './views/Login';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false, // 헤더 보이기 설정
          }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            header: (props) => <CustomHeader navigation={props.navigation} />, // 커스텀 헤더
            headerShown: true, // 헤더 보이기 설정
          }}
        />
        <Stack.Screen
          name="OrderDetail"
          component={OrderDetail}
          options={{
            header: (props) => <SubHeader navigation={props.navigation} />, // 커스텀 헤더
            headerShown: true, // 헤더 보이기 설정
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
