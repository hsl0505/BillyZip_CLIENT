import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import {
  MaterialCommunityIcons,
  Feather,
  MaterialIcons,
  FontAwesome,
  Entypo,
} from '@expo/vector-icons';
import { Rating, Button } from 'react-native-elements';
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';

interface Props {
  isFav: string;
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

function HouseDetailContent(props: Props): JSX.Element {
  const { width } = Dimensions.get('window');
  const { isFav } = props;
  const fakedata = {
    id: 1,
    plan: '30', //
    type: 'apart', //
    year: '1', //
    access: '1', //
    status: false, //
    display: true,
    startTime: 7, //
    endTime: 365, //
    location: ['1', '2'],
    adminDistrict:
      '강남구, xxx동, 123-45, FASTFIVE 삼성 3호점 12층 (서울특별시 강남구 테헤란로 503)', // FASTFIVE 삼성 3호점 12층 (서울특별시 강남구 테헤란로 503)
    title: '강남 미친 시티뷰와 미세먼지를 느껴보세요', //
    description:
      '50년 된 아파트인데 괜찮아 ? 50년 된 아파트인데 괜찮아 ? 50년 된 아파트인데 괜찮아 ? 50년 된 아파트인데 괜찮아 ? 50년 된 아파트인데 괜찮아 ?',
    houseRule: '혼숙 금지',
    isActive: true,
    createdAt: '2020-02-10T00:34:13.222Z',
    updatedAt: '2020-02-10T00:34:13.222Z',
    images: [
      {
        id: 1,
        filePath:
          'https://billyzip.s3.ap-northeast-2.amazonaws.com/1581327252989.jpg',
        fileName: 'unnamed.jpg',
        createdAt: '2020-02-10T00:34:13.348Z',
        updatedAt: '2020-02-10T00:34:13.348Z',
        isActive: true,
      },
      {
        id: 2,
        filePath:
          'https://billyzip.s3.ap-northeast-2.amazonaws.com/1581327252989.jpg',
        fileName: 'maxresdefault.jpg',
        createdAt: '2020-02-10T00:34:13.396Z',
        updatedAt: '2020-02-10T00:34:13.396Z',
        isActive: true,
      },
      {
        id: 3,
        filePath:
          'https://billyzip.s3.ap-northeast-2.amazonaws.com/1581327252993.jpg',
        fileName: '2c7cb48c0ea2c1e83d12159f6bd811c6.jpg',
        createdAt: '2020-02-10T00:34:13.450Z',
        updatedAt: '2020-02-10T00:34:13.450Z',
        isActive: true,
      },
    ],
    reviews: [
      {
        id: 1,
        comment: '와 진짜 여기 살아봤는데 사진 사기입니다;;',
        rating: 1,
        createdAt: '2020-02-10T00:35:56.789Z',
        updatedAt: '2020-02-10T00:35:56.789Z',
        isActive: true,
      },
      {
        id: 2,
        comment: '근데 왜 자기가 올린 집을 욕하고 있지..?',
        rating: 5,
        createdAt: '2020-02-10T00:36:31.863Z',
        updatedAt: '2020-02-10T00:36:31.863Z',
        isActive: true,
      },
    ],
    amenity: {
      id: 1,
      secondFloor: true,
      parking: true,
      aircon: true,
      autoLock: false,
      tv: true,
      bed: true,
      washing: false,
      allowPet: false,
      createdAt: '2020-02-10T00:34:13.180Z',
      updatedAt: '2020-02-10T00:34:13.180Z',
      isActive: true,
    },
    user: {
      id: 1,
      email: '1',
      password: '$2b$10$BWxxf8DXFtjAglV.aW9bfe9hMVzteJwWkX/JLbctj72IKSbc4Grs2',
      name: 'jo',
      mobile: '010-1111-2222',
      gender: 'male',
      birth: '2020-12-31',
      currentPlan: null,
      expiry: 3,
      livingHouse: null,
      isActive: true,
      createdAt: '2020-02-11T05:55:37.754Z',
      updatedAt: '2020-02-11T05:55:37.754Z',
    },
    avgRating: 4.4,
    favsNow: true,
  };

  const {
    title,
    type,
    description,
    adminDistrict,
    plan,
    year,
    status,
    avgRating,
    reviews,
    access,
    startTime,
    endTime,
    houseRule,
    amenity,
    user,
  } = fakedata;

  const { name } = user;

  const isTrueAmenity: string[] = [];
  Object.entries(amenity).forEach((ele) => {
    if (ele[1] === true && ele[0] !== 'isActive') {
      isTrueAmenity.push(ele[0]);
    }
  });

  // const amenityIconName: AmenityIconName = {
  //   secondFloor: 'stairs',
  //   parking: 'parking',
  //   aircon: 'air-conditioner',
  //   autoLock: 'lock-smart',
  //   tv: 'television-classic',
  //   bed: 'bed-empty',
  //   washing: 'shower',
  //   allowPet: 'paw',
  // };

  return (
    <View style={{ flex: 1, marginHorizontal: 15, marginBottom: 25 }}>
      <View style={{ flex: 1, marginTop: 25 }}>
        <Text
          style={{
            fontSize: 35,
            fontWeight: 'bold',
          }}
        >
          {title}
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: 10,
          flex: 1,
          flexDirection: 'row',
        }}
      >
        <Rating
          readonly
          startingValue={avgRating}
          fractions={2}
          imageSize={25}
        />
        <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: 'bold' }}>
          {avgRating}
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: '#6E6E6E',
            marginLeft: 5,
          }}
        >
          ({reviews.length})
        </Text>
      </View>
      <View style={{ flex: 1, marginTop: 20 }}>
        <Text
          style={{
            fontSize: 20,
            fontStyle: 'italic',
            color: '#6E6E6E',
            width: width * 0.8,
          }}
        >
          호스트 {`  ${name}`} 님
        </Text>
      </View>
      <View
        style={{
          marginTop: 20,
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontStyle: 'italic',
            color: '#6E6E6E',
            width: width * 0.8,
          }}
        >
          {adminDistrict}
        </Text>
        <MaterialCommunityIcons
          name="map-marker-radius"
          size={30}
          color="#6E6E6E"
          style={{ marginRight: 15 }}
        />
      </View>
      <View
        style={{
          flex: 1,
          marginTop: 45,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Feather name="home" size={40} />
          <Text style={{ marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>
            {type.toUpperCase()}
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <MaterialIcons name="card-travel" size={40} />
          <Text style={{ marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>
            PLAN {plan}
          </Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <MaterialCommunityIcons name="shovel" size={40} />
          <Text style={{ marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>
            YEAR {year}
          </Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <FontAwesome
            name={status ? 'calendar-times-o' : 'calendar-check-o'}
            size={40}
            color={status ? 'red' : 'green'}
          />
          <Text style={{ marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>
            Available
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 80,
          flex: 1,
          borderStyle: 'solid',
          borderTopWidth: 1,
          borderTopColor: '#A4A4A4',
          paddingVertical: 30,
          marginHorizontal: 10,
          borderBottomColor: '#A4A4A4',
          borderBottomWidth: 1,
        }}
      >
        <MaterialCommunityIcons
          name="format-quote-open"
          size={20}
          color="#A4A4A4"
        />
        <Text
          style={{
            fontSize: 18,
            marginHorizontal: 15,
            color: '#A4A4A4',
            fontStyle: 'italic',
          }}
        >
          {description}
        </Text>
        <View style={{ alignSelf: 'flex-end' }}>
          <MaterialCommunityIcons
            name="format-quote-close"
            size={20}
            color="#A4A4A4"
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          marginTop: 80,
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 10 }}>
          DETAIL
        </Text>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View
            style={{
              marginTop: 20,
              justifyContent: 'center',
              alignItems: 'center',
              width: 80,
            }}
          >
            <MaterialIcons name="card-travel" size={34} />
            <Text style={{ fontWeight: 'bold' }}>PLAN {plan}</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', marginLeft: 20 }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
              구독 PLAN은 {plan} PLAN 입니다
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View
            style={{
              marginTop: 15,
              justifyContent: 'center',
              alignItems: 'center',
              width: 80,
            }}
          >
            <MaterialCommunityIcons name="shovel" size={34} />
            <Text style={{ fontWeight: 'bold' }}>YEAR {year}</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', marginLeft: 20 }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
              건물은 지어진지 {year}년 되었습니다
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View
            style={{
              marginTop: 15,
              justifyContent: 'center',
              alignItems: 'center',
              width: 80,
            }}
          >
            <MaterialCommunityIcons name="subway-variant" size={34} />
            <Text style={{ fontWeight: 'bold' }}>ACCESS {access}</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              marginLeft: 20,
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
              지하철 / 역까지 거리는 {access}분 이내
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View
            style={{
              marginTop: 15,
              justifyContent: 'center',
              alignItems: 'center',
              width: 80,
            }}
          >
            <MaterialCommunityIcons name="calendar-clock" size={34} />
            <Text style={{ fontWeight: 'bold' }}>DAY</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              marginLeft: 20,
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
              최소 거주 가능한 일자는 {startTime}일{'\n'}최대 거주 가능한 일자는{' '}
              {endTime}일
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View
            style={{
              marginTop: 15,
              justifyContent: 'center',
              alignItems: 'center',
              width: 80,
            }}
          >
            <Entypo name="address" size={34} />
            <Text style={{ fontWeight: 'bold' }}>ADDRESS</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              marginLeft: 20,
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
              주소는 {adminDistrict}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, marginTop: 80 }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            marginLeft: 10,
            marginBottom: 15,
          }}
        >
          House Rule
        </Text>
        <View
          style={{
            flex: 1,
            borderStyle: 'solid',
            borderTopWidth: 1,
            borderTopColor: '#A4A4A4',
            borderBottomWidth: 1,
            borderBottomColor: '#A4A4A4',
          }}
        >
          <Text
            style={{ marginLeft: 10, marginVertical: 20, fontStyle: 'italic' }}
          >
            {houseRule}
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 80 }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            marginLeft: 10,
            marginBottom: 15,
          }}
        >
          AMENITY
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ alignItems: 'center', width: width * 0.24 }}>
            <MaterialCommunityIcons
              name="stairs"
              size={40}
              color={
                isTrueAmenity.includes('secondFloor') ? 'green' : '#A4A4A4'
              }
            />
            <Text
              style={{
                fontWeight: 'bold',
                color: isTrueAmenity.includes('secondFloor')
                  ? 'green'
                  : '#A4A4A4',
                marginTop: 5,
              }}
            >
              Second Floor
            </Text>
          </View>
          <View style={{ alignItems: 'center', width: width * 0.22 }}>
            <MaterialCommunityIcons
              name="parking"
              size={40}
              color={isTrueAmenity.includes('parking') ? 'green' : '#A4A4A4'}
            />
            <Text
              style={{
                fontWeight: 'bold',
                color: isTrueAmenity.includes('parking') ? 'green' : '#A4A4A4',
                marginTop: 5,
              }}
            >
              Parking
            </Text>
          </View>
          <View style={{ alignItems: 'center', width: width * 0.22 }}>
            <MaterialCommunityIcons
              name="air-conditioner"
              size={40}
              color={isTrueAmenity.includes('aircon') ? 'green' : '#A4A4A4'}
            />
            <Text
              style={{
                fontWeight: 'bold',
                color: isTrueAmenity.includes('aircon') ? 'green' : '#A4A4A4',
                marginTop: 5,
              }}
            >
              Air-con
            </Text>
          </View>
          <View style={{ alignItems: 'center', width: width * 0.22 }}>
            <MaterialCommunityIcons
              name="lock-smart"
              size={40}
              color={isTrueAmenity.includes('autoLock') ? 'green' : '#A4A4A4'}
            />
            <Text
              style={{
                fontWeight: 'bold',
                color: isTrueAmenity.includes('autoLock') ? 'green' : '#A4A4A4',
                marginTop: 5,
              }}
            >
              AutoLock
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
          }}
        >
          <View style={{ alignItems: 'center', width: width * 0.24 }}>
            <MaterialCommunityIcons
              name="television-classic"
              size={40}
              color={isTrueAmenity.includes('tv') ? 'green' : '#A4A4A4'}
            />
            <Text
              style={{
                fontWeight: 'bold',
                color: isTrueAmenity.includes('tv') ? 'green' : '#A4A4A4',
                marginTop: 5,
              }}
            >
              TV
            </Text>
          </View>
          <View style={{ alignItems: 'center', width: width * 0.22 }}>
            <MaterialCommunityIcons
              name="bed-empty"
              size={40}
              color={isTrueAmenity.includes('bed') ? 'green' : '#A4A4A4'}
            />
            <Text
              style={{
                fontWeight: 'bold',
                color: isTrueAmenity.includes('bed') ? 'green' : '#A4A4A4',
                marginTop: 5,
              }}
            >
              Bed
            </Text>
          </View>
          <View style={{ alignItems: 'center', width: width * 0.22 }}>
            <MaterialCommunityIcons
              name="washing-machine"
              size={40}
              color={isTrueAmenity.includes('washing') ? 'green' : '#A4A4A4'}
            />
            <Text
              style={{
                fontWeight: 'bold',
                color: isTrueAmenity.includes('washing') ? 'green' : '#A4A4A4',
                marginTop: 5,
              }}
            >
              Washing
            </Text>
          </View>
          <View style={{ alignItems: 'center', width: width * 0.22 }}>
            <MaterialCommunityIcons
              name="paw"
              size={40}
              color={isTrueAmenity.includes('allowPet') ? 'green' : '#A4A4A4'}
            />
            <Text
              style={{
                fontWeight: 'bold',
                color: isTrueAmenity.includes('allowPet') ? 'green' : '#A4A4A4',
                marginTop: 5,
              }}
            >
              Allow Pet
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, marginTop: 70 }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            marginLeft: 10,
            marginBottom: 15,
          }}
        >
          Reviews
        </Text>
        <Text style={{ marginLeft: 10 }}>
          {reviews.length}개의 리뷰가 있습니다. 리뷰 평균은 {avgRating}점
          입니다.
        </Text>
        <Button
          title="리뷰 모두 보기"
          containerStyle={{ alignSelf: 'center' }}
          onPress={(): void => {
            props.navigation.navigate(
              isFav === 'f' ? 'FavorReview' : 'ReviewScreen',
            );
          }}
        />
      </View>
      <View style={{ flex: 1, marginTop: 40 }}>
        <Button title="신청하기" />
      </View>
    </View>
  );
}

export default withNavigation(HouseDetailContent);
