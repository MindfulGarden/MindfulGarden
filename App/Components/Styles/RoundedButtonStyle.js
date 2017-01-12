// @flow

import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 30,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    backgroundColor: Colors.windowTint,
    justifyContent: 'center'
  },
  buttonText: {
    color: Colors.snow,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 4,
    backgroundColor: 'transparent',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin
  }
})
