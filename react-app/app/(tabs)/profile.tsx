import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  MessageCircle,
  ExternalLink,
  Star,
  Award,
  Users,
  Clock
} from 'lucide-react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com/shelbyhiver',
    handle: '@shelbyhiver',
    color: '#E4405F',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://facebook.com/shelbyhiver',
    handle: 'Shelby Hiver Fashion',
    color: '#1877F2',
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    url: 'https://wa.me/919876543210',
    handle: '+91 98765 43210',
    color: '#25D366',
  },
];

const BRAND_STATS = [
  { icon: Star, label: 'Premium Quality', value: '5★ Rating' },
  { icon: Award, label: 'Years of Excellence', value: '10+' },
  { icon: Users, label: 'Happy Customers', value: '50K+' },
  { icon: Clock, label: 'Quick Delivery', value: '2-3 Days' },
];

export default function ProfileScreen() {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  const renderSocialLink = (social: typeof SOCIAL_LINKS[0], index: number) => (
    <Animated.View
      key={social.name}
      entering={FadeInDown.delay(400 + index * 100)}
    >
      <TouchableOpacity
        style={[styles.socialCard, { borderLeftColor: social.color }]}
        onPress={() => openLink(social.url)}
      >
        <View style={[styles.socialIcon, { backgroundColor: social.color }]}>
          <social.icon size={24} color="#ffffff" />
        </View>
        <View style={styles.socialInfo}>
          <Text style={styles.socialName}>{social.name}</Text>
          <Text style={styles.socialHandle}>{social.handle}</Text>
        </View>
        <ExternalLink size={20} color="#999999" />
      </TouchableOpacity>
    </Animated.View>
  );

  const renderStat = (stat: typeof BRAND_STATS[0], index: number) => (
    <Animated.View
      key={stat.label}
      entering={FadeInDown.delay(600 + index * 100)}
      style={styles.statCard}
    >
      <View style={styles.statIcon}>
        <stat.icon size={24} color="#8B4513" />
      </View>
      <Text style={styles.statValue}>{stat.value}</Text>
      <Text style={styles.statLabel}>{stat.label}</Text>
    </Animated.View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Animated.View
          entering={FadeInDown.delay(100)}
          style={styles.header}
        >
          <Text style={styles.headerTitle}>Profile</Text>
        </Animated.View>

        {/* Brand Section */}
        <Animated.View
          entering={FadeInDown.delay(200)}
          style={styles.brandSection}
        >
          <Image
            source={require('../../assets/images/ShelbyHiverLogo1.png')}
            style={styles.brandImage}
            resizeMode="contain"
          />
          <View style={styles.brandInfo}>
            <Text style={styles.brandName}>Shelby Hiver</Text>
            <Text style={styles.brandTagline}>Timeless Elegance</Text>
            <Text style={styles.brandDescription}>
              Crafting premium fashion pieces that embody sophistication and elegance.
              Each garment is meticulously designed with attention to detail and quality
              that stands the test of time.
            </Text>
          </View>
        </Animated.View>

        {/* Stats */}
        <Animated.View
          entering={FadeInDown.delay(300)}
          style={styles.statsSection}
        >
          <Text style={styles.sectionTitle}>Why Choose Us</Text>
          <View style={styles.statsGrid}>
            {BRAND_STATS.map(renderStat)}
          </View>
        </Animated.View>

        {/* About */}
        <Animated.View
          entering={FadeInDown.delay(400)}
          style={styles.aboutSection}
        >
          <Text style={styles.sectionTitle}>About Shelby Hiver</Text>
          <Text style={styles.aboutText}>
            Founded with a vision to redefine modern elegance, Shelby Hiver represents
            the perfect fusion of timeless design and contemporary fashion. Our collections
            are inspired by the sophisticated woman who values quality, style, and
            authenticity.
          </Text>
          <Text style={styles.aboutText}>
            From carefully selected fabrics to meticulous craftsmanship, every piece
            in our collection tells a story of dedication to excellence. We believe
            that true fashion transcends trends and creates lasting impressions.
          </Text>
        </Animated.View>

        {/* Contact */}
        <Animated.View
          entering={FadeInDown.delay(500)}
          style={styles.contactSection}
        >
          <Text style={styles.sectionTitle}>Contact Us</Text>

          <View style={styles.contactInfo}>
            <View style={styles.contactItem}>
              <Mail size={20} color="#8B4513" />
              <Text style={styles.contactText}>hello@shelbyhiver.com</Text>
            </View>
            <View style={styles.contactItem}>
              <Phone size={20} color="#8B4513" />
              <Text style={styles.contactText}>+91 98765 43210</Text>
            </View>
            <View style={styles.contactItem}>
              <MapPin size={20} color="#8B4513" />
              <Text style={styles.contactText}>Mumbai, Maharashtra, India</Text>
            </View>
          </View>
        </Animated.View>

        {/* Social Media */}
        <Animated.View
          entering={FadeInDown.delay(600)}
          style={styles.socialSection}
        >
          <Text style={styles.sectionTitle}>Connect With Us</Text>
          <View style={styles.socialList}>
            {SOCIAL_LINKS.map(renderSocialLink)}
          </View>
        </Animated.View>

        {/* Footer */}
        <Animated.View
          entering={FadeInDown.delay(700)}
          style={styles.footer}
        >
          <Text style={styles.footerText}>
            © 2024 Shelby Hiver. All rights reserved.
          </Text>
          <Text style={styles.footerSubtext}>
            Crafted with love for fashion enthusiasts
          </Text>
        </Animated.View>
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
  brandSection: {
    padding: 20,
    alignItems: 'center',
  },
  brandImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  brandInfo: {
    alignItems: 'center',
  },
  brandName: {
    fontSize: 32,
    fontFamily: 'PlayfairDisplay-Bold',
    color: '#8B4513',
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  brandTagline: {
    fontSize: 16,
    fontFamily: 'Montserrat-Light',
    color: '#666666',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 16,
  },
  brandDescription: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: '#666666',
    textAlign: 'center',
    lineHeight: 24,
  },
  statsSection: {
    paddingHorizontal: 20,
    paddingVertical: 32,
    backgroundColor: '#f9f9f9',
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: 'PlayfairDisplay-SemiBold',
    color: '#8B4513',
    textAlign: 'center',
    marginBottom: 24,
    letterSpacing: 1,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  statCard: {
    width: '47%',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f5f5dc',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  statValue: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    color: '#8B4513',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: '#666666',
    textAlign: 'center',
  },
  aboutSection: {
    paddingHorizontal: 20,
    paddingVertical: 32,
  },
  aboutText: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: '#666666',
    lineHeight: 24,
    marginBottom: 16,
    textAlign: 'justify',
  },
  contactSection: {
    paddingHorizontal: 20,
    paddingVertical: 32,
    backgroundColor: '#f9f9f9',
  },
  contactInfo: {
    gap: 16,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  contactText: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: '#333333',
  },
  socialSection: {
    paddingHorizontal: 20,
    paddingVertical: 32,
  },
  socialList: {
    gap: 12,
  },
  socialCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  socialIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  socialInfo: {
    flex: 1,
  },
  socialName: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#333333',
    marginBottom: 2,
  },
  socialHandle: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: '#666666',
  },
  footer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 32,
    backgroundColor: '#f5f5dc',
  },
  footerText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: '#8B4513',
    textAlign: 'center',
    marginBottom: 4,
  },
  footerSubtext: {
    fontSize: 12,
    fontFamily: 'Montserrat-Light',
    color: '#999999',
    textAlign: 'center',
  },
});