import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export class DashboardScreen extends React.Component {
    static navigationOptions = {
      title: 'Dashboard',
    };
    render() {
      return (
	  <View>
        <Button
          title="Go to Quests"
          onPress={() => this.props.navigation.navigate('Quests')}
        />
        <Button
          title="Go to Rewards"
          onPress={() => this.props.navigation.navigate('Rewards')}
        />	
	 </View>		
      );
    }
  }
  
 export default DashboardScreen;