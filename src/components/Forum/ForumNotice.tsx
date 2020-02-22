import React, { useState } from 'react';
import { Overlay } from 'react-native-elements';
import { View, Text, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';

function ForumNotice(props: any): JSX.Element {
  const { width } = Dimensions.get('window');

  const [isVisible, setIsVisible] = useState(true);

  return (
    <View>
      <Overlay
        isVisible={isVisible}
        windowBackgroundColor="rgba(223, 230, 233,1.0)"
        width={width * 0.7}
        height="auto"
        overlayBackgroundColor="rgba(162, 155, 254,1.0)"
        onBackdropPress={() => {
          setIsVisible(false);
          props.navigation.navigate('Room');
        }}
      >
        <View>
          <Text>포럼 이용규칙</Text>
          <Text>
            {`
          - 욕설, 비속어 등 예의범절에 어긋나는 행동\n
          - 혐오스럽거나 다른 유저를 놀라게 하는 행동\n
          - 성적 비하를 포함하는 행동\n
          - 불건전한 만남, 대화 등을 목적으로 하는 행동\n
          - 논란 분란을 일으킬 수 있는 행동\n
          - 호스트를 사칭하는 행동\n
          - 기타 부적합한 행동
          `}
          </Text>
        </View>
      </Overlay>
    </View>
  );
}

export default withNavigation(ForumNotice);
