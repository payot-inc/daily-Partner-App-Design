import React from 'react';
import {View, Text, TextInput, StyleSheet, FlatList, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';

export default class OrderList extends React.Component{
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
        <View style={{height:60,flexDirection:'row',alignItems:'center',backgroundColor:'#fff',borderBottomWidth:1,borderColor:'#e2e2e2'}}>
          <TouchableHighlight
            onPress={()=>{this.props.navigation.navigate('Main')}}
            underlayColor={'#f8f8f8'}
            style={{width:60,height:60,justifyContent:'center',alignItems:'center'}}
          >
            <Icon name="arrow-left" size={24}/>
          </TouchableHighlight>
          <Text style={{fontSize:18}}>전체주문내역</Text>
        </View>

        <FlatList 
          data={orderData}
          contentContainerStyle={{paddingBottom:60}}
          ListHeaderComponent={({item})=>
          <View>
            <View style={styles.searchOpt}>
              <View style={styles.searchItem}>
                <Text style={styles.searchItemLabel}>날짜</Text>
                <TextInput 
                  style={styles.searchItemInput}
                  placeholder="날짜를 선택해주세요"
                />
              </View>
              <View style={styles.searchItem}>
                <Text style={styles.searchItemLabel}>전화번호</Text>
                <TextInput
                  style={styles.searchItemInput}
                  placeholder="'-' 없이 번호를 입력해주세요"
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
                  <Text style={{fontSize:16,color:'#01a1dd'}}>2020.06.30 오전수거</Text>
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
    height:60,
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
  }
  
  
})