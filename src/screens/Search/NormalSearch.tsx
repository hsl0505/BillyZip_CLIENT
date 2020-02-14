import React from 'react';
import { StyleSheet, View } from 'react-native';
import NormalSearchForm from '../../components/Search/NormalSearchForm';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

function NormalSearch(): JSX.Element {
  return (
    <View style={styles.container}>
      <NormalSearchForm />
    </View>
  );
}

export default NormalSearch;
