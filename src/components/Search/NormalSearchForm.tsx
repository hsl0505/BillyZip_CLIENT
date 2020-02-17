import React, { useState } from 'react';
import { View } from 'react-native';
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
  const [selectedIdxPlan, setSiPlan] = useState();
  const [selectedIdxType, setSiType] = useState();
  const [selectedIdxYear, setSiYear] = useState();
  const [selectedIdxAccess, setSiAccess] = useState();
  const [plan, setPlan]: any = useState(null);
  const [type, setType]: any = useState(null);
  const [year, setYear]: any = useState(null);
  const [access, setAccess]: any = useState(null);
  const [adminDistrict, setDistrict]: any = useState(null);

  const planButtons = ['전체', '30', '50', '70', '100', '150'];
  const typeButtons = ['전체', '원룸', '아파트', '빌라', '오피스텔', '주택'];
  const yearButtons = [
    '전체',
    '1년 이내',
    '5년 이내',
    '10년 이내',
    '20년 이내',
    '30년 이내',
  ];
  const accessButtons = [
    '전체',
    '5분 이내',
    '10분 이내',
    '20분 이내',
    '30분 이내',
    '60분 이내',
  ];

  return (
    <View>
      <View>
        <Input
          placeholder="지역명을 입력해 주세요. 예: 성남시 / 부안군 / 강남구"
          label="지역명"
          labelStyle={{ alignSelf: 'center' }}
          onChangeText={(text): void => setDistrict(text)}
        />
      </View>
      <View>
        <ButtonGroup
          selectedIndex={selectedIdxPlan}
          buttons={planButtons}
          containerStyle={{ width: 390 }}
          onPress={(e): void => {
            setSiPlan(e);
            setPlan(planButtons[e]);
          }}
        />
        <ButtonGroup
          selectedIndex={selectedIdxType}
          buttons={typeButtons}
          containerStyle={{ width: 390 }}
          onPress={(e): void => {
            setSiType(e);
            setType(typeButtons[e]);
          }}
        />
        <ButtonGroup
          selectedIndex={selectedIdxYear}
          buttons={yearButtons}
          containerStyle={{ width: 390 }}
          onPress={(e): void => {
            setSiYear(e);
            setYear(yearButtons[e]);
          }}
        />
        <ButtonGroup
          selectedIndex={selectedIdxAccess}
          buttons={accessButtons}
          containerStyle={{ width: 390 }}
          onPress={(e): void => {
            setSiAccess(e);
            setAccess(accessButtons[e]);
          }}
        />
      </View>
      <View>
        <Button
          title="검색하기"
          type="solid"
          onPress={(): void => {
            axiosInstance
              .post('houses/filter', {
                plan,
                type,
                year,
                access,
                adminDistrict,
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
