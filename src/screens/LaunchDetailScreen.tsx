import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import { RootStackParamList } from '../navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'LaunchDetail'>;

export default function LaunchDetailScreen({ route }: Props) {
  const { id, name } = route.params;

  return (
    <View>
      <Text>{name}</Text>
      <Text>{id}</Text>
    </View>
  );
}
