import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export class QuestScreen extends React.Component {
    static navigationOptions = {
      title: 'Quests',
    };
    render() {
      return (
	  <View>
        <Button
          title="Go to Dashboard"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
        <Button
          title="Go to Rewards"
          onPress={() => this.props.navigation.navigate('Rewards')}
        />
	  </View>
      );
    }
  }
  
export default QuestScreen;