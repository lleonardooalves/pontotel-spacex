import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Launch } from '../../types/launch';
import Card from './Card';

export type LaunchListProps = {
  data: Launch[];
  onPress: (id: string, name: string) => void;
  refreshing: boolean;
  onRefresh: () => void;
};

export default function LaunchList({ data, onPress, refreshing, onRefresh }: LaunchListProps) {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Card item={item} onPress={() => onPress(item.id, item.name)} />}
      ListEmptyComponent={
        <View style={styles.empty}>
          <Text>Nenhum lançamento encontrado</Text>
        </View>
      }
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  );
}

const styles = StyleSheet.create({
  empty: {
    alignItems: 'center',
    marginTop: 40,
  },
});
