import { Link } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

export default function Onboarding() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topCard}>
        <View style={styles.miniCard}>
          <Text style={styles.miniTitle}>Finance Assistant App</Text>
          <View style={styles.progressBar}><View style={styles.progressFill} /></View>
        </View>
        <Text style={styles.timer}>01:28:32</Text>
      </View>

      <View style={styles.buttonRow}>
  {/* Just wrap the TouchableOpacity directly in the Link */}
  <Link href="/modal" asChild>
    <TouchableOpacity style={styles.btnPrimary}>
      <Text style={styles.btnText}>Get Started</Text>
    </TouchableOpacity>
  </Link>

  <TouchableOpacity style={styles.btnSecondary}>
    <Text style={styles.btnTextDark}>Watch video</Text>
  </TouchableOpacity>
</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  topCard: { backgroundColor: '#7C3AED', margin: 20, height: 350, borderRadius: 40, justifyContent: 'center', alignItems: 'center' },
  miniCard: { backgroundColor: 'rgba(255,255,255,0.2)', padding: 15, borderRadius: 20, width: '80%' },
  miniTitle: { color: '#fff', fontWeight: 'bold' },
  progressBar: { height: 4, backgroundColor: 'rgba(255,255,255,0.3)', marginTop: 10, borderRadius: 2 },
  progressFill: { width: '60%', height: '100%', backgroundColor: '#fff' },
  timer: { color: '#fff', fontSize: 40, fontWeight: 'bold', marginTop: 20 },
  bottomContent: { padding: 30 },
  mainHeading: { fontSize: 42, fontWeight: '800', lineHeight: 48 },
  subText: { color: '#64748b', marginTop: 15, fontSize: 16 },
  buttonRow: { flexDirection: 'row', marginTop: 40, gap: 15 },
  btnPrimary: { backgroundColor: '#000', paddingVertical: 18, paddingHorizontal: 30, borderRadius: 20 },
  btnSecondary: { borderWidth: 1, borderColor: '#e2e8f0', paddingVertical: 18, paddingHorizontal: 30, borderRadius: 20 },
  btnText: { color: '#fff', fontWeight: 'bold' },
  btnTextDark: { color: '#000', fontWeight: 'bold' }
});