import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // You might need to install: npx expo install expo-linear-gradient

export default function AIScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: 'https://img.freepik.com/free-vector/cute-robot-operating-laptop-cartoon-character-isolated-white-technology-icon-concept-flat-cartoon-style_1386-2166.jpg' }} 
            style={styles.robotImage}
          />
        </View>
        <Text style={styles.greeting}>Meet Robo-Assistant</Text>
        <Text style={styles.status}>Online & Ready to Help</Text>
      </View>

      {/* Stats/Info Cards */}
      <View style={styles.infoRow}>
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Accuracy</Text>
          <Text style={styles.infoValue}>99%</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Response</Text>
          <Text style={styles.infoValue}>0.2s</Text>
        </View>
      </View>

      {/* Description Section */}
      <View style={styles.descriptionSection}>
        <Text style={styles.sectionTitle}>Capabilities</Text>
        <Text style={styles.descriptionText}>
          I am your personal AI companion built with React Native. 
          I can help you manage your transit schedules, book seats, 
          and navigate the hub effortlessly.
        </Text>
      </View>

      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.buttonText}>Start Conversation</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 30,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: '#007AFF',
  },
  robotImage: {
    width: '100%',
    height: '100%',
  },
  greeting: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1E293B',
  },
  status: {
    fontSize: 14,
    color: '#10B981',
    fontWeight: '600',
    marginTop: 5,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: -25,
    paddingHorizontal: 20,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 20,
    width: '40%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 12,
    color: '#64748B',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  infoValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
    marginTop: 5,
  },
  descriptionSection: {
    padding: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#475569',
    lineHeight: 24,
  },
  actionButton: {
    backgroundColor: '#007AFF',
    marginHorizontal: 30,
    padding: 18,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 40,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
});