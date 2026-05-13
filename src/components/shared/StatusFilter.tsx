import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type StatusFilterProps = {
  value: 'all' | 'success' | 'failed' | 'futures';
  onChange: (value: 'all' | 'success' | 'failed' | 'futures') => void;
};

export default function StatusFilter({ value, onChange }: StatusFilterProps) {
  const buttons = [
    { label: 'Todos', value: 'all' as const },
    { label: 'Sucesso', value: 'success' as const },
    { label: 'Falha', value: 'failed' as const },
    { label: 'Futuros', value: 'futures' as const },
  ];

  return (
    <View style={styles.container}>
      {buttons.map((btn) => (
        <TouchableOpacity
          key={btn.value}
          onPress={() => onChange(btn.value)}
          style={[styles.button, value === btn.value && styles.activeButton]}
        >
          <Text style={[styles.text, value === btn.value && styles.activeText]}>{btn.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 12,
    marginBottom: 4,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#f0f0f0',
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#2196F3',
    borderColor: '#2196F3',
  },
  text: {
    fontSize: 13,
    fontWeight: '600',
    color: '#666',
  },
  activeText: {
    color: '#fff',
  },
});
