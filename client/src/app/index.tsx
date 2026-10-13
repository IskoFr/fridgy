import { Image, Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ScanProductsCard } from '@/components/scan-products-card';

const COLORS = {
  background: '#F6FAFC',
  text: '#0A141A',
  textSecondary: '#546871',
} as const;

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent />

      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <View style={styles.content}>
          <Image
            accessibilityLabel="Fridgy"
            resizeMode="contain"
            source={require('../../assets/img/logo.png')}
            style={styles.logo}
          />

          <View style={styles.intro}>
            <Text style={styles.greeting}>Добрый вечер</Text>
            <Text style={styles.heading}>Что приготовим сегодня?</Text>
          </View>

          <ScanProductsCard />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    width: '100%',
    maxWidth: 390,
    alignSelf: 'center',
    paddingTop: Platform.select({ web: 27, default: 3 }),
    paddingHorizontal: 20,
  },
  logo: {
    width: 65,
    height: 52,
    marginLeft: 4,
  },
  intro: {
    marginTop: 22,
    marginHorizontal: 4,
    gap: 8,
  },
  greeting: {
    color: COLORS.textSecondary,
    fontFamily: 'Manrope_400Regular',
    fontSize: 12,
    lineHeight: 16,
  },
  heading: {
    color: COLORS.text,
    fontFamily: 'Manrope_700Bold',
    fontSize: 26,
    lineHeight: 36,
  },
});
