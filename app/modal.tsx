import { Link } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function ModalScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Draggable Handle */}
      <View style={styles.handle} />

      <ScrollView contentContainerStyle={styles.contentWrapper}>
        <View style={styles.iconCircle}>
          {/* Changed icon to represent fragrance/sparkles */}
          <IconSymbol size={40} name="wind" color="#1A1A1A" />
        </View>

        <Text style={styles.modalTitle}>Scent Composition</Text>
        <Text style={styles.description}>
          Understanding the notes that make up this unique olfactory experience.
        </Text>

        {/* Note List */}
        <View style={styles.noteList}>
          <View style={styles.noteItem}>
            <View style={styles.dot} />
            <View>
              <Text style={styles.noteType}>Top Notes</Text>
              <Text style={styles.noteDetails}>Bergamot, Orange Blossom, Pink Pepper</Text>
            </View>
          </View>

          <View style={styles.noteItem}>
            <View style={[styles.dot, { backgroundColor: '#EAD8D0' }]} />
            <View>
              <Text style={styles.noteType}>Heart Notes</Text>
              <Text style={styles.noteDetails}>Bulgarian Rose, Jasmine, Praline</Text>
            </View>
          </View>

          <View style={styles.noteItem}>
            <View style={[styles.dot, { backgroundColor: '#1A1A1A' }]} />
            <View>
              <Text style={styles.noteType}>Base Notes</Text>
              <Text style={styles.noteDetails}>Vanilla, Cedarwood, Musk</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Shop This Collection</Text>
        </TouchableOpacity>

        <Link href="/" asChild>
          <TouchableOpacity style={styles.closeButton}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F7', // Matches your Cream/White theme
    alignItems: 'center',
  },
  handle: {
    width: 40,
    height: 5,
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    marginTop: 15,
  },
  contentWrapper: {
    padding: 30,
    alignItems: 'center',
    width: '100%',
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#EEE',
  },
  modalTitle: {
    fontSize: 26,
    fontWeight: '300', // Light font for high-end look
    color: '#1A1A1A',
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    color: '#888',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 22,
  },
  noteList: {
    width: '100%',
    marginTop: 30,
    gap: 20,
  },
  noteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 4, // Square corners match your screenshot
    gap: 15,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#D1D1D1',
  },
  noteType: {
    color: '#1A1A1A',
    fontSize: 14,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  noteDetails: {
    color: '#888',
    fontSize: 13,
    marginTop: 2,
  },
  primaryButton: {
    backgroundColor: '#1A1A1A',
    width: '100%',
    padding: 18,
    borderRadius: 4,
    marginTop: 40,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
  },
  closeText: {
    color: '#AAA',
    fontSize: 14,
    fontWeight: '600',
  },
});