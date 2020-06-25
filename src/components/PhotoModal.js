import React from 'react';
import {View, Text, Modal, Alert,TouchableHighlight, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class PhotoModal extends React.Component{
  state = {visible: false};

  visible(state = false) {
    this.setState({visible: state});
  }
  
  render(){
    return(
      <Modal
        animationType="fade"
        transparent={true}
        statusBarTranslucent={true}
        visible={this.state.visible}
        onRequestClose={() => {
          this.visible(false)
        }}
      >
        <View style={{flex:1,alignItems:'center',justifyContent:'flex-end'}}>
          <View style={{backgroundColor:'#fff',width:'100%',padding:30,zIndex:2,borderTopLeftRadius:10,borderTopRightRadius:10,elevation:20}}>
            {this.props.children}

            <TouchableOpacity style={{height:180,borderWidth:3,borderColor:'#e2e2e2',justifyContent:'center',alignItems:'center',marginTop:20,borderRadius:10,}}>
              <View style={{justifyContent:'center',alignItems:'center'}}>
                <Icon name="camera-outline" size={32} color={'#ccc'}></Icon>
                <Text style={{marginTop:5,color:'#888'}}>사진을 등록해주세요</Text>
              </View>
            </TouchableOpacity>

            <View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'center',marginTop:20,}}>
              <TouchableOpacity
                onPress={()=> this.visible(false)}
                style={{width:80,height:36,backgroundColor:'#f2f2f2',justifyContent:'center',alignItems:'center',marginRight:10,borderRadius:18}}
              >
                <Text>취소</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=> this.visible(false)}
                style={{width:80,height:36,backgroundColor:'#01a1dd',justifyContent:'center',alignItems:'center',borderRadius:18}}
              >
                <Text style={{color:'#fff'}}>확인</Text>
              </TouchableOpacity>
            </View>
          </View>
          
        </View>

        <TouchableOpacity
          style={{backgroundColor:'#rgba(0,0,0,0.8)',position:'absolute',top:0,left:0,zIndex:1,width:'100%',height:'100%'}}
          onPress={()=> this.visible(false)}
          activeOpacity={1}
        >
        </TouchableOpacity>
      </Modal>
    )
  }
}