import React, { Component } from 'react'
import { ScrollView, Text, Image, View, ListView, TouchableOpacity } from 'react-native'
import {connect} from 'react-redux'
import { Images } from '../Themes'

import PaitentActions from '../Redux/PaitentRedux'
// Styles
import styles from './Styles/PatientScreenStyles'

class PatientScreen extends Component {

  constructor(props) {
    super(props);
    this.props.patitentInfo()

    const dataObjects = []
    const rowHasChanged = (r1, r2) => r1 !== r2
    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged})
    // Datasource is always in state
    this.state = {
        dataSource: ds.cloneWithRows(dataObjects)
    }
  }

    componentWillReceiveProps (newProps) {
      // console.error(newProps.paitentData.items)
      if (this.props.paitentData !== newProps.paitentData) {
          this.setState({
              dataSource: this.state.dataSource.cloneWithRows(newProps.paitentData.items)
          })
      }
    }

    paitentResults (paitentID) {
        // console.error(paitentID)
        this.props.navigation.navigate('PaitentResultsScreen', {paitentID: paitentID})
    }

    _renderRow (rowData) {
    // console.error(rowData)
        return (
            <TouchableOpacity style={styles.row} onPress={() => this.paitentResults(rowData.MRN)}>
              <Text style={styles.boldLabel}>{rowData.MRN}</Text>
              <Text style={styles.boldLabel}>{rowData.firstName}</Text>
              <Text style={styles.boldLabel}>{rowData.lastName}</Text>
              <Text style={styles.label}>{rowData.sex}</Text>
              <Text style={styles.label}>{rowData.birthDate}</Text>
            </TouchableOpacity>
        )
    }

  render () {
      // console.error(this.props.paitentData)

      return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
          <View style={styles.section} >
            <Text style={styles.sectionText}>
              Paitent Screen
            </Text>
          </View>
        <ListView
            contentContainerStyle={styles.listContent}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => this._renderRow(rowData)}
            enableEmptySections
            pageSize={15} />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        patitentInfo: () => dispatch(PaitentActions.paitentRequest())
    }
}

const mapStateToProps = (state) => {
  // console.error(state)
    return {
        paitentData: state.paitent.paitentData
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PatientScreen)

