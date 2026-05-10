import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function Analytics() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>AI-Powered Crypto{"\n"}Exchange App</Text>
      </View>

      <View style={styles.statsCard}>
        <Text style={styles.statsHeader}>Task Progress</Text>
        <View style={styles.chartPlaceholder}>
            {/* Simple representation of the 3 bars */}
            <View style={[styles.bar, {height: '80%', backgroundColor: '#7C3AED'}]} />
            <View style={[styles.bar, {height: '50%', backgroundColor: '#F472B6'}]} />
            <View style={[styles.bar, {height: '90%', backgroundColor: '#fff'}]} />
        </View>
        <View style={styles.pill}><Text style={styles.pillText}>Boost Productivity</Text></View>
      </View>

      <View style={styles.timeline}>
         <Text style={styles.sectionTitle}>Task Timeline</Text>
         <View style={styles.timelineItem}><Text style={styles.timeText}>Ideation</Text></View>
         <View style={styles.timelineItem}><Text style={styles.timeText}>Wireframe</Text></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20 },
  header: { marginTop: 40 },
  title: { color: '#fff', fontSize: 28, fontWeight: 'bold' },
  statsCard: { backgroundColor: '#1A1A1A', padding: 25, borderRadius: 35, marginTop: 30 },
  statsHeader: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  chartPlaceholder: { height: 150, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', gap: 20, marginVertical: 20 },
  bar: { width: 30, borderRadius: 10 },
  pill: { backgroundColor: '#7C3AED', padding: 10, borderRadius: 20, alignSelf: 'center' },
  pillText: { color: '#fff', fontWeight: 'bold' },
  timeline: { marginTop: 40 },
  sectionTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  timelineItem: { borderLeftWidth: 2, borderLeftColor: '#333', paddingLeft: 20, paddingBottom: 30 },
  timeText: { color: '#fff', fontSize: 16 }
});