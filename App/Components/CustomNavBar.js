import React from 'react'
import { View, Image, Animated, TouchableOpacity } from 'react-native'
import { Images, Colors } from '../Themes'
import Styles from './Styles/CustomNavBarStyle'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Actions as NavigationActions } from 'react-native-router-flux'

export default class CustomNavBar extends React.Component {
  render () {
    return (
      <Animated.View style={Styles.container}>
        <TouchableOpacity style={Styles.leftButton} onPress={NavigationActions.pop}>
          <Icon name='chevron-left' size={34} color={Colors.snow} />
        </TouchableOpacity>
        <Image style={Styles.logo} source={Images.mindGarden} />
        <View style={Styles.rightButton} />
      </Animated.View>
    )
  }
}
