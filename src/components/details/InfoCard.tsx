import { StyleSheet, Text, View } from 'react-native';
import { Launch } from '../../types/launch';

export type InfoCardProps = {
  launch: Launch;
};

export default function InfoCard({ launch }: InfoCardProps) {
  return (
    <View style={styles.infoCard}>
      <Text style={styles.label}>Voo número</Text>
      <Text style={styles.value}>#{launch.flight_number}</Text>

      <Text style={styles.label}>Data</Text>
      <Text style={styles.value}>
        {launch.date_utc ? new Date(launch.date_utc).toLocaleDateString('pt-BR') : '-'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
