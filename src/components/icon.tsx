import React, {FC} from 'react';
import {Image, ImageStyle} from 'react-native';
import ICONS from '../assets/icons';
import {SPACING} from '../utils/global-styles';

type IconTypes = keyof typeof ICONS;

interface IconProps {
  icon: IconTypes;
  size?: number;
  color?: string;
}

const Icon: FC<IconProps> = ({icon, size = SPACING[3], color = '#000'}) => {
  const iconStyle: ImageStyle = {
    tintColor: color,
    width: size,
    height: size,
    resizeMode: 'contain',
  };
  return <Image source={ICONS[icon]} style={iconStyle} />;
};

export default Icon;
