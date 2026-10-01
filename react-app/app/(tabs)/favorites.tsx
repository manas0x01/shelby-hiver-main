import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Heart, ShoppingBag } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const FAVORITE_PRODUCTS = [
  {
    id: 1,
    title: 'Elegant Evening Dress',
    description: 'Sophisticated black dress perfect for special occasions',
    price: 1299,
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Dresses',
  },
  {
    id: 3,
    title: 'Premium Cashmere Coat',
    description: 'Luxurious cashmere coat for winter elegance',
    price: 2499,
    image: 'https://images.pexels.com/photos/7679725/pexels-photo-7679725.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Outerwear',
  },
  {
    id: 5,
    title: 'Tailored Blazer',
    description: 'Sharp tailored blazer for professional elegance',
    price: 1199,
    image: 'https://images.pexels.com/photos/7679729/pexels-photo-7679729.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Blazers',
  },
];

export default function FavoritesScreen() {
  const router = useRouter();
  const [favorites, setFavorites] = useState(FAVORITE_PRODUCTS);

  const removeFavorite = (productId: number) => {
    setFavorites(prev => prev.filter(item => item.id !== productId));
  };

  const renderFavoriteItem = (product: typeof FAVORITE_PRODUCTS[0], index: number) => (
    <Animated.View 
      key={product.id}
      entering={FadeInDown.delay(index * 100)}
      style={styles.favoriteItem}
    >
      <TouchableOpacity
        style={styles.productCard}
        onPress={() => router.push(`/product/${product.id}`)}
      >
        <Image 
          source={{ uri: product.image }}
          style={styles.productImage}
          resizeMode="cover"
        />
        <View style={styles.productInfo}>
          <View style={styles.productHeader}>
            <View style={styles.productDetails}>
              <Text style={styles.productCategory}>{product.category}</Text>
              <Text style={styles.productTitle}>{product.title}</Text>
              <Text style={styles.productDescription} numberOfLines={2}>
                {product.description}
              </Text>
              <Text style={styles.productPrice}>₹{product.price}</Text>
            </View>
            <TouchableOpacity
              style={styles.favoriteButton}
              onPress={() => removeFavorite(product.id)}
            >
              <Heart size={24} color="#ff4757" fill="#ff4757" />
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity 
            style={styles.addToCartButton}
            onPress={() => router.push(`/product/${product.id}`)}
          >
            <ShoppingBag size={16} color="#ffffff" />
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Favorites</Text>
        <Text style={styles.headerSubtitle}>
          {favorites.length} {favorites.length === 1 ? 'item' : 'items'}
        </Text>
      </View>

      {favorites.length > 0 ? (
        <ScrollView 
          style={styles.favoritesContainer}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.favoritesContent}
        >
          {favorites.map(renderFavoriteItem)}
        </ScrollView>
      ) : (
        <View style={styles.emptyState}>
          <Heart size={64} color="#e0e0e0" />
          <Text style={styles.emptyStateTitle}>No favorites yet</Text>
          <Text style={styles.emptyStateText}>
            Browse our collection and add items to your favorites
          </Text>
          <TouchableOpacity 
            style={styles.shopButton}
            onPress={() => router.push('/(tabs)/shop')}
          >
            <Text style={styles.shopButtonText}>Start Shopping</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
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
  headerSubtitle: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: '#666666',
    marginTop: 4,
  },
  favoritesContainer: {
    flex: 1,
  },
  favoritesContent: {
    padding: 20,
    gap: 20,
  },
  favoriteItem: {
    backgroundColor: '#ffffff',
  },
  productCard: {
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    backgroundColor: '#ffffff',
  },
  productImage: {
    width: '100%',
    height: 200,
  },
  productInfo: {
    padding: 20,
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  productDetails: {
    flex: 1,
    marginRight: 16,
  },
  productCategory: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: '#999999',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  productTitle: {
    fontSize: 18,
    fontFamily: 'PlayfairDisplay-SemiBold',
    color: '#333333',
    marginBottom: 8,
    lineHeight: 24,
  },
  productDescription: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: '#666666',
    lineHeight: 20,
    marginBottom: 12,
  },
  productPrice: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    color: '#8B4513',
  },
  favoriteButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#f9f9f9',
  },
  addToCartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8B4513',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    gap: 8,
  },
  addToCartText: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#ffffff',
    letterSpacing: 0.5,
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  emptyStateTitle: {
    fontSize: 24,
    fontFamily: 'PlayfairDisplay-SemiBold',
    color: '#333333',
    marginTop: 24,
    marginBottom: 12,
  },
  emptyStateText: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: '#666666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
  },
  shopButton: {
    backgroundColor: '#8B4513',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 6,
  },
  shopButtonText: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#ffffff',
    letterSpacing: 0.5,
  },
});