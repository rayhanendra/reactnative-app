import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../atoms/Header';
import AddItem, { IItem } from '../atoms/AddItem';
import Item from '../atoms/Item';
import Carousel from '../atoms/Carousel';

type Props = {};

const HomePage = (props: Props) => {
  const [shoppingList, setShoppingList] = React.useState<IItem[]>([]);

  return (
    <View>
      <Header
        avatar={{ uri: 'https://avatars.githubusercontent.com/u/17571969?v=4' }}
        fullname='John Doe'
        verified={true}
        bio='Professional Food Photographer'
        location='London, UK'
        email='test@gmail.com'
      />
      <Carousel />
      <View style={styles.contentWrapper}></View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  contentWrapper: {
    padding: 20,
  },
});
