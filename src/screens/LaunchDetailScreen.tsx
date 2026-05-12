import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { RootStackParamList } from '../navigation';
import { useLaunchDetail } from '../hooks/useLaunchDetail';

type Props = NativeStackScreenProps<RootStackParamList, 'LaunchDetail'>;

export default function LaunchDetailScreen({ route }: Props) {
  const { id } = route.params;
  const { launch, loading, error, refetch } = useLaunchDetail(id);

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
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{launch?.name}</Text>
        <View
          style={[
            styles.badge,
            { backgroundColor: launch?.success ? '#4CAF50' : '#F44336' },
          ]}
        >
          <Text style={styles.badgeText}>
            {launch?.success ? 'Sucesso' : 'Falhou'}
          </Text>
        </View>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.label}>Voo número</Text>
        <Text style={styles.value}>#{launch?.flight_number}</Text>

        <Text style={styles.label}>Data</Text>
        <Text style={styles.value}>
          {launch?.date_utc
            ? new Date(launch.date_utc).toLocaleDateString('pt-BR')
            : '-'}
        </Text>
      </View>

      {launch?.details && (
        <View style={styles.infoCard}>
          <Text style={styles.label}>Sobre a missão</Text>
          <Text style={styles.details}>{launch.details}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 8,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  label: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  details: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
  },

  loading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
