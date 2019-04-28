import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export class OnboardScreen extends React.Component {
    static navigationOptions = {
      title: 'Onboarding',
    };
    render() {
      return (
	  <View>
        <Button
          title="Go to Dashboard"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
	  </View>
      );
    }
  }
  
  export default OnboardScreen;