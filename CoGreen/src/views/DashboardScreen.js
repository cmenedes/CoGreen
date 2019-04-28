import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import QuestScreen from './QuestScreen';
import RewardsScreen from './RewardsScreen';

class ActiveQuestListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.QuestId);
  };

  render() {
    const textColor = this.props.selected ? 'red' : 'black';
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={{alignItems: 'stretch', flexDirection: 'row'}}>
          <View style={{flexDirection: 'column', borderBottomWidth: 1, borderTopWidth: 1, borderColor: 'black'}}>
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

export class DashboardScreen extends React.Component {
    static navigationOptions = {
      title: 'Dashboard',
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
        profileInfo: { gameprofile: {}}
      }
      this.getProfile();
      this.getActiveQuests();
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
    getProfile = () => {
      fetch('http://10.106.30.172:3000/GetProfile?userId=' + this.state.userId)
      .then(res => res.json())
      .then(resJson => {
        this.setState({profileInfo: resJson})
      })
      .catch(error => {
        console.error(error);
      })
    }

    _keyExtractor = (item, index) => item.UserQuestId.toString();

    _onPressItem = (QuestId) => {
      // updater functions are preferred for transactional updates
      
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
  
    _renderHeader = ({item}) => (
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>Active Quests</Text>
      </View>
    );
  
    render() {
      return (
	  <ImageBackground source={require('../../pictures/background.jpg')} style={{flex: 1}}>
    <View style={styles.inner}>
      <View style={{flexDirection: 'row'}}>
      <Image style={{width: '50%', height: '70%', borderWidth: 1, borderColor: 'black', margin: 10}} source={require('../../pictures/ProfileIcon.png')}>

      </Image>
      <View style={{alignContent: 'stretch', flexDirection: 'column', marginTop: 10, marginBottom: 200}}>
          <Text style={{marginLeft: 20}}>UserName: {this.state.profileInfo.UserName}</Text>
          <Text style={{marginLeft: 20}}>Points: {this.state.profileInfo.gameprofile.Points}</Text>
          <Text style={{marginLeft: 20}}>Experience: {this.state.profileInfo.gameprofile.Experience}</Text>
        </View>
        </View>
        <FlatList data={this.state.activeQuests} 
          keyExtractor = {this._keyExtractor}
          renderItem={this._renderItem}
          ListHeaderComponent={this._renderHeader}
        >

        </FlatList>
        {/* <Button style={styles.bottom}
          title="Go to Quests"
          onPress={() => this.props.navigation.navigate('Quests')}
        />
        <Button style={styles.bottom}
          title="Go to Rewards"
          onPress={() => this.props.navigation.navigate('Rewards')}
        />	 */}
        </View>
	 </ImageBackground>		
      );
    }
  }

  const TabNavigator = createBottomTabNavigator({
    Dashboard: {
      screen: DashboardScreen,
      navigationOptions: {
        tabBarLabel: <Text style={{ fontSize: 20 }}>Dashboard</Text>
      }
    },
    Quest: {
      screen: QuestScreen,
      navigationOptions: {
        tabBarLabel: <Text style={{ fontSize: 20 }}>Quests</Text>
      }
    },
    Rewards: {
      screen: RewardsScreen,
      navigationOptions: {
        tabBarLabel: <Text style={{ fontSize: 20 }}>Rewards</Text>
      }
    }
  });
  export default createAppContainer(TabNavigator);

  const styles = StyleSheet.create({
    questitem: {
      padding: 10,
      fontSize: 12
    },
    borderedquestitem: {
      padding: 10,
      fontSize: 12,
      borderBottomWidth: 1, borderTopWidth: 1, borderColor: 'black'
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
    },
    container: {
      flex:1,
    },
    inner: {
      width: '100%',
      height: '100%',
      backgroundColor:'rgba(255, 255, 255, .3)'
    }
  })