import { StyleSheet, Text, View } from 'react-native';

export default function LoadingBar() {
  return (
    <View style={[styles.container, styles.loading]}>
      <Text>Carregando...</Text>
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

  loading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
