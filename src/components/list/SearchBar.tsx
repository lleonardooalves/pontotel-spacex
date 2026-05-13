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
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    padding: 14,
    marginBottom: 10,
    fontSize: 16,
    color: '#1a1a1a',
    marginTop: 10,
  },
});
