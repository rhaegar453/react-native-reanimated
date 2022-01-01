import React from 'react';
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Animated, {
    interpolate,
    interpolateColor,
    measure,
    runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Chevron from '../../../assets/chevronW.png';
import ListItem, { LIST_ITEM_HEIGHT } from '../ListItem';

const List = ({ label, items }) => {
  const open = useSharedValue(false);
  const transition = useDerivedValue(() => {
    return open.value ? withSpring(1) : withTiming(0, { duration: 300 });
  });

  const rotate=useDerivedValue(()=>{
      return interpolate(transition.value, [0,1],[0, 90])
  })
  const height = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value * transition.value + 1,
      opacity: transition.value === 0 ? 0 : 1,
    };
  });
  const rotateStyle=useAnimatedStyle(()=>{
      return{
          transform:[
              {
                rotateZ:`${rotate.value}deg`,
              }
          ],
          backgroundColor:interpolateColor(transition.value, [0,1], ['#5855DA','#22A12E'])
      }
  })
  const animatedRef = useAnimatedRef<View>();

  const handlePress=()=>{
      runOnUI(()=>{
          'worklet';
          height.value=LIST_ITEM_HEIGHT*items.length;
      })();
      open.value=!open.value;
  }

  return (
    <View >
        <TouchableWithoutFeedback onPress={handlePress}>
        <View style={style.container}>
        <Text>{label}</Text>
        <Animated.View style={[style.circle, rotateStyle]}>
          <Image style={style.image} source={Chevron} />
        </Animated.View>
      </View>
        </TouchableWithoutFeedback>
      <Animated.View style={animatedStyle}>
        <View ref={animatedRef}>
          {items.map((item, index) => (
            <ListItem title={item.title} key={index} amount={item.amount} />
          ))}
        </View>
      </Animated.View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
  },
  image: {
    height: 10,
    width: 10,
  },
  circle: {
    display: 'flex',
    alignSelf: 'flex-start',
    height: 25,
    width: 25,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 200,
  },
});

export default List;
