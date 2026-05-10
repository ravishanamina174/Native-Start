import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const DATA = [
  { id: '1', title: 'React Native Basics' },
  { id: '2', title: 'Navigation Flow' },
  { id: '3', title: 'State Management' },
  { id: '4', title: 'Native Modules' },
];

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explore Topics</Text>
      
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listItem: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#007AFF',
  },
  itemText: {
    fontSize: 18,
  },
});