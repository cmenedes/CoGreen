import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import TimedSlideshow from 'react-native-timed-slideshow';

export class OnboardScreen extends React.Component {
   static navigationOptions = {
     title: 'CoGreen',
     headerStyle: {
       backgroundColor: '#007BFF'
     },
     headerTintColor: '#FFFFFF'
   };
   render() {
     const items = [
       {
         uri: require('../../pictures/water.jpeg'),
         title: "Water",
         text: "A person can live a month without food, but only a week without water.",
       },
       {
         uri: require('../../pictures/picture2.jpg'),
         title: "Deforestation",
         text: "It is estimated that within 100 years there will be no rainforests.",
         duraton : 3000

       },
       {
         uri: require('../../pictures/pictures4.jpg'),
         title: "Leaves",
         text: "Throughout history people used leaves for medicinal purposes.",
         fullWidth : true
       }
     ]
     return (
      <View style={styles.container}>

   <TimedSlideshow
                items={items}
            />
       <Button
         title="Go to Dashboard"
         onPress={() => this.props.navigation.navigate('Dashboard')}
       />
      </View>
     );
   }

 }

 export default OnboardScreen;
 const styles = StyleSheet.create({
 container: {
   flex:1,



 },
})