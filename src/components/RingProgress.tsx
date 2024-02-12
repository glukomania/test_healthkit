import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Svg, { Circle, Rect } from 'react-native-svg';

type RingProgressProps = {
  radius?: number
  strokeWidth?: number
  progress: number
}

const color = '#EF0F55'

const RingProgress = ({radius = 100, strokeWidth = 30, progress = 0}: RingProgressProps) => {

  const innerRadius = radius - strokeWidth/2
  const circumference = 2 * Math.PI * innerRadius
  return (
    <View style={{width: radius * 2, height: radius * 2, alignSelf: 'center'}}>
     <Svg>


      <Circle 
        r={innerRadius} 
        cx={radius} 
        cy={radius} 
        originX={radius} 
        originY={radius}

        strokeWidth={strokeWidth} 
        stroke={color} 
        strokeDasharray={[circumference * progress, circumference]} 
        strokeLinecap='round' 
        rotation='-90' 

      />

      <Circle 
        cx={radius} 
        cy={radius} 
        r={innerRadius} 
        strokeWidth={strokeWidth} 
        stroke={color}
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
