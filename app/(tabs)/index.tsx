import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image 
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
        style={styles.logo} 
      />
      
      <Text style={styles.title}>Welcome Home</Text>
      <Text style={styles.description}>
        This is your first mobile screen. Notice how we use View instead of Div.
      </Text>

      <View style={styles.counterBox}>
        <Text style={styles.counterText}>Likes: {count}</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>Press to Like</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginVertical: 15,
  },
  counterBox: {
    marginTop: 30,
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#F0F0F0',
    width: '100%',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});