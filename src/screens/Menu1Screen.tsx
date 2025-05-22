import { ScreenWrapper } from '@/shared/ui';
import { Popup } from '@/widgets/popup/Popup';
import { BlurView } from '@react-native-community/blur';
import { Text, View, StyleSheet, Platform, Image } from 'react-native';

export const Menu1Screen: React.FC = () => {
  return (
    <>
    <ScreenWrapper>
      <View style={styles.menuContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Карта</Text>
          <Text>Выберите объект</Text>
        </View>
        <Image
          source={require('../../../../assets/Logo-Ujin-dark 1.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </ScreenWrapper>
    </>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    width: "100%",
    height: 76,
    paddingVertical: 8,
    paddingHorizontal: 18,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.54)',
    ...Platform.select({
      ios: {
        // Для iOS можно использовать blur эффект
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowRadius: 5.7,
      },
      android: {
        // Для Android потребуется дополнительный компонент
        elevation: 2,
      },
    }),
  },
  card: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardTitle: {
    color: '#000000', 
    fontFamily: 'Mont-Bold',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 36,
    letterSpacing: 0.4,
  },
  cardSubtitle: {
    color: '#717171',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: -0.08,
    fontWeight: '500',
  },
  image: {
    
  }
});
