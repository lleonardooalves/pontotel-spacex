import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useLaunchList } from '../hooks/useLaunchList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'LaunchList'>;
};

export default function LaunchListScreen({ navigation }: Props) {
  const { loading, error, refetch, filteredLaunches, setSearch, search } =
    useLaunchList();

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
      <TextInput
        placeholder="Buscar missão"
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredLaunches}
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
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text>Nenhum lançamento encontrado</Text>
          </View>
        }
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
    borderColor: '#d6d6d6',
    borderWidth: 1,
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  empty: {
    alignItems: 'center',
    marginTop: 40,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000000',
    padding: 12,
    marginBottom: 12,
    fontSize: 14,
  },
});
