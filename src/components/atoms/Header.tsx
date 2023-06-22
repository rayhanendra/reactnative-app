import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';

interface Props {
  avatar: ImageSourcePropType;
  fullname: string;
  verified: boolean;
  bio: string;
  location: string;
  email: string;
}

const Header: React.FC<Props> = ({
  avatar,
  fullname,
  verified,
  bio,
  location,
  email,
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={avatar} />
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.fullname}>{fullname}</Text>
          {verified && (
            <Image
              style={styles.verifiedIcon}
              source={require('../../assets/images/verified.png')}
            />
          )}
        </View>
        <Text style={styles.bio}>{bio}</Text>
        <View style={styles.detailsContainer}>
          <View style={styles.detailLocation}>
            <Image source={require('../../assets/images/location.png')} />
            <Text style={styles.detailLocationText}>{location}</Text>
          </View>
          <View style={styles.detailEmail}>
            <Image source={require('../../assets/images/email.png')} />
            <Text style={styles.detailEmailText}>{email}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#cfcfcf',
    flexDirection: 'row',
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 50,
    marginRight: 20,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fullname: {
    fontSize: 20,
    fontWeight: '600',
  },
  verifiedIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  bio: {
    marginVertical: 6,
    color: '#969696',
    fontSize: 12,
    fontWeight: '600',
  },
  detailsContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  detailLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailLocationText: {
    marginLeft: 5,
    color: '#969696',
    fontSize: 11,
  },
  detailEmail: {
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailEmailText: {
    marginLeft: 5,
    color: '#969696',
    fontSize: 11,
  },
});

export default Header;
