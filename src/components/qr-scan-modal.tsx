import React, {FC, useCallback, useMemo, useRef} from 'react';
// import {View} from 'react-native';
import Modal from 'react-native-modal';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {
  Linking,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  useColorScheme,
  ViewStyle,
  TextStyle,
  Alert,
} from 'react-native';
import {COLORS, SCREEN_WIDTH} from '../utils/global-styles';

interface QRScanModalProps {
  isVisible: boolean;
  toggleIsVisible: () => void;
}

const QRScanModal: FC<QRScanModalProps> = ({isVisible, toggleIsVisible}) => {
  const isDark = useColorScheme() === 'dark';
  const qrCameraRef = useRef<QRCodeScanner | null>(null);

  const backgroundColor = useMemo<ViewStyle>(
    () => ({
      backgroundColor: isDark ? COLORS.darker : COLORS.lighter,
    }),
    [isDark],
  );
  const textColor = useMemo<TextStyle>(
    () => ({
      color: isDark ? COLORS.light : COLORS.dark,
    }),
    [isDark],
  );

  const onRead = useCallback(
    event => {
      Linking.openURL(event.data)
        .then(toggleIsVisible)
        .catch(() =>
          Alert.alert('An error has occurred', 'Invalid URL!', [
            {
              text: 'OK',
              onPress: () => qrCameraRef.current?.reactivate(),
              style: 'cancel',
            },
          ]),
        );
    },
    [toggleIsVisible],
  );

  const topContent = useMemo(
    () => (
      <View style={[styles.topContent, backgroundColor]}>
        <Text style={[styles.centerText, textColor]}>
          Please point your camera to the QR code of the page
        </Text>
      </View>
    ),
    [backgroundColor, textColor],
  );
  const bottomContent = useMemo(
    () => (
      <TouchableOpacity
        style={[styles.bottomContent, backgroundColor]}
        onPress={toggleIsVisible}>
        <Text style={styles.buttonText}>Dismiss</Text>
      </TouchableOpacity>
    ),
    [backgroundColor, toggleIsVisible],
  );

  return (
    <Modal
      style={styles.modal}
      isVisible={isVisible}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}>
      <QRCodeScanner
        ref={qrCameraRef}
        cameraStyle={styles.camera}
        onRead={onRead}
        topContent={topContent}
        bottomContent={bottomContent}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  centerText: {
    fontSize: 18,
    padding: 32,
    textAlign: 'center',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    flex: 1,
    backgroundColor: 'red',
    width: SCREEN_WIDTH,
    alignItems: 'center',
    padding: 16,
  },
  camera: {
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH,
    overflow: 'hidden',
  },
  topContent: {
    backgroundColor: 'white',
    flex: 1,
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContent: {
    backgroundColor: 'white',
    flex: 1,
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default QRScanModal;
