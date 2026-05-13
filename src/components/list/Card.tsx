import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Launch } from '../../types/launch';

type CardProps = {
  item: Launch;
  onPress: () => void;
};

export default function Card({ item, onPress }: CardProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    borderColor: '#d6d6d6',
    borderWidth: 1,
  },
});
