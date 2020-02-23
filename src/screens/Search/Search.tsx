import React from 'react';
import { View } from 'react-native';
import SelectSearch from '../../components/Search/SelectSearch';

function Search(): JSX.Element {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <SelectSearch />
    </View>
  );
}

export default Search;
