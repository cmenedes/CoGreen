import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';

class ActiveQuestListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.quest);
    this.props.navigation.navigate('QuestDetailScreen', this.props.quest);
  };

  render() {
    const textColor = this.props.selected ? 'red' : 'black';
    return (
      <TouchableOpacity onPress={this._onPress} style={{flex: 1}}>
        <View style={{alignItems: 'stretch', flexDirection: 'row'}}>
          <View style={{flexDirection: 'column', borderBottomWidth: 1, borderTopWidth: 1, borderColor: 'black', width: '50%', marginBottom: 2}}>
            <Text style={styles.questitem}>Title: {this.props.title}</Text>
            <Text style={styles.smallquestitem}>Description: {this.props.shortDescription}</Text>
          </View>
          <Text style={styles.borderedquestitem}>Points: {this.props.points}</Text>
          <Text style={styles.borderedquestitem}>Experience: {this.props.experience}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export class QuestScreen extends React.Component {
    static navigationOptions = {
      title: 'Quests',
      headerStyle: {
        backgroundColor: '#007BFF'
      },
      headerTintColor: '#FFFFFF'
    };

    constructor(props){
      super(props);
      this.state = {
        userId: 1,
        activeQuests: {},
        availableQuests: {},
        modalVisible: false
      }
      this.getActiveQuests();
      this.getAvailableQuests();
    }
    getActiveQuests = () => {
      fetch('http://10.106.30.172:3000/GetActiveQuests?userId=' + this.state.userId)
      .then(res => res.json())
      .then(resJson => {
        this.setState({activeQuests: resJson})
      })
      .catch(error => {
        console.error(error);
      })
    }
    getAvailableQuests = () => {
      fetch('http://10.106.30.172:3000/GetAvailableQuests?userId=' + this.state.userId)
      .then(res => res.json())
      .then(resJson => {
        this.setState({availableQuests: resJson})
      })
      .catch(error => {
        console.error(error);
      })
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
        
        this.getActiveQuests();
        this.getAvailableQuests();
      })
      .catch(error => console.error('Error:', error));
    }

    _keyExtractor = (item, index) => item.UserQuestId.toString();
    _keyAvailableExtractor = (item, index) => item.QuestId.toString();

    _onPressItem = (QuestId) => {
      // updater functions are preferred for transactional updates
      this.setState({modalVisible: true});
    };
  
    _renderItem = ({item}) => (
      <ActiveQuestListItem
        id={item.QuestId}
        onPressItem={this._onPressItem}
        // selected={!!this.state.selected.get(item.id)}
        title={item.quest.QuestTitle}
        shortDescription={item.quest.ShortDescription}
        points={item.quest.Points}
        experience={item.quest.Experience}
      />
    );
  
    _renderAvailableItem = ({item}) => (
      <ActiveQuestListItem
        id={item.QuestId}
        onPressItem={this._onPressItem}
        // selected={!!this.state.selected.get(item.id)}
        title={item.QuestTitle}
        shortDescription={item.ShortDescription}
        points={item.Points}
        experience={item.Experience}
      />
    );
  
    _renderHeader = ({item}) => (
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>Active Quests</Text>
      </View>
    );
  
    _renderAvailableHeader = ({item}) => (
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>Available Quests</Text>
      </View>
    );

    render() {
      return (
	  <View>
        {/* <Button
          title="Go to Dashboard"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
        <Button
          title="Go to Rewards"
          onPress={() => this.props.navigation.navigate('Rewards')}
        /> */}
        <FlatList data={this.state.activeQuests} 
          keyExtractor = {this._keyExtractor}
          renderItem={this._renderItem}
          ListHeaderComponent={this._renderHeader}
        >

        </FlatList>

        <FlatList data={this.state.availableQuests} 
          keyExtractor = {this._keyAvailableExtractor}
          renderItem={this._renderAvailableItem}
          ListHeaderComponent={this._renderAvailableHeader}
        >

        </FlatList>
	  </View>
      );
    }
  }

  const styles = StyleSheet.create({
    questitem: {
      padding: 10,
      fontSize: 12
    },
    borderedquestitem: {
      padding: 10,
      fontSize: 12,
      borderBottomWidth: 1, borderTopWidth: 1, borderColor: 'black', marginBottom: 2
    },
    smallquestitem: {
      fontSize: 10,
      marginLeft:10
    },
    headeritem: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    bottom: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 36
    }
  })
  
export default QuestScreen;