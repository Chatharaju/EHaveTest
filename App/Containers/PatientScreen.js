import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'

import { Images } from '../Themes'

// Styles
import styles from './Styles/PatientScreenStyles'

export default class PatientScreen extends Component {

  constructor() {
    super()
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.section} >
            <Text style={styles.sectionText}>
              Paitent Screen
            </Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}
