import React from 'react';
import {View, Text, TextInput, StyleSheet, FlatList, Image, TouchableHighlight, TouchableOpacity, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';

import SubHeader from '../components/SubHeader';

export default class OrderList extends React.Component{

  state = { select: 1 };

  render(){

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
    
    return(
      <View>
        <SubHeader {...this.props}/>

        <FlatList 
          data={orderData}
          contentContainerStyle={{paddingBottom:60}}
          ListHeaderComponent={({item})=>
          <View>
            <View style={styles.searchOpt}>
              <View style={styles.searchItem}>
                <Text style={styles.searchItemLabel}>주문상태</Text>
                <View style={styles.selectBox}>
                  <Picker
                    selectedValue={this.state.select}
                    style={styles.picker}
                    prompt="정렬선택"
                    textStyle={{fontSize:11}}
                    onValueChange={(itemValue, itemIndex) => this.setState({state:{select:itemValue}})}
                  >
                    <Picker.Item label="전체" value={1}/>
                    <Picker.Item label="주문확인" value={2}/>
                    <Picker.Item label="수거완료" value={3}/>
                    <Picker.Item label="작업완료" value={4}/>
                    <Picker.Item label="검수완료" value={5}/>
                    <Picker.Item label="배송완료" value={6}/>
                  </Picker>
                </View>
              </View>
              <View style={styles.searchItem}>
                <Text style={styles.searchItemLabel}>날짜</Text>
                <TextInput 
                  style={styles.searchItemInput}
                  placeholder="날짜를 선택해주세요"
                />
              </View>
              <View style={[styles.searchItem,{marginBottom:0}]}>
                <Text style={styles.searchItemLabel}>주문자</Text>
                <TextInput
                  style={styles.searchItemInput}
                  placeholder="주문자명을 입력해주세요"
                />
              </View>
              <TouchableHighlight
                style={styles.searchBtn}
                underlayColor={'#191919'}
                onPress={()=>{}}
              >
                <Text style={styles.searchBtnText}>검색</Text>
              </TouchableHighlight>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:15,marginTop:30}}>
              <Text style={{fontSize:16}}>목록 <Text style={{fontWeight:'bold',color:'#01a1dd'}}>10</Text></Text>
              <Text>여기에는 무엇을 둘까?</Text>
            </View>
          </View>
          }
          style={{paddingBottom:10,marginBottom:10,}}
          renderItem={({item})=>
            <TouchableOpacity 
              style={styles.orderItem}
              onPress={()=>this.props.navigation.navigate('orderDetail')}
            >
              <View>
                <View style={styles.orderItemHead}>
                  <Text style={{fontSize:14,color:'#01a1dd'}}>2020.06.30 오전수거</Text>
                  <Text>접수대기</Text> 
                </View>
                <View style={styles.orderItemBody}>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{flex:1,paddingRight:15,}}>
                      <Text style={{fontSize:18,}}>박수민</Text>
                      <Text style={{color:'#888',marginTop:4,}}>010-8525-4561</Text>
                      <Text style={{marginTop:8,}}>부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호</Text>
                    </View>
                    <TouchableHighlight
                      underlayColor={'#2EA20C'}
                      style={{width:50,height:50,justifyContent:'center',alignItems:'center',backgroundColor:'#33B80C',borderRadius:30}}
                      onPress={()=>{}}
                    >
                      <IconAwesome name="phone" size={30} color={'#fff'}/>
                    </TouchableHighlight>
                  </View>
                  <View style={{flexDirection:'row',alignItems:'center',marginTop:8,}}>
                    <Text style={{width:80,color:'#888'}}>출입문정보</Text>
                    <Text style={{flex:1,color:'#E13D7A'}}>*1034 입니다</Text>
                  </View>
                  
                  <View style={{flexDirection:'row',alignItems:'flex-start',padding:15,backgroundColor:'#f8f8f8',borderRadius:4,marginTop:20,}}>
                    <Icon name="message-outline" size={20} style={{width:40,}}/>
                    <Text style={{flex:1,}}>비닐봉지가 없어요 오실때 가져다주세요! 비닐봉지가 없어요 오실때 가져다주세요!</Text>
                  </View>
                  <Text style={{color:'#888',marginTop:10,fontSize:12,textAlign:'right'}}>{item.orderDate}</Text>
                </View>
              </View>
            </TouchableOpacity>
            }
            keyExtractor={(item,index) => index}
          />
        </View>


    )
  }
}

const styles = StyleSheet.create({
  stateItemBtn:{
    flex:1,borderRadius:4
  },
  stateItem:{
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:10,
  },
  stateNumber:{
    fontSize:24,
    marginBottom:5,
    color:'#aaa'
  },
  stateNumberActive:{
    color:'#01a1dd'
  },
  stateName:{
    fontSize:12,
  },
  orderItem:{
    borderWidth:1,
    borderColor:'#d2d2d2',
    backgroundColor:'#fff',
    paddingHorizontal:15,
    marginTop:10,
    marginHorizontal:10,
    borderRadius:4,
  },
  orderItemHead:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:50,
    borderBottomWidth:1,
    borderColor:'#e2e2e2'
  },
  orderItemBody:{
    paddingVertical:15,
  },

  searchOpt:{
    backgroundColor:'#fff',
    paddingVertical:15,
    paddingHorizontal:10,
    alignItems:'flex-end',
    borderBottomWidth:1,
    borderColor:'#e2e2e2',
  },

  searchItem:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:8,
    borderWidth:1,
    borderColor:'#d2d2d2',
    borderRadius:4,
  },

  searchItemLabel:{
    width:100,
    borderRightWidth:1,
    borderColor:'#e2e2e2',
    paddingHorizontal:15,
  },
  searchItemInput:{
    flex:1,
    height:40,
    paddingHorizontal:15,
    textAlign:'right'
  },
  searchBtn:{
    width:100,
    height:36,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#292929',
    borderRadius:4,
    marginTop:10,
  },
  searchBtnText:{
    color:'#fff',
  },

  selectBox:{
    flex:1,
    height:40,
    borderRadius:4,
    borderColor:'#d2d2d2',
    padding:0
  },

  picker:{
    paddingRight:0,
    paddingLeft:0,
    flex:1,
    height:24,
    transform:[
      {scaleX:0.95},
      {scaleY:0.95},
    ]
  }
  
  
})