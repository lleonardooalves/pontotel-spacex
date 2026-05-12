import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useLaunchList } from '../hooks/useLaunchList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'LaunchList'>;
};

export default function LaunchListScreen({ navigation }: Props) {
  const { launches, loading, error, refetch } = useLaunchList();

  if (loading) {
    return (
      <View style={[styles.container, styles.loading]}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
        <Text onPress={refetch}>Tentar Novamente</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={launches}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('LaunchDetail', {
                id: item.id,
                name: item.name,
              })
            }
            style={styles.card}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    borderColor: '#000000',
    borderWidth: 1,
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
