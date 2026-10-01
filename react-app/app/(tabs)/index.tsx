import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  Platform,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Menu, ShoppingBag, ChevronRight, X } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import Animated, {
  FadeInDown,
  FadeInUp,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
} from 'react-native-reanimated';
import { DrawerLayout } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

const FEATURED_PRODUCTS = [
  {
    id: 1,
    title: 'Elegant Evening Dress',
    price: '₹1,299',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Dresses',
  },
  {
    id: 2,
    title: 'Classic Silk Blouse',
    price: '₹899',
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Tops',
  },
  {
    id: 3,
    title: 'Premium Cashmere Coat',
    price: '₹2,499',
    image: 'https://images.pexels.com/photos/7679725/pexels-photo-7679725.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Outerwear',
  },
];

const PRICE_CATEGORIES = [
  '₹299 - ₹499',
  '₹500 - ₹799',
  '₹800 - ₹999',
  '₹1000 - ₹1499',
  '₹1500+',
];

export default function HomeScreen() {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const scrollY = useSharedValue(0);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [0, 100], [1, 0.9]);
    const translateY = interpolate(scrollY.value, [0, 100], [0, -10]);

    return {
      opacity,
      transform: [{ translateY }],
    };
  });

  const renderNavigationView = () => (
    <View style={styles.drawerContent}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerTitle}>Shelby Hiver</Text>
        <Text style={styles.drawerSubtitle}>Premium Fashion</Text>
      </View>

      <View style={styles.drawerSection}>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => {
            setDrawerOpen(false);
            router.push('/(tabs)');
          }}
        >
          <Text style={styles.drawerItemText}>Home</Text>
        </TouchableOpacity>

        <Text style={styles.drawerSectionTitle}>Price Categories</Text>
        {PRICE_CATEGORIES.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.drawerItem}
            onPress={() => {
              setDrawerOpen(false);
              router.push(`/(tabs)/shop?priceRange=${encodeURIComponent(category)}`);
            }}
          >
            <Text style={styles.drawerItemText}>{category}</Text>
            <ChevronRight size={16} color="#8B4513" />
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => {
            setDrawerOpen(false);
            router.push('/(tabs)/profile');
          }}
        >
          <Text style={styles.drawerItemText}>Contact Us</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => {
            setDrawerOpen(false);
            router.push('/(tabs)/profile');
          }}
        >
          <Text style={styles.drawerItemText}>About Shelby Hiver</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderWebModal = () => (
    <Modal
      visible={drawerOpen}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setDrawerOpen(false)}
    >
      <View style={styles.webModalOverlay}>
        <View style={styles.webModalContent}>
          <TouchableOpacity
            style={styles.webModalClose}
            onPress={() => setDrawerOpen(false)}
          >
            <X size={24} color="#8B4513" />
          </TouchableOpacity>
          {renderNavigationView()}
        </View>
      </View>
    </Modal>
  );

  const renderMainContent = () => (
    <SafeAreaView style={styles.container}>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={(event) => {
          scrollY.value = event.nativeEvent.contentOffset.y;
        }}
        scrollEventThrottle={16}
      >
        {/* Header */}
        <Animated.View entering={FadeInUp.delay(100)} style={[styles.header, headerAnimatedStyle]}>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => setDrawerOpen(true)}
          >
            <Menu size={28} color="#8B4513" />
          </TouchableOpacity>
          <View style={styles.brand}>
            <Image
              source={require('../../assets/images/ShelbyHiverLogo1.png')}
              style={styles.brandImage}
              resizeMode="contain"
            />
            <Text style={styles.brandName}>Shelby Hiver</Text>
          </View>
          <TouchableOpacity style={styles.bagButton}>
            <ShoppingBag size={28} color="#8B4513" />
          </TouchableOpacity>
        </Animated.View>

        {/* Hero Section */}
        <Animated.View entering={FadeInDown.delay(200)} style={styles.heroSection}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1200',
            }}
            style={styles.heroImage}
            resizeMode="cover"
          />
          <View style={styles.heroOverlay}>
            <Animated.Text
              entering={FadeInUp.delay(800)}
              style={styles.heroTagline}
            >
              Timeless Elegance
            </Animated.Text>
            <Animated.Text
              entering={FadeInUp.delay(1000)}
              style={styles.heroSubtitle}
            >
              Crafted by Shelby Hiver
            </Animated.Text>
            <Animated.View entering={FadeInUp.delay(1200)}>
              <TouchableOpacity
                style={styles.heroButton}
                onPress={() => router.push('/(tabs)/shop')}
              >
                <Text style={styles.heroButtonText}>Explore Collection</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </Animated.View>

        {/* Featured Products */}
        <View style={styles.featuredSection}>
          <Animated.Text
            entering={FadeInDown.delay(400)}
            style={styles.sectionTitle}
          >
            Featured Collection
          </Animated.Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.featuredContainer}
          >
            {FEATURED_PRODUCTS.map((product, index) => (
              <Animated.View
                key={product.id}
                entering={FadeInDown.delay(600 + index * 100)}
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
                    <Text style={styles.productCategory}>{product.category}</Text>
                    <Text style={styles.productTitle}>{product.title}</Text>
                    <Text style={styles.productPrice}>{product.price}</Text>
                  </View>
                </TouchableOpacity>
              </Animated.View>
            ))}
          </ScrollView>
        </View>

        {/* Brand Story */}
        <Animated.View
          entering={FadeInDown.delay(800)}
          style={styles.storySection}
        >
          <Text style={styles.storyTitle}>Our Legacy</Text>
          <Text style={styles.storyText}>
            Since our inception, Shelby Hiver has been dedicated to creating
            timeless pieces that embody sophistication and elegance. Each garment
            is meticulously crafted with attention to detail and quality that
            stands the test of time.
          </Text>
          <TouchableOpacity
            style={styles.storyButton}
            onPress={() => router.push('/(tabs)/profile')}
          >
            <Text style={styles.storyButtonText}>Learn More</Text>
            <ChevronRight size={16} color="#8B4513" />
          </TouchableOpacity>
        </Animated.View>
      </Animated.ScrollView>

      {/* Web Modal for navigation */}
      {Platform.OS === 'web' && renderWebModal()}
    </SafeAreaView>
  );

  // Platform-specific rendering
  if (Platform.OS === 'web') {
    return renderMainContent();
  }

  // Native platforms use DrawerLayout
  return (
    <DrawerLayout
      ref={(drawer) => {
        if (drawer) {
          if (drawerOpen) {
            drawer.openDrawer();
          } else {
            drawer.closeDrawer();
          }
        }
      }}
      drawerWidth={280}
      drawerPosition="left"
      drawerType="slide"
      renderNavigationView={renderNavigationView}
      onDrawerClose={() => setDrawerOpen(false)}
    >
      {renderMainContent()}
    </DrawerLayout>
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
  },
  menuButton: {
    padding: 8,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandImage: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  brandName: {
    fontSize: 24,
    fontFamily: 'PlayfairDisplay-Bold',
    color: '#8B4513',
    letterSpacing: 1,
  },
  bagButton: {
    padding: 8,
  },
  heroSection: {
    height: height * 0.6,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heroTagline: {
    fontSize: 42,
    fontFamily: 'PlayfairDisplay-Bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: 1.5,
  },
  heroSubtitle: {
    fontSize: 18,
    fontFamily: 'Montserrat-Light',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 32,
    letterSpacing: 2,
  },
  heroButton: {
    backgroundColor: '#f5f5dc',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 0,
  },
  heroButtonText: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#8B4513',
    letterSpacing: 1,
  },
  featuredSection: {
    paddingVertical: 40,
  },
  sectionTitle: {
    fontSize: 28,
    fontFamily: 'PlayfairDisplay-SemiBold',
    color: '#8B4513',
    textAlign: 'center',
    marginBottom: 32,
    letterSpacing: 1,
  },
  featuredContainer: {
    paddingHorizontal: 20,
    gap: 20,
  },
  productCard: {
    width: 280,
    backgroundColor: '#ffffff',
    borderRadius: 0,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  productImage: {
    width: '100%',
    height: 320,
  },
  productInfo: {
    padding: 20,
  },
  productCategory: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: '#999999',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 18,
    fontFamily: 'PlayfairDisplay-SemiBold',
    color: '#333333',
    marginBottom: 8,
    lineHeight: 24,
  },
  productPrice: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    color: '#8B4513',
  },
  storySection: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#f5f5dc',
    marginHorizontal: 20,
    marginBottom: 40,
  },
  storyTitle: {
    fontSize: 28,
    fontFamily: 'PlayfairDisplay-SemiBold',
    color: '#8B4513',
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 1,
  },
  storyText: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: '#666666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
  },
  storyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  storyButtonText: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#8B4513',
    letterSpacing: 1,
  },
  drawerContent: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  drawerHeader: {
    paddingVertical: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5dc',
    marginBottom: 20,
  },
  drawerTitle: {
    fontSize: 28,
    fontFamily: 'PlayfairDisplay-Bold',
    color: '#8B4513',
    letterSpacing: 1,
  },
  drawerSubtitle: {
    fontSize: 14,
    fontFamily: 'Montserrat-Light',
    color: '#999999',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginTop: 4,
  },
  drawerSection: {
    flex: 1,
  },
  drawerSectionTitle: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: '#8B4513',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginTop: 32,
    marginBottom: 16,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f9f9f9',
  },
  drawerItemText: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: '#333333',
  },
  // Web-specific modal styles
  webModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
  },
  webModalContent: {
    width: 280,
    height: '100%',
    backgroundColor: '#ffffff',
    position: 'relative',
  },
  webModalClose: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
    padding: 8,
  },
});