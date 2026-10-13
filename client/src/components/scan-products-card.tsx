import { Pressable, StyleSheet, Text, View } from 'react-native';

const COLORS = {
  background: '#EAF7FD',
  accent: '#168CE1',
  button: '#1479C9',
  text: '#0A141A',
  textSecondary: '#546871',
  white: '#FFFFFF',
} as const;

export function ScanProductsCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.eyebrow}>AI-помощник</Text>

      <View style={styles.body}>
        <View style={styles.copy}>
          <Text style={styles.title}>{'Покажи холодильник -\nнайду ужин за минуту'}</Text>
          <Text style={styles.description}>
            Сфотографируй продукты, и Fridgy предложит простые рецепты из того, что уже есть.
          </Text>
        </View>

        <Pressable
          accessibilityRole="button"
          onPress={() => undefined}
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
          <Text style={styles.buttonLabel}>Сканировать продукты</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 220,
    marginTop: 31,
    paddingTop: 20,
    paddingRight: 25,
    paddingBottom: 16,
    paddingLeft: 30,
    borderRadius: 24,
    backgroundColor: COLORS.background,
  },
  eyebrow: {
    color: COLORS.accent,
    fontFamily: 'Manrope_600SemiBold',
    fontSize: 12,
    lineHeight: 16,
  },
  body: {
    marginTop: 14,
    gap: 18,
  },
  copy: {
    gap: 10,
  },
  title: {
    color: COLORS.text,
    fontFamily: 'Manrope_700Bold',
    fontSize: 20,
    lineHeight: 27,
  },
  description: {
    color: COLORS.textSecondary,
    fontFamily: 'Manrope_400Regular',
    fontSize: 12,
    lineHeight: 16,
  },
  button: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: COLORS.button,
  },
  buttonPressed: {
    opacity: 0.86,
  },
  buttonLabel: {
    color: COLORS.white,
    fontFamily: 'Manrope_600SemiBold',
    fontSize: 13,
    lineHeight: 18,
  },
});
