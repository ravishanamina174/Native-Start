import React, { useRef } from 'react';
import { View, Text, StyleSheet, Animated, Image, Dimensions, StatusBar } from 'react-native';

const { width } = Dimensions.get('window');
const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = 100;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default function DiscoverScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;

  // 1. Masking/Scaling Animation for the Image
  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 0.5, 0],
    extrapolate: 'clamp',
  });

  const imageScale = scrollY.interpolate({
    inputRange: [-150, 0],
    outputRange: [2, 1],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Animated Masking Header */}
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <Animated.Image
          source={{ uri: 'https://pub-4799464f4a674b45acf85fa27131cf7b.r2.dev/focus.jpg' }}
          style={[styles.headerImage, { opacity: imageOpacity, transform: [{ scale: imageScale }] }]}
        />
        <View style={styles.overlay}>
          <Text style={styles.headerTitle}>Deep Focus</Text>
        </View>
      </Animated.View>

      {/* Content Scroll View */}
      <Animated.ScrollView
        contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT }}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false } // Layout properties like 'height' don't support native driver
        )}
      >
        <View style={styles.content}>
          <Text style={styles.sectionHeader}>Daily Inspiration</Text>
          {[1, 2, 3, 4, 5].map((item) => (
            <View key={item} style={styles.articleCard}>
              <View style={styles.articleImagePlaceholder} />
              <View >
                <Text style={styles.articleTitle}>Mastering React Native Animation #{item}</Text>
                <Text style={styles.articleSub}>Learn the secrets of 60FPS UI.</Text>
              </View>
            </View>
          ))}
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#c8c5ccaf',
    overflow: 'hidden',
    zIndex: 10,
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 34,
    fontWeight: 'bold',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    minHeight: 1000,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1A1A1A',
  },
  articleCard: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    gap: 15,
  },
  articleImagePlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 15,
    backgroundColor: '#F3F4F6',
  },
  articleTitle: { fontSize: 16, fontWeight: '700', color: '#1F2937' },
  articleSub: { fontSize: 14, color: '#6B7280', marginTop: 4 },
});
