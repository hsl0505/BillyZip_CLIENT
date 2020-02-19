import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import axiosInstance from '../../util/axiosInstance';
import MoreListEntry from '../../components/MainScreen/MoreListEntry';

function FavorScreen(): JSX.Element {
  const [favHouses, setFavHouses] = useState();

  useEffect(() => {
    axiosInstance
      .get('favs')
      .then((res) => {
        setFavHouses(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {favHouses ? <MoreListEntry favHouses={favHouses} isFav="f" /> : <View />}
    </View>
  );
}

export default FavorScreen;
