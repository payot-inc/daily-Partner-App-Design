import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class SubHeader extends React.Component {
  goBack() {
    this.props.navigation?.goBack();
  }

  render() {
    return (
      <View style={styles.header}>
        <TouchableOpacity 
          style={{width:60,height:60,justifyContent:'center',alignItems:'center'}}
          onPress={this.goBack.bind(this)}
        >
          <Icon name="arrow-left" size={24}></Icon>
        </TouchableOpacity>
        <Text style={{color:'#494949',fontSize:18,fontWeight:'bold'}}>페이지명</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    height:60,
    backgroundColor:'#fff',
  },
})