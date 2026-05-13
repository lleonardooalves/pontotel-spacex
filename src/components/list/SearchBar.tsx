import { StyleSheet, TextInput } from 'react-native';

export type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function SearchBar({ value, onChangeText }: SearchBarProps) {
  return (
    <TextInput
      placeholder="Buscar missão"
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000000',
    padding: 12,
    marginBottom: 12,
    fontSize: 14,
  },
});
