import * as React from 'react';
import {NavigationContainer, NavigationContext} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/Screens/Home';
import {ApolloProvider} from '@apollo/client';
import client1 from './src/graphql/Client1';

import NewOne from './src/Screens/NewOne';
import TextBox from './src/components/Todos/TextBox';
import Online from './src/Screens/Online';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ApolloProvider client={client1}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="NewOne" component={NewOne} />
          <Stack.Screen name="TextBox" component={TextBox} />
          <Stack.Screen name="Online" component={Online} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
