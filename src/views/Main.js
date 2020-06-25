import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import CustomModal from '../components/CustomModal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Main extends React.Component {
  modal = React.createRef();
  
  render() {

    const orderData = [
      {
        orderDate: '2020.06.23.12:34',
        userDate: '2020.06.30 오전',
        userAddress: '부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호',
        userMassage: '비닐봉지가 없어요 오실때 가져다 주세요!',
        door:'*1034',
      },
      {
        orderDate: '2020.06.23.12:34',
        userDate: '2020.06.30 오전',
        userAddress: '부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호',
        userMassage: '비닐봉지가 없어요 오실때 가져다 주세요!',
        door:'*1034',
      },
    ]


    return (
      <FlatList 
        data={orderData}
        contentContainerStyle={{}}
        ListHeaderComponent={({item})=>
          <View>
            <View style={{flexDirection:'row',backgroundColor:'#fff'}}>
              <TouchableOpacity style={styles.stateBox}>
                <Text style={styles.stateBoxNumber}>5</Text>
                <Text style={styles.stateBoxText}>주문확인</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.stateBox}>
                <Text style={styles.stateBoxNumberDisable}>0</Text>
                <Text style={styles.stateBoxText}>수거확인</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.stateBox}>
                <Text style={styles.stateBoxNumberDisable}>0</Text>
                <Text style={styles.stateBoxText}>수거완료</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.stateBox}>
                <Text style={styles.stateBoxNumberDisable}>0</Text>
                <Text style={styles.stateBoxText}>세탁물확인</Text>
              </TouchableOpacity>
            </View>
    
            <View style={{flexDirection:'row',backgroundColor:'#fff'}}>
              <TouchableOpacity style={styles.stateBox}>
                <Text style={styles.stateBoxNumberDisable}>0</Text>
                <Text style={styles.stateBoxText}>결제요청</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.stateBox}>
                <Text style={styles.stateBoxNumberDisable}>0</Text>
                <Text style={styles.stateBoxText}>작업완료</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.stateBox}>
                <Text style={styles.stateBoxNumber}>2</Text>
                <Text style={styles.stateBoxText}>배송완료</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.stateBox}>
                <Text style={styles.stateBoxNumberDisable}>0</Text>
                <Text style={styles.stateBoxText}>취소대기</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={{backgroundColor:'#fff',flexDirection:'row',alignItems:'center',justifyContent:'space-between',height:50,paddingHorizontal:20,marginBottom:10,marginTop:10,borderTopWidth:1,borderBottomWidth:1,borderColor:'#e2e2e2'}}>
              <Text style={{fontSize:16,}}>주문확인</Text>
              <Icon name="arrow-down-drop-circle-outline" size={24}/>
            </TouchableOpacity>
          </View>
        }
        renderItem={({item})=>
            <TouchableOpacity 
              style={{borderWidth:1,borderColor:'#e2e2e2',paddingHorizontal:20,backgroundColor:'#fff',marginBottom:10}}
              onPress={()=>this.props.navigation.navigate('OrderDetail')}
            >
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:50,}}>
                <Text style={{fontSize:16,}}>{item.orderDate}</Text>
                <Text>상세보기</Text>
              </View>
              <View style={{height:1,backgroundColor:'#e2e2e2',}}/>
              <View style={{paddingVertical:20}}>
                <View style={{flexDirection:'row',marginBottom:7}}>
                  <Text style={{width:100,color:'#888'}}>수거희망일시</Text>
                  <Text style={{flex:1,color:'#01a1dd'}}>{item.userDate}</Text>
                </View>
                <View style={{flexDirection:'row',marginBottom:7}}>
                  <Text style={{width:100,color:'#888'}}>주소</Text>
                  <Text style={{flex:1,}}>{item.userAddress}</Text>
                </View>
                <View style={{flexDirection:'row',marginBottom:7}}>
                  <Text style={{width:100,color:'#888'}}>요청사항</Text>
                  <Text style={{flex:1,}}>{item.userMassage}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                  <Text style={{width:100,color:'#888'}}>출입문</Text>
                  <Text style={{flex:1,}}>{item.door}</Text>
                </View>
              </View>
            </TouchableOpacity>
        }
        keyExtractor={item => item.orderDate}
      />


    );
  }
}


const styles = StyleSheet.create({
  stateBox:{
    height:90,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth:1,
    borderColor:'#e2e2e2',
  },
  stateBoxNumber:{
    fontSize:28,
    color:'#DE1560',
  },
  stateBoxNumberDisable:{
    fontSize:28,
    color:'#ccc'
  },
  stateBoxText:{
    marginTop:3
  }
})