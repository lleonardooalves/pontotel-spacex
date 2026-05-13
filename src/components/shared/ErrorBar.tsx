import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type ErrorProps = {
  error: string;
  refetch: () => void;
};

export default function ErrorBar({ error, refetch }: ErrorProps) {
  return (
    <View style={styles.container}>
      <Text>{error}</Text>
      <TouchableOpacity onPress={refetch}>
        <Text>Tentar Novamente</Text>
      </TouchableOpacity>
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
