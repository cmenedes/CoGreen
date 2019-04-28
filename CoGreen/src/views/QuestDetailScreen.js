import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export class QuestDetailScreen extends React.Component {
    static navigationOptions = {
      title: 'Quest Detail',
    };
    render() {
      return (
	  <View>
        <Button
          title="Go to Dashboard"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
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
export default QuestDetailScreen;