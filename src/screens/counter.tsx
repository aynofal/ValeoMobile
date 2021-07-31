import React, {FC, useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  useColorScheme,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {COLORS, CONTAINER, SPACING, TEXT_PRESETS} from '../utils/global-styles';
import Icon from '../components/icon';
import {useNavigation, useRoute} from '@react-navigation/native';
import Button from '../components/button';
import QRScanModal from '../components/qr-scan-modal';
import {useCounterStore} from '../stores/counter-store';
import {CounterScreenRouteProp} from '../navigation/root-navigator';

const CounterScreen: FC = () => {
  const isDark = useColorScheme() === 'dark';
  const {heading} = TEXT_PRESETS(isDark);
  const mainColor: string = isDark ? COLORS.light : COLORS.dark;
  const navigation = useNavigation();
  const {navigate} = navigation;
  const route = useRoute<CounterScreenRouteProp>();
  const {params} = route;
  const currentCount = useCounterStore(store => store.count);
  const addToCount = useCounterStore(store => store.addToCount);

  // Param Listener
  useEffect(() => {
    const toAdd = params?.toAdd;
    if (toAdd) {
      addToCount(parseInt(toAdd, 10));
    }
  }, [addToCount, params]);

  // State Vars
  const [isQRModalVisible, setIsQRModalVisible] = useState<boolean>(false);
  const toggleIsQRModalVisible = useCallback(
    () => setIsQRModalVisible(prev => !prev),
    [],
  );

  return (
    <View style={[CONTAINER(isDark), styles.container]}>
      <TouchableOpacity
        style={styles.backButtonContainer}
        onPress={() => navigate('Home')}>
        <Icon icon={'BACK_ICON'} color={mainColor} size={SPACING[4]} />
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <Text style={[heading, styles.headingText]}>Counter Value</Text>
        <Text style={[styles.counterText, {color: mainColor}]}>
          {currentCount}
        </Text>
        <Button
          buttonText={'Open QR Scanner'}
          onPress={toggleIsQRModalVisible}
        />
      </View>
      <QRScanModal
        isVisible={isQRModalVisible}
        toggleIsVisible={toggleIsQRModalVisible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SPACING[3],
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    textAlign: 'center',
    marginBottom: SPACING[1],
  },
  counterText: {
    fontSize: SPACING[5],
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: SPACING[3],
  },
  backButtonContainer: {
    width: SPACING[4],
  },
});

export default CounterScreen;
