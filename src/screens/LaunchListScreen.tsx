import { View, StyleSheet } from 'react-native';
import { useLaunchList } from '../hooks/useLaunchList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import LoadingBar from '../components/shared/LoadingBar';
import ErrorBar from '../components/shared/ErrorBar';
import LaunchList from '../components/list/LaunchList';
import SearchBar from '../components/list/SearchBar';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'LaunchList'>;
};

export default function LaunchListScreen({ navigation }: Props) {
  const { loading, error, refetch, filteredLaunches, setSearch, search } =
    useLaunchList();

  if (loading) {
    return <LoadingBar />;
  }

  if (error) {
    return <ErrorBar error={error} refetch={refetch} />;
  }

  return (
    <View style={styles.container}>
      <SearchBar onChangeText={setSearch} value={search} />

      <LaunchList
        data={filteredLaunches}
        onPress={(id, name) =>
          navigation.navigate('LaunchDetail', { id, name })
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
});
