import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Bai2a from './components/Bai2a';
import Bai2c from './components/Bai2c';
import Bai2b from './components/Bai2b';
import TikiOk from './components/TikiOk';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    

    <NavigationContainer>
      <Drawer.Navigator>
      <Drawer.Screen name="Bài2a" component={Bai2a} />
      <Drawer.Screen name="Bai2b" component={Bai2b} />
      <Drawer.Screen name="Bai2c" component={Bai2c} />
      <Drawer.Screen name="TikiOk" component={TikiOk} />
      
    </Drawer.Navigator>
    </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
