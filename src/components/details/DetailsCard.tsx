import { StyleSheet, Text, View } from 'react-native';
import { Launch } from '../../types/launch';

export type DetailsCardProps = {
  launch: Launch;
};

export default function DetailsCard({ launch }: DetailsCardProps) {
  return (
    <View style={styles.infoCard}>
      <Text style={styles.label}>Sobre a missão</Text>
      <Text style={styles.details}>{launch.details}</Text>
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
  details: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
  },
});
