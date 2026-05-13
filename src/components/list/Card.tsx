import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Launch } from '../../types/launch';

type CardProps = {
  item: Launch;
  onPress: () => void;
  success: boolean | null;
};

export default function Card({ item, onPress, success }: CardProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card} activeOpacity={0.8}>
      <View style={styles.content}>
        <Text style={styles.title}>{item.name}</Text>
      </View>

      {success !== null && (
        <View
          style={[
            styles.badge,
            { backgroundColor: success ? '#4CAF50' : '#F44336' },
          ]}
        >
          <Text style={styles.badgeText}>{success ? '✓' : '✕'}</Text>
        </View>
      )}
      {success === null && (
        <View style={[styles.badge, { backgroundColor: '#FFC107' }]}>
          <Text style={styles.badgeText}>◆</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    marginHorizontal: 0,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  content: {
    flex: 1,
    paddingRight: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    lineHeight: 22,
  },
  badge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
