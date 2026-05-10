import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Animated, Dimensions } from 'react-native';
import { Link } from 'expo-router';

const { width } = Dimensions.get('window');

export default function Onboarding() {
  // Animation Values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.mainContent, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
        
        {/* Brand Tag */}
        <View style={styles.tagContainer}>
          <Text style={styles.tagText}>NEW RELEASE v2.0</Text>
        </View>

        {/* Hero Text */}
        <Text style={styles.heroText}>
          Design your{"\n"}
          <Text style={styles.highlightText}>Financial</Text>{"\n"}
          Future.
        </Text>
        
        <Text style={styles.subText}>
          Experience the next generation of task management with AI-driven insights and a seamless interface.
        </Text>

        {/* Animated Feature Card */}
        <View style={styles.glassCard}>
          <View style={styles.cardRow}>
            <View style={styles.dot} />
            <Text style={styles.cardSmallText}>System Status: Active</Text>
          </View>
          <Text style={styles.cardMainPrice}>$4,250.00</Text>
          <Text style={styles.cardSubLabel}>Total Productivity Value</Text>
        </View>

        {/* Button Section */}
        <View style={styles.buttonContainer}>
          <Link href="/modal" asChild>
            <TouchableOpacity style={styles.primaryBtn}>
              <Text style={styles.primaryBtnText}>Get Started</Text>
            </TouchableOpacity>
          </Link>
          
          <TouchableOpacity style={styles.secondaryBtn}>
            <Text style={styles.secondaryBtnText}>Learn More</Text>
          </TouchableOpacity>
        </View>

      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Pure white
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  tagContainer: {
    backgroundColor: '#F3E8FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  tagText: {
    color: '#7C3AED',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
  },
  heroText: {
    fontSize: 52,
    fontWeight: '900',
    color: '#111827',
    lineHeight: 58,
    letterSpacing: -1,
  },
  highlightText: {
    color: '#7C3AED',
  },
  subText: {
    fontSize: 18,
    color: '#6B7280',
    marginTop: 20,
    lineHeight: 28,
  },
  glassCard: {
    backgroundColor: '#FFF',
    marginTop: 40,
    padding: 25,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    // Soft Shadow
    shadowColor: '#7C3AED',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.1,
    shadowRadius: 30,
    elevation: 10,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
    marginRight: 8,
  },
  cardSmallText: {
    color: '#9CA3AF',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  cardMainPrice: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
  },
  cardSubLabel: {
    color: '#6B7280',
    fontSize: 14,
    marginTop: 4,
  },
  buttonContainer: {
    marginTop: 50,
    gap: 15,
  },
  primaryBtn: {
    backgroundColor: '#111827',
    paddingVertical: 20,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  primaryBtnText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
  },
  secondaryBtn: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  secondaryBtnText: {
    color: '#6B7280',
    fontSize: 16,
    fontWeight: '600',
  },
});