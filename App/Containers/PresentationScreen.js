// @flow

import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/PresentationScreenStyle'

export default class PresentationScreen extends React.Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.plant} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Text style={styles.sectionText} >
              Here is where your mindful garden plant will turn up and show you stats or something.
            </Text>
          </View>

          <RoundedButton onPress={NavigationActions.practice}>
            Practice
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.learn}>
            Learn
          </RoundedButton>

        </ScrollView>
      </View>
    )
  }
}
