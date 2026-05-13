import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Launch } from '../../types/launch';
import Card from './Card';

export type LaunchListProps = {
  data: Launch[];
  onPress: (id: string, name: string) => void;
};

export default function LaunchList({ data, onPress }: LaunchListProps) {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Card
          item={item}
          onPress={() => onPress(item.id, item.name)}
          success={item.success}
        />
      )}
      ListEmptyComponent={
        <View style={styles.empty}>
          <Text>Nenhum lançamento encontrado</Text>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  empty: {
    alignItems: 'center',
    marginTop: 40,
  },
});
