import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Filter, Search, Grid2x2 as Grid, List } from 'lucide-react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const PRODUCTS = [
  {
    id: 1,
    title: 'Elegant Evening Dress',
    description: 'Sophisticated black dress perfect for special occasions',
    price: 1299,
    priceRange: '₹1000 - ₹1499',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Dresses',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 2,
    title: 'Classic Silk Blouse',
    description: 'Timeless silk blouse in elegant ivory',
    price: 899,
    priceRange: '₹800 - ₹999',
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Tops',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 3,
    title: 'Premium Cashmere Coat',
    description: 'Luxurious cashmere coat for winter elegance',
    price: 2499,
    priceRange: '₹1500+',
    image: 'https://images.pexels.com/photos/7679725/pexels-photo-7679725.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Outerwear',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 4,
    title: 'Designer Midi Skirt',
    description: 'Pleated midi skirt in soft beige tone',
    price: 749,
    priceRange: '₹500 - ₹799',
    image: 'https://images.pexels.com/photos/7679727/pexels-photo-7679727.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Skirts',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 5,
    title: 'Tailored Blazer',
    description: 'Sharp tailored blazer for professional elegance',
    price: 1199,
    priceRange: '₹1000 - ₹1499',
    image: 'https://images.pexels.com/photos/7679729/pexels-photo-7679729.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Blazers',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 6,
    title: 'Flowing Maxi Dress',
    description: 'Ethereal maxi dress for summer elegance',
    price: 1099,
    priceRange: '₹1000 - ₹1499',
    image: 'https://images.pexels.com/photos/7679731/pexels-photo-7679731.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Dresses',
    sizes: ['XS', 'S', 'M', 'L'],
  },
];

const PRICE_RANGES = [
  'All',
  '₹299 - ₹499',
  '₹500 - ₹799',
  '₹800 - ₹999',
  '₹1000 - ₹1499',
  '₹1500+',
];

export default function ShopScreen() {
  const router = useRouter();
  const { priceRange } = useLocalSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  useEffect(() => {
    if (priceRange && typeof priceRange === 'string') {
      setSelectedPriceRange(decodeURIComponent(priceRange));
    }
  }, [priceRange]);

  useEffect(() => {
    let filtered = PRODUCTS;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by price range
    if (selectedPriceRange !== 'All') {
      filtered = filtered.filter(product => product.priceRange === selectedPriceRange);
    }

    setFilteredProducts(filtered);
  }, [searchQuery, selectedPriceRange]);

  const renderGridItem = (product: typeof PRODUCTS[0], index: number) => (
    <Animated.View
      key={product.id}
      entering={FadeInDown.delay(index * 100)}
      style={styles.gridItem}
    >
      <TouchableOpacity
        style={styles.productCard}
        onPress={() => router.push(`/product/${product.id}`)}
      >
        <Image
          source={{ uri: product.image }}
          style={styles.gridProductImage}
          resizeMode="cover"
        />
        <View style={styles.productInfo}>
          <Text style={styles.productCategory}>{product.category}</Text>
          <Text style={styles.productTitle} numberOfLines={2}>{product.title}</Text>
          <Text style={styles.productPrice}>₹{product.price}</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );

  const renderListItem = (product: typeof PRODUCTS[0], index: number) => (
    <Animated.View
      key={product.id}
      entering={FadeInDown.delay(index * 50)}
    >
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => router.push(`/product/${product.id}`)}
      >
        <Image
          source={{ uri: product.image }}
          style={styles.listProductImage}
          resizeMode="cover"
        />
        <View style={styles.listProductInfo}>
          <Text style={styles.listProductCategory}>{product.category}</Text>
          <Text style={styles.listProductTitle}>{product.title}</Text>
          <Text style={styles.listProductDescription} numberOfLines={2}>
            {product.description}
          </Text>
          <Text style={styles.listProductPrice}>₹{product.price}</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Shop</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity
            style={[styles.viewToggle, viewMode === 'grid' && styles.viewToggleActive]}
            onPress={() => setViewMode('grid')}
          >
            <Grid size={20} color={viewMode === 'grid' ? '#ffffff' : '#8B4513'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.viewToggle, viewMode === 'list' && styles.viewToggleActive]}
            onPress={() => setViewMode('list')}
          >
            <List size={20} color={viewMode === 'list' ? '#ffffff' : '#8B4513'} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search size={20} color="#999999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#999999"
          />
        </View>
      </View>

      {/* Price Filter */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
        contentContainerStyle={styles.filterContent}
      >
        {PRICE_RANGES.map((range) => (
          <TouchableOpacity
            key={range}
            style={[
              styles.filterChip,
              selectedPriceRange === range && styles.filterChipActive
            ]}
            onPress={() => setSelectedPriceRange(range)}
          >
            <Text style={[
              styles.filterChipText,
              selectedPriceRange === range && styles.filterChipTextActive
            ]}>
              {range}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Results */}
      <View style={styles.resultsHeader}>
        <Text style={styles.resultsCount}>
          {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
        </Text>
      </View>

      {/* Products */}
      <ScrollView
        style={styles.productsContainer}
        showsVerticalScrollIndicator={false}
      >
        {viewMode === 'grid' ? (
          <View style={styles.gridContainer}>
            {filteredProducts.map(renderGridItem)}
          </View>
        ) : (
          <View style={styles.listContainer}>
            {filteredProducts.map(renderListItem)}
          </View>
        )}

        {filteredProducts.length === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateTitle}>No products found</Text>
            <Text style={styles.emptyStateText}>
              Try adjusting your search or filter criteria
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5dc',
  },
  headerTitle: {
    fontSize: 28,
    fontFamily: 'PlayfairDisplay-Bold',
    color: '#8B4513',
    letterSpacing: 1,
  },
  headerActions: {
    flexDirection: 'row',
    gap: 8,
  },
  viewToggle: {
    padding: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#8B4513',
  },
  viewToggleActive: {
    backgroundColor: '#8B4513',
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: '#333333',
  },
  filterContainer: {
    paddingVertical: 8,
  },
  filterContent: {
    paddingHorizontal: 20,
    gap: 12,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#ffffff',
  },
  filterChipActive: {
    backgroundColor: '#8B4513',
    borderColor: '#8B4513',
  },
  filterChipText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: '#666666',
  },
  filterChipTextActive: {
    color: '#ffffff',
  },
  resultsHeader: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  resultsCount: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: '#666666',
  },
  productsContainer: {
    flex: 1,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  gridItem: {
    width: (width - 30) / 2,
    margin: 5,
  },
  productCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productInfo: {
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 14,
    gap: 4,
  },
  productTitle: {
    fontSize: 15,
    fontFamily: 'PlayfairDisplay-SemiBold',
    color: '#333333',
    marginBottom: 4,
    lineHeight: 20,
  },
  productPrice: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#8B4513',
    marginTop: 2,
  },
  gridProductImage: {
    width: '100%',
    height: 200,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  productCategory: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: '#999999',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 16,
  },
  listItem: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  listProductImage: {
    width: 120,
    height: 120,
  },
  listProductInfo: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  listProductCategory: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: '#999999',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  listProductTitle: {
    fontSize: 16,
    fontFamily: 'PlayfairDisplay-SemiBold',
    color: '#333333',
    marginVertical: 4,
  },
  listProductDescription: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: '#666666',
    lineHeight: 18,
    marginBottom: 8,
  },
  listProductPrice: {
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
    color: '#8B4513',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyStateTitle: {
    fontSize: 20,
    fontFamily: 'PlayfairDisplay-SemiBold',
    color: '#333333',
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: '#666666',
    textAlign: 'center',
  },
});