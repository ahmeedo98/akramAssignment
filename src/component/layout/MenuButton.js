import React from 'react';
import { Icon, Button } from 'native-base';
import { SafeAreaView } from 'react-native';
import styles from '../../../styles/homestyle';

const MenuButton = ({ navigation }) => (
  <SafeAreaView style={styles.droidSafeArea}>
    <Button transparent style={{ paddingLeft: 0 }} onPress={() => navigation.openDrawer()}>
      <Icon name="ios-menu" />
    </Button>
  </SafeAreaView>
);

export default MenuButton;
