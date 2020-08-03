import React,{useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TouchableHighlight ,FlatList, Picker} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconAwesome from 'react-native-vector-icons/FontAwesome'

export default class Main extends React.Component {

  modal = React.createRef();
  state = { select: 1 };

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

      <View>

        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:60,backgroundColor:'#01a1dd'}}>
          <Text style={{fontSize:16,fontWeight:'bold',marginLeft:10,color:'#fff'}}>데일리세탁 파트너</Text>
          <TouchableHighlight
            underlayColor="#0091C8"
            style={{width:60,height:60,alignItems:'center',justifyContent:'center'}}
            onPress={()=> this.props.navigation.openDrawer()}
          >
              <Icon name="menu" size={28} color={'#fff'}></Icon>
          </TouchableHighlight>
        </View>

        <FlatList 
          data={orderData}
          contentContainerStyle={{paddingBottom:60}}
          ListHeaderComponent={({item})=>
          <View style={{backgroundColor:'#fff'}}>
            <View style={{flexDirection:'row',paddingVertical:10,borderBottomWidth:1,borderColor:'#e2e2e2'}}>
              <TouchableHighlight 
                style={{flex:2,borderRadius:4,paddingHorizontal:15,paddingVertical:10,}}
                underlayColor={'#f8f8f8'}
                onPress={()=>{}}
              >
                <View style={{flex:1,justifyContent:'space-between'}}>
                  <Text style={{textAlign:'left',fontSize:14,}}>오늘작업</Text>
                  <View style={{alignItems:'flex-end'}}>
                    <Text style={{fontSize:28,width:80,height:80,backgroundColor:'rgba(1,161,221,0.1)',textAlign:'center',textAlignVertical:'center',borderRadius:40,color:'#01a1dd',fontWeight:'bold'}}>
                      02
                    </Text>
                  </View>
                </View>
              </TouchableHighlight>
              <View style={{flex:4,borderLeftWidth:1,borderColor:'#e2e2e2'}}>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                  <TouchableHighlight
                    underlayColor={'rgba(1,161,221,0.1)'}
                    style={styles.stateItemBtn}
                    onPress={()=>{}}
                  >
                    <View style={styles.stateItem}>
                      <Text style={[styles.stateNumber, styles.stateNumberActive]}>1</Text>
                      <Text style={styles.stateName}>신규주문</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    underlayColor={'rgba(1,161,221,0.1)'}
                    style={styles.stateItemBtn}
                    onPress={()=>{}}
                  >
                    <View style={styles.stateItem}>
                      <Text style={[styles.stateNumber, styles.stateNumberActive]}>5</Text>
                      <Text style={styles.stateName}>수거대기</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    underlayColor={'rgba(1,161,221,0.1)'}
                    style={styles.stateItemBtn}
                    onPress={()=>{}}
                  >
                    <View style={styles.stateItem}>
                      <Text style={[styles.stateNumber,]}>0</Text>
                      <Text style={styles.stateName}>작업대기</Text>
                    </View>
                  </TouchableHighlight>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                  <TouchableHighlight
                    underlayColor={'rgba(1,161,221,0.1)'}
                    style={styles.stateItemBtn}
                    onPress={()=>{}}
                  >
                    <View style={styles.stateItem}>
                      <Text style={[styles.stateNumber,]}>0</Text>
                      <Text style={styles.stateName}>출하대기</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    underlayColor={'rgba(1,161,221,0.1)'}
                    style={styles.stateItemBtn}
                    onPress={()=>{}}
                  >
                    <View style={styles.stateItem}>
                      <Text style={[styles.stateNumber, styles.stateNumberActive]}>1</Text>
                      <Text style={styles.stateName}>결제대기</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    underlayColor={'rgba(1,161,221,0.1)'}
                    style={styles.stateItemBtn}
                    onPress={()=>{}}
                  >
                    <View style={styles.stateItem}>
                      <Text style={[styles.stateNumber,]}>0</Text>
                      <Text style={styles.stateName}>배송대기</Text>
                    </View>
                  </TouchableHighlight>
                </View>
              </View>
            </View>

            <View style={{padding:15,flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end',marginTop:20}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <Icon name="check-circle" size={24} color={'#01a1dd'}/>
                <Text style={{fontSize:18,marginLeft:5,}}>오늘작업</Text>
              </View>
              {/* <View style={styles.selectBox}>
                <Picker
                  selectedValue={this.state.select}
                  style={styles.picker}
                  prompt="정렬선택"
                  textStyle={{fontSize:11}}
                  onValueChange={(itemValue, itemIndex) => this.setState({state:itemValue})}
                >
                  <Picker.Item label="거리순" value={1}/>
                  <Picker.Item label="주문날짜순" value={2}/>
                </Picker>
              </View> */}
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
                    <Text style={{fontWeight:'bold'}}>접수대기</Text> 
                    <Text style={{color:'#888',}}>{item.orderDate} 주문</Text>
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
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:15,}}>
                      <Text style={{width:90,color:'#888'}}>- 출입문정보</Text>
                      <Text style={{flex:1,color:'#E13D7A'}}>*1034 입니다</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:8,}}>
                      <Text style={{width:90,color:'#888'}}>- 수거희망</Text>
                      <Text>2020년 7월 31일 <Text style={{color:'#01a1dd'}}>오전수거</Text></Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'flex-start',padding:15,backgroundColor:'#f8f8f8',borderRadius:4,marginTop:15,}}>
                      <Icon name="message-outline" size={20} style={{width:40,}}/>
                      <Text style={{flex:1,}}>비닐봉지가 없어요 오실때 가져다주세요! 비닐봉지가 없어요 오실때 가져다주세요!</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
          }
          keyExtractor={(item,index) => index}
        />

      </View>


    );
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

  selectBox:{

    borderRadius:4,
    borderColor:'#d2d2d2',
    padding:0
  },

  picker:{
    paddingRight:0,
    paddingLeft:0,
    width:120,
    height:24,
    transform:[
      {scaleX:0.95},
      {scaleY:0.95},
    ]
  }
})