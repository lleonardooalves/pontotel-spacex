import { Image, StyleSheet } from 'react-native';
import { Launch } from '../../types/launch';

export type PatchImageProps = {
  launch: Launch | null;
};

export default function PatchImage({ launch }: PatchImageProps) {
  if (!launch?.links.patch.small) return null;
  return (
    <Image source={{ uri: launch.links.patch.small }} style={styles.patch} resizeMode="contain" />
  );
}

const styles = StyleSheet.create({
  patch: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 16,
  },
});
