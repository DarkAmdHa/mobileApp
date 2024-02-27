import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function IconButton({ icon, color, size, onPress }) {
  return (
      <Ionicons name={icon} color={color} size={size} />
  );
}

export default IconButton;

