// @flow

import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import FullButton from '../Components/FullButton'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/PracticeStyle'

class Practice extends React.Component {

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

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

          <RoundedButton onPress={NavigationActions.session}>
            New session
          </RoundedButton>

          <FullButton text='first saved session' onPress={NavigationActions.session} />
          <FullButton text='second saved session' onPress={NavigationActions.session} />
          <FullButton text='third saved session' onPress={NavigationActions.session} />

        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Practice)
