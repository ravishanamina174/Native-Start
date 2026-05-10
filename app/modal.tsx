import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.modalTitle}>Important Info</Text>
      <Text style={styles.content}>
        This is a Modal. On iOS, it usually slides up from the bottom.
      </Text>
      
      {/* This link takes you back to the index in the tabs folder */}
      <Link href="/" style={styles.closeLink}>
        <Text style={styles.closeText}>Close Modal</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222', // Dark background for contrast
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    color: '#ccc',
    marginTop: 10,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  closeLink: {
    marginTop: 30,
    padding: 15,
  },
  closeText: {
    color: '#007AFF',
    fontSize: 18,
    fontWeight: '600',
  },
});