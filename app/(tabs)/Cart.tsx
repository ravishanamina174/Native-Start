import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Minus, Plus, Truck } from 'lucide-react-native';
import { PRODUCTS } from '../../data';

const CartScreen = () => {
  const [items, setItems] = useState([
    { ...PRODUCTS[0], qty: 1 },
    { ...PRODUCTS[3], qty: 1 }
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}><Text style={styles.headerTitle}>My cart</Text></View>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 100 }}>
        <Text style={styles.count}>{items.length} Items</Text>
        {items.map((item) => (
          <View key={item.id} style={styles.itemCard}>
            <Image source={{ uri: item.image }} style={styles.img} resizeMode="contain" />
            <View style={{ flex: 1, marginLeft: 15 }}>
              <Text style={styles.brand}>{item.brand}</Text>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            </View>
            <View style={styles.stepper}>
              <Minus size={14} color="#000" />
              <Text style={{ fontWeight: '600', marginHorizontal: 8 }}>{item.qty}</Text>
              <Plus size={14} color="#000" />
            </View>
          </View>
        ))}
        {/* Pricing Summary matching your screenshot */}
        <View style={styles.footerInfo}>
            <View style={styles.row}><Text>Total Amount</Text><Text style={styles.total}>$358.00</Text></View>
            <View style={styles.promoRow}>
                <TextInput placeholder="Enter promo code" style={styles.input} />
                <TouchableOpacity style={styles.applyBtn}><Text style={{color:'#FFF'}}>Apply</Text></TouchableOpacity>
            </View>
            <View style={styles.shipping}><Truck size={16} color="#666" /><Text style={styles.shipText}>Free Shipping applied over $299.00</Text></View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.checkoutBtn}><Text style={styles.checkText}>Checkout</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9F7', paddingTop: 60 },
  header: { alignItems: 'center', paddingBottom: 20 },
  headerTitle: { fontSize: 16, fontWeight: '600' },
  count: { color: '#888', marginBottom: 15 },
  itemCard: { flexDirection: 'row', alignItems: 'center', marginBottom: 20, borderBottomWidth: 1, borderBottomColor: '#EEE', paddingBottom: 20 },
  img: { width: 50, height: 70 },
  brand: { fontWeight: '700', fontSize: 16 },
  name: { color: '#666', fontSize: 14 },
  price: { color: '#888', marginTop: 4 },
  stepper: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', padding: 8, borderRadius: 20, borderWidth: 1, borderColor: '#EEE' },
  footerInfo: { marginTop: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  total: { fontSize: 20, fontWeight: '700' },
  promoRow: { flexDirection: 'row' },
  input: { flex: 1, backgroundColor: '#FFF', padding: 12, borderRadius: 4, borderWidth: 1, borderColor: '#EEE' },
  applyBtn: { backgroundColor: '#1A1A1A', paddingHorizontal: 20, justifyContent: 'center', marginLeft: 10, borderRadius: 4 },
  shipping: { flexDirection: 'row', marginTop: 15, alignItems: 'center' },
  shipText: { fontSize: 12, color: '#666', marginLeft: 8 },
  checkoutBtn: { position: 'absolute', bottom: 30, left: 20, right: 20, backgroundColor: '#1A1A1A', padding: 18, borderRadius: 8, alignItems: 'center' },
  checkText: { color: '#FFF', fontWeight: '700' }
});

// IMPORTANT: This line fixes the "missing default export" warning
export default CartScreen;