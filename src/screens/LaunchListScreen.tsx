import { View, StyleSheet } from 'react-native';
import { useLaunchList } from '../hooks/useLaunchList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import LoadingBar from '../components/shared/LoadingBar';
import ErrorBar from '../components/shared/ErrorBar';
import LaunchList from '../components/list/LaunchList';
import SearchBar from '../components/list/SearchBar';
import StatusFilter from '../components/shared/StatusFilter';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'LaunchList'>;
};

export default function LaunchListScreen({ navigation }: Props) {
  const {
    loading,
    error,
    refetch,
    filteredLaunches,
    setSearch,
    search,
    statusFilter,
    setStatusFilter,
    refreshing,
  } = useLaunchList();

  if (loading) {
    return <LoadingBar />;
  }

  if (error) {
    return <ErrorBar error={error} refetch={refetch} />;
  }

  return (
    <View style={styles.container}>
      <SearchBar onChangeText={setSearch} value={search} />
      <StatusFilter value={statusFilter} onChange={setStatusFilter} />

      <LaunchList
        data={filteredLaunches}
        onPress={(id) => navigation.navigate('LaunchDetail', { id })}
        onRefresh={refetch}
        refreshing={refreshing}
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
