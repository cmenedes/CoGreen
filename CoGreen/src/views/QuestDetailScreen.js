import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export class QuestDetailScreen extends React.Component {
    static navigationOptions = {
      title: 'Quest Detail',
      headerStyle: {
        backgroundColor: '#007BFF'
      },
      headerTintColor: '#FFFFFF'
    };

    constructor(props){
      super(props);
      this.state = {
        userId: 1,
        quest: props.quest
      }
    }
    acceptQuest = (quest) => {
      data = {QuestId: quest.QuestId, UserId: userId};
      fetch('http://10.106.30.172:3000/AcceptQuest', {
        method: 'POST',
        body: JSON.stringify(data), 
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(response => {
        console.log('Success:', JSON.stringify(response));
        
        this.props.navigation.navigate('QuestScreen');
      })
      .catch(error => console.error('Error:', error));
    }

    render() {
      return (
	  <View style={{alignContent: 'center'}}>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>{this.state.quest.QuestTitle}</Text>
	  </View>
      );
    }
  }
export default QuestDetailScreen;