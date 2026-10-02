import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Share,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ArrowLeft,
  Heart,
  Share2,
  ShoppingBag,
  Star,
  Minus,
  Plus
} from 'lucide-react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const PRODUCT_DATA = {
  1: {
    id: 1,
    title: 'Elegant Evening Dress',
    description: 'This sophisticated black dress is perfect for special occasions. Crafted from premium fabric with meticulous attention to detail, it features a timeless silhouette that flatters every figure. The dress embodies the essence of Shelby Hiver\'s commitment to elegance and quality.',
    price: 1299,
    originalPrice: 1599,
    images: [
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7679725/pexels-photo-7679725.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    category: 'Dresses',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Burgundy'],
    rating: 4.8,
    reviews: 124,
    features: [
      'Premium quality fabric',
      'Hand-finished seams',
      'Comfortable fit',
      'Dry clean only',
      'Made in India',
    ],
  },
  // Add more products as needed
};

export default function ProductDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const productId = parseInt(id as string);
  const product = PRODUCT_DATA[productId as keyof typeof PRODUCT_DATA];

  if (!product) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Product not found</Text>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const handleShare = () => {
    Share.share({
      message: `Check out this ${product.title} from Shelby Hiver - ₹${product.price}`,
      url: `https://shelbyhiver.com/product/${product.id}`,
    });
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    if (!selectedColor) {
      alert('Please select a color');
      return;
    }
    // Add to cart logic here
    alert('Added to cart successfully!');
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    if (!selectedColor) {
      alert('Please select a color');
      return;
    }
    // Navigate to checkout or open WhatsApp
    const message = `Hi! I'd like to order the ${product.title} in ${selectedColor}, size ${selectedSize}. Quantity: ${quantity}`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;

    import('expo-web-browser').then(WebBrowser => {
      WebBrowser.openBrowserAsync(whatsappUrl);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Animated.View entering={FadeInUp.delay(100)} style={styles.header}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => router.back()}
        >
          <ArrowLeft size={24} color="#8B4513" />
        </TouchableOpacity>
        <View style={styles.headerActions}>
          <TouchableOpacity
            style={styles.headerButton}
            onPress={handleShare}
          >
            <Share2 size={24} color="#8B4513" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerButton}
            onPress={() => setIsFavorite(!isFavorite)}
          >
            <Heart
              size={24}
              color={isFavorite ? "#ff4757" : "#8B4513"}
              fill={isFavorite ? "#ff4757" : "none"}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Product Images */}
        <Animated.View entering={FadeInDown.delay(200)}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(event) => {
              const index = Math.round(event.nativeEvent.contentOffset.x / width);
              setSelectedImageIndex(index);
            }}
          >
            {product.images.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={styles.productImage}
                resizeMode="cover"
              />
            ))}
          </ScrollView>

          {/* Image Indicators */}
          <View style={styles.imageIndicators}>
            {product.images.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  selectedImageIndex === index && styles.activeIndicator
                ]}
              />
            ))}
          </View>
        </Animated.View>

        {/* Product Info */}
        <View style={styles.productInfo}>
          <Animated.View entering={FadeInDown.delay(300)}>
            <Text style={styles.category}>{product.category}</Text>
            <Text style={styles.title}>{product.title}</Text>

            {/* Rating */}
            <View style={styles.ratingContainer}>
              <View style={styles.rating}>
                <Star size={16} color="#FFD700" fill="#FFD700" />
                <Text style={styles.ratingText}>{product.rating}</Text>
              </View>
              <Text style={styles.reviewsText}>({product.reviews} reviews)</Text>
            </View>

            {/* Price */}
            <View style={styles.priceContainer}>
              <Text style={styles.price}>₹{product.price}</Text>
              {product.originalPrice && (
                <Text style={styles.originalPrice}>₹{product.originalPrice}</Text>
              )}
              <View style={styles.discount}>
                <Text style={styles.discountText}>
                  {Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)}% OFF
                </Text>
              </View>
            </View>
          </Animated.View>

          {/* Size Selection */}
          <Animated.View entering={FadeInDown.delay(400)} style={styles.section}>
            <Text style={styles.sectionTitle}>Size</Text>
            <View style={styles.optionsContainer}>
              {product.sizes.map((size) => (
                <TouchableOpacity
                  key={size}
                  style={[
                    styles.optionButton,
                    selectedSize === size && styles.selectedOption
                  ]}
                  onPress={() => setSelectedSize(size)}
                >
                  <Text style={[
                    styles.optionText,
                    selectedSize === size && styles.selectedOptionText
                  ]}>
                    {size}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </Animated.View>

          {/* Color Selection */}
          <Animated.View entering={FadeInDown.delay(500)} style={styles.section}>
            <Text style={styles.sectionTitle}>Color</Text>
            <View style={styles.optionsContainer}>
              {product.colors.map((color) => (
                <TouchableOpacity
                  key={color}
                  style={[
                    styles.optionButton,
                    selectedColor === color && styles.selectedOption
                  ]}
                  onPress={() => setSelectedColor(color)}
                >
                  <Text style={[
                    styles.optionText,
                    selectedColor === color && styles.selectedOptionText
                  ]}>
                    {color}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </Animated.View>

          {/* Quantity */}
          <Animated.View entering={FadeInDown.delay(600)} style={styles.section}>
            <Text style={styles.sectionTitle}>Quantity</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus size={20} color="#8B4513" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => setQuantity(quantity + 1)}
              >
                <Plus size={20} color="#8B4513" />
              </TouchableOpacity>
            </View>
          </Animated.View>

          {/* Description */}
          <Animated.View entering={FadeInDown.delay(700)} style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{product.description}</Text>
          </Animated.View>

          {/* Features */}
          <Animated.View entering={FadeInDown.delay(800)} style={styles.section}>
            <Text style={styles.sectionTitle}>Features</Text>
            {product.features.map((feature, index) => (
              <View key={index} style={styles.featureItem}>
                <View style={styles.featureBullet} />
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
          </Animated.View>
        </View>
      </ScrollView>

      {/* Bottom Actions */}
      <Animated.View entering={FadeInUp.delay(900)} style={styles.bottomActions}>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={handleAddToCart}
        >
          <ShoppingBag size={20} color="#8B4513" />
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buyNowButton}
          onPress={handleBuyNow}
        >
          <Text style={styles.buyNowText}>Buy Now</Text>
        </TouchableOpacity>
      </Animated.View>
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
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5dc',
  },
  headerButton: {
    padding: 8,
  },
  headerActions: {
    flexDirection: 'row',
    gap: 8,
  },
  productImage: {
    width: width,
    height: width * 1.2,
  },
  imageIndicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 16,
    gap: 8,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#e0e0e0',
  },
  activeIndicator: {
    backgroundColor: '#8B4513',
  },
  productInfo: {
    padding: 20,
  },
  category: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: '#999999',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontFamily: 'PlayfairDisplay-Bold',
    color: '#333333',
    marginBottom: 12,
    lineHeight: 36,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#333333',
  },
  reviewsText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: '#666666',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
    gap: 12,
  },
  price: {
    fontSize: 32,
    fontFamily: 'Montserrat-Bold',
    color: '#8B4513',
  },
  originalPrice: {
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    color: '#999999',
    textDecorationLine: 'line-through',
  },
  discount: {
    backgroundColor: '#ff4757',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  discountText: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: '#ffffff',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'PlayfairDisplay-SemiBold',
    color: '#333333',
    marginBottom: 16,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  optionButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#ffffff',
  },
  selectedOption: {
    borderColor: '#8B4513',
    backgroundColor: '#8B4513',
  },
  optionText: {
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    color: '#333333',
  },
  selectedOptionText: {
    color: '#ffffff',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  quantityButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#8B4513',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityText: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    color: '#333333',
    minWidth: 40,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: '#666666',
    lineHeight: 24,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 12,
  },
  featureBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#8B4513',
  },
  featureText: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: '#666666',
  },
  bottomActions: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#f5f5dc',
    gap: 12,
  },
  addToCartButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#8B4513',
    backgroundColor: '#ffffff',
    gap: 8,
  },
  addToCartText: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#8B4513',
  },
  buyNowButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 6,
    backgroundColor: '#8B4513',
  },
  buyNowText: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#ffffff',
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  errorText: {
    fontSize: 20,
    fontFamily: 'PlayfairDisplay-SemiBold',
    color: '#333333',
    marginBottom: 24,
  },
  backButton: {
    backgroundColor: '#8B4513',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 6,
  },
  backButtonText: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#ffffff',
  },
});