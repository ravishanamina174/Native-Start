import { View, Text, StyleSheet, ScrollView, TextInput, Image } from 'react-native';

export default function Dashboard() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good Morning,</Text>
          <Text style={styles.userName}>Olivia Read</Text>
        </View>
        <View style={styles.profilePic} />
      </View>

      <Text style={styles.bannerText}>Start Your Day{"\n"}& Be Productive</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardScroll}>
        <View style={[styles.infoCard, {backgroundColor: '#7C3AED'}]}>
           <Text style={styles.cardTag}>High</Text>
           <Text style={styles.cardTitle}>AI-Powered{"\n"}Exchange App</Text>
        </View>
        <View style={[styles.infoCard, {backgroundColor: '#FED7AA'}]}>
           <Text style={[styles.cardTag, {color: '#000'}]}>Med</Text>
           <Text style={[styles.cardTitle, {color: '#000'}]}>Finance Assist{"\n"}Management</Text>
        </View>
      </ScrollView>

      <View style={styles.tasksHeader}>
        <Text style={styles.sectionTitle}>All Tasks</Text>
        <Text style={styles.taskCount}>To Do (4)</Text>
      </View>

      <View style={styles.taskItem}>
        <View style={styles.taskIcon} />
        <View>
          <Text style={styles.taskName}>Business Consultation</Text>
          <Text style={styles.taskTime}>10:00 AM - 11:30 AM</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20, paddingTop: 60 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  greeting: { color: '#64748b' },
  userName: { fontSize: 18, fontWeight: 'bold' },
  profilePic: { width: 45, height: 45, borderRadius: 25, backgroundColor: '#e2e8f0' },
  bannerText: { fontSize: 32, fontWeight: 'bold', marginVertical: 25 },
  cardScroll: { flexDirection: 'row' },
  infoCard: { width: 250, height: 160, borderRadius: 30, padding: 20, marginRight: 15 },
  cardTag: { color: '#fff', fontSize: 12, opacity: 0.8 },
  cardTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginTop: 10 },
  tasksHeader: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold' },
  taskCount: { color: '#7C3AED' },
  taskItem: { backgroundColor: '#F8FAFC', padding: 20, borderRadius: 25, marginTop: 15, flexDirection: 'row', gap: 15 },
  taskIcon: { width: 40, height: 40, borderRadius: 10, backgroundColor: '#E2E8F0' },
  taskName: { fontWeight: '600', fontSize: 16 },
  taskTime: { color: '#64748b', fontSize: 12 }
});