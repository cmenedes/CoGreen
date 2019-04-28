import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export class RewardsScreen extends React.Component {
    static navigationOptions = {
      title: 'Rewards',
      headerStyle: {
        backgroundColor: '#007BFF'
      },
      headerTintColor: '#FFFFFF'
    };
    render() {
      return (
	  <View>
        {/* <Button
          title="Go to Dashboard"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
        <Button
          title="Go to Quests"
          onPress={() => this.props.navigation.navigate('Quests')}
        /> */}
	   </View>
      );
    }
  }
export default RewardsScreen;