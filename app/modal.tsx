import { Link } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function ModalScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Visual indicator for a draggable modal handle */}
      <View style={styles.handle} />

      <View style={styles.contentWrapper}>
        <View style={styles.iconCircle}>
          <IconSymbol size={40} name="sparkles" color="#7C3AED" />
        </View>

        <Text style={styles.modalTitle}>Unlock AI Insights</Text>
        <Text style={styles.description}>
          Get detailed breakdowns of your productivity and task efficiency using our latest AI models.
        </Text>

        {/* Feature List */}
        <View style={styles.featureList}>
          <View style={styles.featureItem}>
            <IconSymbol size={20} name="checkmark.circle.fill" color="#10B981" />
            <Text style={styles.featureText}>Real-time Analytics</Text>
          </View>
          <View style={styles.featureItem}>
            <IconSymbol size={20} name="checkmark.circle.fill" color="#10B981" />
            <Text style={styles.featureText}>Smart Task Prioritization</Text>
          </View>
          <View style={styles.featureItem}>
            <IconSymbol size={20} name="checkmark.circle.fill" color="#10B981" />
            <Text style={styles.featureText}>Unlimited Cloud Sync</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Upgrade to Pro</Text>
        </TouchableOpacity>

        {/* Close Link */}
        <Link href="/" asChild>
          <TouchableOpacity style={styles.closeButton}>
            <Text style={styles.closeText}>Maybe Later</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A', // Dark Slate matching your stats page
    alignItems: 'center',
  },
  handle: {
    width: 40,
    height: 5,
    backgroundColor: '#334155',
    borderRadius: 10,
    marginTop: 15,
  },
  contentWrapper: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#1E293B',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#334155',
  },
  modalTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#94A3B8',
    textAlign: 'center',
    marginTop: 15,
    lineHeight: 24,
  },
  featureList: {
    width: '100%',
    marginTop: 30,
    gap: 15,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    padding: 15,
    borderRadius: 15,
    gap: 12,
  },
  featureText: {
    color: '#E2E8F0',
    fontSize: 16,
    fontWeight: '500',
  },
  primaryButton: {
    backgroundColor: '#7C3AED',
    width: '100%',
    padding: 20,
    borderRadius: 20,
    marginTop: 40,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
  },
  closeText: {
    color: '#64748B',
    fontSize: 16,
    fontWeight: '600',
  },
});