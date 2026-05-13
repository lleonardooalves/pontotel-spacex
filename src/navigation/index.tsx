import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LaunchListScreen from '../screens/LaunchListScreen';
import LaunchDetailScreen from '../screens/LaunchDetailScreen';

export type RootStackParamList = {
  LaunchList: undefined;
  LaunchDetail: { id: string; name: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LaunchList"
          component={LaunchListScreen}
          options={{ title: 'Lançamentos SpaceX', headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="LaunchDetail"
          component={LaunchDetailScreen}
          options={{ title: 'Detalhes', headerTitleAlign: 'center' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
