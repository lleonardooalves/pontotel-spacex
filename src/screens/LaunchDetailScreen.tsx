import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, ScrollView } from 'react-native';
import { RootStackParamList } from '../navigation';
import { useLaunchDetail } from '../hooks/useLaunchDetail';
import LoadingBar from '../components/shared/LoadingBar';
import ErrorBar from '../components/shared/ErrorBar';
import Header from '../components/details/Header';
import InfoCard from '../components/details/InfoCard';
import DetailsCard from '../components/details/DetailsCard';
import PatchImage from '../components/details/PatchImage';

type Props = NativeStackScreenProps<RootStackParamList, 'LaunchDetail'>;

export default function LaunchDetailScreen({ route }: Props) {
  const { id } = route.params;
  const { launch, loading, error, refetch } = useLaunchDetail(id);

  if (loading) {
    return <LoadingBar />;
  }

  if (error) {
    return <ErrorBar error={error} refetch={refetch} />;
  }

  return (
    <ScrollView style={styles.container}>
      {launch?.links.patch.small && <PatchImage launch={launch} />}

      <Header launch={launch} />

      <InfoCard launch={launch} />

      {launch?.details && <DetailsCard launch={launch} />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
});
