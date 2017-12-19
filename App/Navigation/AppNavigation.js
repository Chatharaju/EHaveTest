import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import PaitentScreen from '../Containers/PatientScreen'
import PaitentResultScreen from '../Containers/PatientResultsScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
    PaitentScreen: { screen: PaitentScreen },
    PaitentResultScreen: { screen: PaitentResultScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'PaitentScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
