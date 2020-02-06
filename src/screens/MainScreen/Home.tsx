import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import Recommend from '../../components/MainScreen/Recommend';
import HouseList from '../../components/MainScreen/HouseList';

const styles = StyleSheet.create({
  case1: {
    flex: 1,
  },
  case2: {
    flex: 1,
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

function Home(): JSX.Element {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.case1}>
          <Recommend />
        </View>
        <View style={styles.case2}>
          <HouseList />
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;
