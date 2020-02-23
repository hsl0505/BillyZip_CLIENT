import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Button, ButtonGroup, Input } from 'react-native-elements';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
import axiosInstance from '../../util/axiosInstance';

interface Props {
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

function NormalSearchForm(props: Props): JSX.Element {
  const { width } = Dimensions.get('window');
  const [selectedIdxPlan, setSiPlan] = useState();
  const [selectedIdxType, setSiType] = useState();
  const [selectedIdxYear, setSiYear] = useState();
  const [selectedIdxAccess, setSiAccess] = useState();
  const [plan, setPlan] = useState('');
  const [type, setType] = useState('');
  const [year, setYear] = useState('');
  const [access, setAccess] = useState('');
  const [adminDistrict, setDistrict] = useState('');

  const planButtons = ['전체', '30', '50', '70', '100', '150'];
  const typeButtons = ['전체', '원룸', '아파트', '빌라', '오피스텔', '주택'];
  const yearButtons = ['전체', '1년', '5년', '10년', '20년', '30년'];
  const accessButtons = ['전체', '5분', '10분', '20분', '30분', '60분'];

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', marginHorizontal: 15 }}>
      <View style={{ marginTop: 40, marginLeft: 15 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 26 }}>상세 검색</Text>
      </View>

      <View style={{ width, marginTop: 20 }}>
        <Input
          placeholder={`지역명을 입력해 주세요. ${'\n'}예: 성남시 / 부안군 / 강남구`}
          multiline
          textAlignVertical="top"
          label="지역명"
          clearButtonMode="always"
          labelStyle={{
            marginLeft: 8,
            marginBottom: 15,
            fontSize: 20,
            color: 'black',
          }}
          onChangeText={(text): void => setDistrict(text)}
          inputContainerStyle={{ marginHorizontal: 15 }}
        />
      </View>
      <View style={{ marginTop: 30, marginLeft: 15, marginRight: 15 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 15 }}>
          검색 옵션
        </Text>
        <Text style={{ marginLeft: 15, fontWeight: 'bold' }}>PLAN</Text>
        <ButtonGroup
          selectedIndex={selectedIdxPlan}
          buttons={planButtons}
          onPress={(e): void => {
            setSiPlan(e);
            setPlan(planButtons[e]);
          }}
          selectedButtonStyle={{ backgroundColor: 'purple' }}
        />
        <Text style={{ marginLeft: 15, marginTop: 10, fontWeight: 'bold' }}>
          종류
        </Text>
        <ButtonGroup
          selectedIndex={selectedIdxType}
          buttons={typeButtons}
          onPress={(e): void => {
            setSiType(e);
            setType(typeButtons[e]);
          }}
          selectedButtonStyle={{ backgroundColor: 'purple' }}
        />
        <Text style={{ marginLeft: 15, marginTop: 10, fontWeight: 'bold' }}>
          건축 연식 (이내)
        </Text>
        <ButtonGroup
          selectedIndex={selectedIdxYear}
          buttons={yearButtons}
          onPress={(e): void => {
            setSiYear(e);
            setYear(yearButtons[e]);
          }}
          selectedButtonStyle={{ backgroundColor: 'purple' }}
        />
        <Text style={{ marginLeft: 15, marginTop: 10, fontWeight: 'bold' }}>
          주변 지하철/역까지 시간 (이내)
        </Text>
        <ButtonGroup
          selectedIndex={selectedIdxAccess}
          buttons={accessButtons}
          onPress={(e): void => {
            setSiAccess(e);
            setAccess(accessButtons[e]);
          }}
          selectedButtonStyle={{ backgroundColor: 'purple' }}
        />
      </View>
      <View style={{ marginTop: 25 }}>
        <Button
          title="검색하기"
          titleStyle={{ color: 'purple' }}
          buttonStyle={{ width: 200, alignSelf: 'center' }}
          type="clear"
          onPress={(): void => {
            axiosInstance
              .post('houses/filter', {
                plan: plan === '' ? null : plan,
                type: type === '' ? null : type,
                year: year === '' ? null : year,
                access: access === '' ? null : access,
                adminDistrict: adminDistrict === '' ? null : adminDistrict,
              })
              .then((res) => {
                if (res.status === 200) {
                  props.navigation.navigate('SearchResult', { data: res.data });
                }
              })
              .catch((err) => console.error(err));
          }}
        />
      </View>
    </View>
  );
}

export default withNavigation(NormalSearchForm);
