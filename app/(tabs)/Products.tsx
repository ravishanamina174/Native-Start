import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { ChevronLeft, ChevronRight, Minus, Plus, ShoppingBag } from 'lucide-react-native';
import { PRODUCTS } from '../../data';

const { width } = Dimensions.get('window');

const ProductDetails = () => {
  const [qty, setQty] = useState(1);
  const item = PRODUCTS[0];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <View style={styles.nav}>
          <ChevronLeft color="#000" size={28} strokeWidth={1.5} />
          <ShoppingBag color="#000" size={24} strokeWidth={1.5} />
        </View>

        <View style={styles.productCenter}>
          <Text style={styles.mainTitle}>{item.brand} {item.name}</Text>
          <Text style={styles.mainPrice}>${item.price.toFixed(2)}</Text>
          <View style={styles.imageGallery}>
            <ChevronLeft color="#DDD" size={24} />
            <Image source={{ uri: item.image }} style={styles.mainImage} resizeMode="contain" />
            <ChevronRight color="#000" size={24} />
          </View>
        </View>

        <View style={styles.controlsRow}>
          <View style={styles.stepper}>
            <TouchableOpacity onPress={() => setQty(Math.max(1, qty - 1))}><Minus size={18}/></TouchableOpacity>
            <Text style={styles.qtyText}>{qty}</Text>
            <TouchableOpacity onPress={() => setQty(qty + 1)}><Plus size={18}/></TouchableOpacity>
          </View>
          <View style={styles.sizeToggles}>
            <TouchableOpacity style={[styles.sizeBtn, styles.activeSize]}><Text style={{color: '#FFF'}}>50ml</Text></TouchableOpacity>
            <TouchableOpacity style={styles.sizeBtn}><Text style={{color: '#888'}}>100ml</Text></TouchableOpacity>
          </View>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.divider} />
          <View style={styles.meta}>
            <Text style={styles.metaLabel}>Expiry Date: <Text style={styles.metaValue}>{item.expiry}</Text></Text>
            <Text style={styles.metaLabel}>Country of Origin: <Text style={styles.metaValue}>{item.origin}</Text></Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.addToCartBtn}>
          <Plus color="#FFF" size={20} style={{marginRight: 10}}/>
          <Text style={styles.btnText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9F7' },
  nav: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, paddingTop: 60 },
  productCenter: { alignItems: 'center' },
  mainTitle: { fontSize: 28, fontWeight: '300', textAlign: 'center' },
  mainPrice: { fontSize: 18, color: '#888', marginTop: 8 },
  imageGallery: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width, paddingHorizontal: 15 },
  mainImage: { width: width * 0.6, height: 320 },
  controlsRow: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center', marginVertical: 25 },
  stepper: { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderColor: '#EEE', paddingBottom: 5 },
  qtyText: { marginHorizontal: 20, fontSize: 18, fontWeight: '500' },
  sizeToggles: { flexDirection: 'row' },
  sizeBtn: { paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20, marginLeft: 8, backgroundColor: '#FFF', borderWidth: 1, borderColor: '#EEE' },
  activeSize: { backgroundColor: '#1A1A1A', borderColor: '#1A1A1A' },
  infoSection: { paddingHorizontal: 20 },
  description: { lineHeight: 22, color: '#666', fontSize: 14 },
  divider: { height: 1, backgroundColor: '#EEE', marginVertical: 20 },
  meta: { marginBottom: 10 },
  metaLabel: { fontSize: 12, color: '#AAA', marginBottom: 8 },
  metaValue: { color: '#000', fontWeight: '600' },
  footer: { position: 'absolute', bottom: 0, width: '100%', padding: 20, backgroundColor: '#F9F9F7' },
  addToCartBtn: { backgroundColor: '#1A1A1A', padding: 18, borderRadius: 8, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  btnText: { color: '#FFF', fontWeight: '600', fontSize: 16 }
});

export default ProductDetails;