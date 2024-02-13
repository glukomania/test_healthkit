import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import Svg, { Circle, CircleProps } from 'react-native-svg';
import Animated, {useAnimatedProps, useSharedValue, withTiming} from 'react-native-reanimated'
import { AntDesign } from '@expo/vector-icons';

const AnimatedCircle = Animated.createAnimatedComponent(Circle)


type RingProgressProps = {
  radius?: number
  strokeWidth?: number
  progress: number
}

const color = '#EF0F55'

const RingProgress = ({
  radius = 100, 
  strokeWidth = 35, 
  progress
}: RingProgressProps) => {

  const innerRadius = radius - strokeWidth / 2
  const circumference = 2 * Math.PI * innerRadius

  const fill = useSharedValue(0.6)
  const animatedProps = useAnimatedProps(()=> ({
    strokeDasharray: [circumference * fill.value, circumference]
  }))

  const circleDefaultProps: CircleProps = {
    r: innerRadius,
    cx: radius,
    cy: radius,
    originX: radius,
    originY: radius,

    strokeWidth: strokeWidth,
    stroke: color,
    strokeLinecap: 'round' 
  }

  useEffect(() => {
    fill.value = withTiming(progress, {duration: 1500})
  }, [progress])

  return (
    <View style={{width: radius * 2, height: radius * 2, alignSelf: 'center'}}>
     <Svg>
      {/* filling */}
      <AntDesign name="arrowright" size={24} color="black" style={{position: 'absolute', top: strokeWidth/6, alignSelf: 'center'}}/>
      <AnimatedCircle 
        animatedProps={animatedProps}
        {... circleDefaultProps}
        // strokeDasharray= {[circumference * progress, circumference]}
        rotation='-90' 

      />
      {/* background */}
      <Circle 
        {...circleDefaultProps}
        opacity={0.2} 
      />

    </Svg>
    </View>
  )
}

export default RingProgress

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    padding: 12,
  },
  values: {
    flexDirection: 'row', 
    gap: 25,
    flexWrap: 'wrap'
  },

});
