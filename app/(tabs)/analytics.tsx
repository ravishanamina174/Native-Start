import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Animated, ScrollView } from 'react-native';

export default function Analytics() {
  // Animation values for the 3 bars
  const bar1 = useRef(new Animated.Value(0)).current;
  const bar2 = useRef(new Animated.Value(0)).current;
  const bar3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Staggered animation: bars grow one after another
    Animated.stagger(200, [
      Animated.timing(bar1, { toValue: 120, duration: 800, useNativeDriver: false }),
      Animated.timing(bar2, { toValue: 80, duration: 800, useNativeDriver: false }),
      Animated.timing(bar3, { toValue: 140, duration: 800, useNativeDriver: false }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.dateLabel}>MONDAY, MAY 11</Text>
          <Text style={styles.title}>Performance{"\n"}<Text style={{color: '#7C3AED'}}>Insights</Text></Text>
        </View>

        {/* The Main Chart Card */}
        <View style={styles.statsCard}>
          <View style={styles.cardTop}>
            <Text style={styles.statsHeader}>Activity Growth</Text>
            <View style={styles.trendPill}>
              <Text style={styles.trendText}>+12.5%</Text>
            </View>
          </View>
          
          <View style={styles.chartPlaceholder}>
            <View style={styles.barContainer}>
              <Animated.View style={[styles.bar, { height: bar1, backgroundColor: '#7C3AED' }]} />
              <Text style={styles.barLabel}>Mon</Text>
            </View>
            <View style={styles.barContainer}>
              <Animated.View style={[styles.bar, { height: bar2, backgroundColor: '#C4B5FD' }]} />
              <Text style={styles.barLabel}>Tue</Text>
            </View>
            <View style={styles.barContainer}>
              <Animated.View style={[styles.bar, { height: bar3, backgroundColor: '#7C3AED' }]} />
              <Text style={styles.barLabel}>Wed</Text>
            </View>
          </View>
        </View>

        {/* Timeline Section */}
        <View style={styles.timelineSection}>
          <Text style={styles.sectionTitle}>Project Roadmap</Text>
          
          {/* Step 1 */}
          <View style={styles.timelineItem}>
            <View style={styles.lineWrapper}>
              <View style={styles.dotActive} />
              <View style={styles.line} />
            </View>
            <View style={styles.timelineContent}>
              <Text style={styles.timeTitle}>Ideation Phase</Text>
              <Text style={styles.timeDesc}>Completed all high-fidelity wireframes.</Text>
            </View>
          </View>

          {/* Step 2 */}
          <View style={styles.timelineItem}>
            <View style={styles.lineWrapper}>
              <View style={styles.dotInactive} />
              <View style={styles.line} />
            </View>
            <View style={styles.timelineContent}>
              <Text style={styles.timeTitle}>API Integration</Text>
              <Text style={styles.timeDesc}>Connecting transit hub modules.</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  scrollContent: { padding: 25 },
  header: { marginTop: 20, marginBottom: 30 },
  dateLabel: { color: '#9CA3AF', fontWeight: '700', fontSize: 12, letterSpacing: 1 },
  title: { color: '#111827', fontSize: 32, fontWeight: '900', marginTop: 5 },
  
  statsCard: { 
    backgroundColor: '#fff', 
    padding: 25, 
    borderRadius: 30, 
    borderWidth: 1, 
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 5 
  },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  statsHeader: { color: '#111827', fontSize: 18, fontWeight: '700' },
  trendPill: { backgroundColor: '#ECFDF5', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  trendText: { color: '#10B981', fontSize: 12, fontWeight: '700' },
  
  chartPlaceholder: { 
    height: 180, 
    flexDirection: 'row', 
    alignItems: 'flex-end', 
    justifyContent: 'space-around', 
    marginTop: 20 
  },
  barContainer: { alignItems: 'center' },
  bar: { width: 40, borderRadius: 12 },
  barLabel: { marginTop: 10, color: '#9CA3AF', fontSize: 12, fontWeight: '600' },

  timelineSection: { marginTop: 40 },
  sectionTitle: { color: '#111827', fontSize: 20, fontWeight: '800', marginBottom: 25 },
  timelineItem: { flexDirection: 'row', height: 80 },
  lineWrapper: { alignItems: 'center', width: 20, marginRight: 15 },
  dotActive: { width: 14, height: 14, borderRadius: 7, backgroundColor: '#7C3AED', zIndex: 1 },
  dotInactive: { width: 14, height: 14, borderRadius: 7, backgroundColor: '#E5E7EB', zIndex: 1 },
  line: { width: 2, flex: 1, backgroundColor: '#F3F4F6', marginTop: -2 },
  
  timelineContent: { flex: 1 },
  timeTitle: { fontSize: 16, fontWeight: '700', color: '#111827' },
  timeDesc: { fontSize: 14, color: '#6B7280', marginTop: 4 }
});