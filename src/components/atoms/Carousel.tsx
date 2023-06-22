import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { images } from '../../../data/data';
// import CarouselItem from './CarouselItem';

type Props = {};

const { width } = Dimensions.get('window');
//you need to preview n items.
const previewCount = 1;
//to center items
//the screen will show `previewCount` + 1/4 firstItemWidth + 1/4 lastItemWidth
//so for example if previewCount = 3
//itemWidth will be =>>> itemWidth = screenWidth / (3 + 1/4 + 1/4)
const itemWidth = width / (previewCount + 0.5);
//to center items you start from 3/4 firstItemWidth
// const startScroll = (itemWidth * 3) / 4;
// const startScroll = itemWidth * 0.5 - width / 2;
const startScroll = itemWidth * 0.9;

const Carousel = (props: Props) => {
  const [activeIndex, setActiveIndex] = React.useState(1);
  const [scaleAnimation] = React.useState(new Animated.Value(1));

  const flatlistRef = React.useRef() as React.MutableRefObject<FlatList>;

  React.useEffect(() => {
    if (flatlistRef.current)
      flatlistRef.current.scrollToOffset({
        offset: startScroll,
        animated: false,
      });
  }, [flatlistRef]);

  const snapToOffsets = images.map((x, i) => {
    return i * itemWidth + startScroll;
  });

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const middleIndex = Math.round(contentOffsetX / itemWidth);
    setActiveIndex(middleIndex);
  };

  const handleOnPress = (index: number) => {
    if (flatlistRef.current)
      flatlistRef.current.scrollToOffset({
        offset: index * itemWidth + startScroll,
        animated: true,
      });
  };

  //   React.useEffect(() => {
  //     if (activeIndex !== -1) {
  //       Animated.timing(scaleAnimation, {
  //         toValue: 0.5,
  //         duration: 300,
  //         useNativeDriver: true,
  //       }).start(() => {
  //         Animated.timing(scaleAnimation, {
  //           toValue: 1,
  //           duration: 300,
  //           useNativeDriver: true,
  //         }).start();
  //       });
  //     }
  //   }, [activeIndex]);

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            activeOpacity={activeIndex === index ? 1 : 0.7}
            onPress={() => handleOnPress(index)}
          >
            <Animated.View
              style={[
                styles.item,
                activeIndex === index && styles.activeItem,
                { transform: [{ scale: scaleAnimation }] },
              ]}
            >
              <Image
                style={[
                  styles.image,
                  activeIndex === index && styles.activeImage,
                ]}
                source={{ uri: item.img }}
              />
              {activeIndex === index && (
                <Text style={styles.text}>{item.text}</Text>
              )}
            </Animated.View>
          </TouchableOpacity>
        )}
        contentContainerStyle={{
          alignItems: 'center',
          //   backgroundColor: 'red',
        }}
        ref={flatlistRef}
        pagingEnabled={true}
        horizontal={true}
        decelerationRate={0}
        snapToOffsets={snapToOffsets}
        snapToAlignment={'center'}
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
      />
    </View>
  );
};

export default Carousel;

//   <CarouselItem
//     active={activeIndex === index}
//     source={{ uri: item.img }}
//     text={item.text}
//   />

const styles = StyleSheet.create({
  item: {
    width: itemWidth - 20,
    margin: 10,
    borderRadius: 14,
    alignItems: 'center',
  },
  activeItem: {
    height: 140,
    margin: 10,
    borderRadius: 14,
    backgroundColor: '#F89F1E',
    transform: [{ scaleX: 2 }],
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
