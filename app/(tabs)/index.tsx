import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Search, ShoppingBag, Menu, Filter } from 'lucide-react-native';
import { Link } from 'expo-router'; // 1. Import Link
import { PRODUCTS } from '../../data';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Menu color="#000" size={24} strokeWidth={1.5} />
        <View style={styles.headerIcons}>
          <Search color="#000" size={24} strokeWidth={1.5} style={{ marginRight: 20 }} />
          <ShoppingBag color="#000" size={24} strokeWidth={1.5} />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        {/* 2. Wrap Hero in Link to see Modal */}
        <Link href="/modal" asChild>
          <TouchableOpacity activeOpacity={0.9} style={styles.heroSection}>
            <View style={styles.heroTextContainer}>
              <Text style={styles.heroSubtitle}>New Collection</Text>
              <Text style={styles.heroTitle}>{PRODUCTS[0].brand}{"\n"}{PRODUCTS[0].name}</Text>
            </View>
            <View style={styles.imageContainer}>
              <View style={[styles.circleMask, { backgroundColor: PRODUCTS[0].color }]} />
              <Image source={{ uri: PRODUCTS[0].image }} style={styles.heroImage} resizeMode="contain" />
            </View>
          </TouchableOpacity>
        </Link>

        <View style={styles.tabs}>
          <Text style={[styles.tabText, styles.activeTab]}>Best sellers</Text>
          <Text style={styles.tabText}>Just arrived</Text>
          <Text style={styles.tabText}>All perfumes</Text>
        </View>

        <View style={styles.grid}>
          {PRODUCTS.map((item) => (
            <TouchableOpacity key={item.id} style={styles.card}>
              <View style={styles.cardHeader}>
                <View>
                  <Text style={styles.brandName}>{item.brand}</Text>
                  <Text style={styles.nameLabel}>{item.name}</Text>
                </View>
                <Text style={styles.volume}>{item.volume}</Text>
              </View>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
              <Image source={{ uri: item.image }} style={styles.productThumb} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* 3. Also added Link to the Filter button for easy testing */}
      <Link href="/modal" asChild>
        <TouchableOpacity style={styles.filterBtn}>
          <Filter color="#FFF" size={18} />
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9F7', paddingTop: 60 },
  header: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 20 },
  headerIcons: { flexDirection: 'row' },
  heroSection: { height: 380, justifyContent: 'center', alignItems: 'center' },
  heroTextContainer: { position: 'absolute', zIndex: 2, top: 20, left: 20 },
  heroSubtitle: { fontSize: 12, textTransform: 'uppercase', letterSpacing: 2, color: '#888' },
  heroTitle: { fontSize: 36, fontWeight: '300', color: '#1A1A1A' },
  imageContainer: { width: width * 0.8, height: 300, justifyContent: 'center', alignItems: 'center' },
  circleMask: { position: 'absolute', width: 260, height: 260, borderRadius: 130 },
  heroImage: { width: 180, height: 260, zIndex: 1 },
  tabs: { flexDirection: 'row', paddingHorizontal: 20, marginVertical: 25 },
  tabText: { marginRight: 25, fontSize: 14, color: '#AAA' },
  activeTab: { color: '#000', borderBottomWidth: 1, paddingBottom: 5 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 10 },
  card: { width: (width / 2) - 20, backgroundColor: '#FFF', margin: 5, padding: 15, borderRadius: 4, height: 240 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  brandName: { fontSize: 15, fontWeight: '700' },
  nameLabel: { fontSize: 14, color: '#555' },
  volume: { fontSize: 10, color: '#BBB' },
  price: { fontSize: 13, color: '#888' },
  productThumb: { width: '100%', height: 130, marginTop: 10, resizeMode: 'contain' },
  filterBtn: { position: 'absolute', bottom: 20, alignSelf: 'center', backgroundColor: '#1A1A1A', flexDirection: 'row', paddingVertical: 12, paddingHorizontal: 25, borderRadius: 30, alignItems: 'center', elevation: 5 },
  filterText: { color: '#FFF', marginLeft: 8, fontWeight: '600' }
});



export default HomeScreen;