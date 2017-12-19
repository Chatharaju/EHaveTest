import React, { Component } from 'react'
import { ScrollView, Text, Image, View, ListView } from 'react-native'
import {connect} from 'react-redux'
import { Images } from '../Themes'
import PaitentResultsActions from '../Redux/PaitentResultsRedux'

// Styles
import styles from './Styles/PatientResultsScreenStyles'

class PatientResultsScreen extends Component {
    constructor(props) {
        super(props);
        this.props.patitentResults(this.props.paitentID)

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
        if (this.props.paitentResult !== newProps.paitentResult) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(newProps.paitentResult.items)
            })
        }
    }

    _renderRow (rowData) {
        // console.error(rowData)
        return (
            <TouchableOpacity style={styles.row}>
                <Text style={styles.boldLabel}>{rowData.MRN}</Text>
                <Text style={styles.boldLabel}>{rowData.resultType}</Text>
                <Text style={styles.boldLabel}>{rowData.resultValue}</Text>
            </TouchableOpacity>
        )
    }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
          <View style={styles.section} >
            <Text style={styles.sectionText}>
              Paitent Results Screen
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
        patitentResults: (paitentId) => dispatch(PaitentResultsActions.paitentResultsRequest(paitentId))
    }
}

const mapStateToProps = (state) => {
    // console.error(state)
    return {
        paitentResult: state.paitentResult.paitentResult
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PatientResultsScreen)


