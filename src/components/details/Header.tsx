import { StyleSheet, Text, View } from 'react-native';
import { Launch } from '../../types/launch';

export type HeaderProps = {
  launch: Launch;
};

export default function Header({ launch }: HeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{launch.name}</Text>
      {launch.success !== null ? (
        <View style={[styles.badge, { backgroundColor: launch.success ? '#4CAF50' : '#F44336' }]}>
          <Text style={styles.badgeText}>{launch.success ? 'Sucesso' : 'Falha'}</Text>
        </View>
      ) : launch.upcoming ? (
        <View style={[styles.badge, { backgroundColor: '#FFC107' }]}>
          <Text style={styles.badgeText}>Em Breve</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
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
});
