import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

type Props = {
  source: ImageSourcePropType;
  text: string;
  active?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
};

const CarouselItem = ({ source, text, active, onPress }: Props) => {
  return (
    <TouchableOpacity activeOpacity={active ? 1 : 0.7} onPress={onPress}>
      <View style={[styles.item, active && styles.activeItem]}>
        <Image
          style={[styles.image, active && styles.activeImage]}
          source={source}
        />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CarouselItem;

const styles = StyleSheet.create({
  item: {
    width: 180,
    height: 140,
    margin: 10,
    borderRadius: 14,
  },
  activeItem: {
    width: 180,
    height: 140,
    margin: 10,
    borderRadius: 14,
    backgroundColor: '#F89F1E',
    boxShadow: '0px 5px 10px 0px rgba(255, 151, 0, 0.30)',
  },
  image: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
  activeImage: {
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 0,
  },
  text: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
});
