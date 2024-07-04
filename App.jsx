import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Component/Home';
import CreateNote from './Component/CreateNote';
import {Provider} from 'react-redux';
import {configureStore} from './Redux/Store';
// import EditNote from './Component/EditNote';

const Stack = createNativeStackNavigator();

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Note" component={CreateNote} />
          {/* <Stack.Screen name="Edit" component={EditNote} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
