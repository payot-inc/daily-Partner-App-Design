import React,{useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView, Picker} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomModal from '../components/CustomModal';

export default class OrderDetail extends React.Component {
  
  ConfirmModal = React.createRef();
  PhotoModal = React.createRef();
  InputModal = React.createRef();
  WorkFinish = React.createRef();
  DeliveryFinish = React.createRef();
  CheckConfirm = React.createRef();
  RefundModal = React.createRef();

  state = { select: 1 };

  render() {
    return(
      <ScrollView style={{backgroundColor:'#fff'}}>

        <View style={{marginBottom:30,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
          <View style={{alignItems:'center',width:120,height:120,borderRadius:60,backgroundColor:'#f2f2f2',justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:12,color:'#01a1dd',marginBottom:5,}}>작업상태</Text>
            <Text style={{fontSize:18}}>수거완료</Text>
          </View>
        </View>

        <View style={{marginBottom:30,}}>
          <Text style={{fontSize:16,marginBottom:10,paddingHorizontal:10,}}>작업처리</Text>
          <View style={{flexDirection:'row',borderTopWidth:1,borderBottomWidth:1,borderColor:'#e2e2e2'}}>
            <TouchableOpacity
              disabled={false}
              style={{justifyContent:'space-between',flex:1,borderRightWidth:1,borderColor:'#e2e2e2',padding:15}}
              onPress={()=>this.ConfirmModal.current.visible(true)}
            >
              <Text style={{fontSize:14}}>01 주문확인</Text>
              <Icon name="arrow-right-circle-outline" size={24} color={'#01a1dd'} style={{marginTop:10}}></Icon>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={false}
              onPress={()=>this.PhotoModal.current.visible(true)}
              style={{justifyContent:'space-between',flex:1,padding:15,backgroundColor:'#fff',borderRightWidth:1,borderColor:'#e2e2e2'}}
            >
              <Text style={{fontSize:14}}>02 수거완료</Text>
              <Icon name="arrow-right-circle-outline" size={24} color={'#01a1dd'} style={{marginTop:10}}></Icon>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={false}
              style={{justifyContent:'space-between',flex:1,padding:15,backgroundColor:'#fff'}}
            >
              <Text style={{fontSize:14}}>03 세탁물확인</Text>
              <Icon name="arrow-right-circle-outline" size={24} color={'#01a1dd'} style={{marginTop:10}}></Icon>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:'#e2e2e2'}}>
            <TouchableOpacity
              disabled={false}
              onPress={()=>this.InputModal.current.visible(true)}
              style={{justifyContent:'space-between',flex:1,padding:15,backgroundColor:'#fff',borderRightWidth:1,borderColor:'#e2e2e2'}}
            >
              <Text style={{fontSize:14}}>04 결제요청</Text>
              <Icon name="arrow-right-circle-outline" size={24} color={'#01a1dd'} style={{marginTop:10}}></Icon>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={false}
              style={{justifyContent:'space-between',flex:1,padding:15,backgroundColor:'#fff',borderRightWidth:1,borderColor:'#e2e2e2'}}
              onPress={()=>this.WorkFinish.current.visible(true)}
            >
              <Text style={{fontSize:14}}>05 세탁완료</Text>
              <Icon name="arrow-right-circle-outline" size={24} color={'#01a1dd'} style={{marginTop:10}}></Icon>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={false}
              style={{justifyContent:'space-between',flex:1,padding:15,backgroundColor:'#fff'}}
              onPress={()=>this.DeliveryFinish.current.visible(true)}
            >
              <Text style={{fontSize:14}}>06 배송완료</Text>
              <Icon name="arrow-right-circle-outline" size={24} color={'#01a1dd'} style={{marginTop:10}}></Icon>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{marginBottom:30,}}>
          <Text style={{fontSize:16,marginBottom:10,paddingHorizontal:10,}}>주문자정보</Text>
          <View style={{padding:20,backgroundColor:'#f8f8f8',borderTopWidth:1,borderBottomWidth:1,borderColor:'#e2e2e2'}}>
            <View style={{flexDirection:'row',alignItems:'flex-start',marginBottom:8}}>
              <Text style={{width:100,color:'#888'}}>수거희망일시</Text>
              <Text style={{flex:1,color:'#01a1dd'}}>2020.06.30 오전</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'flex-start',marginBottom:8}}>
              <Text style={{width:100,color:'#888'}}>주소</Text>
              <Text style={{flex:1,}}>부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'flex-start',marginBottom:8}}>
              <Text style={{width:100,color:'#888'}}>요청사항</Text>
              <Text style={{flex:1,}}>비닐봉지 없어요 오실때 가져다주세요!</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'flex-start',}}>
              <Text style={{width:100,color:'#888'}}>출입문</Text>
              <Text style={{flex:1,}}>*1023</Text>
            </View>
          </View>
        </View>

        <View style={{marginBottom:30,}}>
          <Text style={{fontSize:16,marginBottom:10,paddingHorizontal:10,}}>요청세탁물</Text>
          <View style={{padding:20,backgroundColor:'#f8f8f8',borderTopWidth:1,borderBottomWidth:1,borderColor:'#e2e2e2'}}>
            <View style={{flexDirection:'row',alignContent:'center',justifyContent:'space-between',marginBottom:8}}>
              <Text style={{flex:1}}>80리터 물빨래</Text>
              <Text style={{width:50,textAlign:'center'}}>3</Text>
              <Text style={{width:80,textAlign:'right'}}>19,800원</Text>
            </View>
            <View style={{flexDirection:'row',alignContent:'center',justifyContent:'space-between',marginBottom:8}}>
              <Text style={{flex:1}}>와이셔츠</Text>
              <Text style={{width:50,textAlign:'center'}}>2</Text>
              <Text style={{width:80,textAlign:'right'}}>4,000원</Text>
            </View>
            <View style={{flexDirection:'row',alignContent:'center',justifyContent:'space-between'}}>
              <Text style={{flex:1}}>청바지</Text>
              <Text style={{width:50,textAlign:'center'}}>1</Text>
              <Text style={{width:80,textAlign:'right'}}>4,500원</Text>
            </View>
          </View>
        </View>

        <View style={{marginBottom:30,}}>
          <Text style={{fontSize:16,marginBottom:10,paddingHorizontal:10,}}>세탁물 확인완료</Text>
          <View style={{padding:20,backgroundColor:'#F8F1F3',borderTopWidth:1,borderBottomWidth:1,borderColor:'#e2e2e2'}}>
            <View style={{flexDirection:'row',alignContent:'center',justifyContent:'space-between',marginBottom:8}}>
              <Text style={{flex:1}}>80리터 물빨래</Text>
              <Text style={{width:50,textAlign:'center'}}>3</Text>
              <Text style={{width:80,textAlign:'right'}}>19,800원</Text>
            </View>
            <View style={{flexDirection:'row',alignContent:'center',justifyContent:'space-between',marginBottom:8,}}>
              <Text style={{flex:1,color:'#DE1560'}}>와이셔츠</Text>
              <Text style={{width:50,textAlign:'center',color:'#DE1560'}}>3</Text>
              <Text style={{width:80,textAlign:'right',color:'#DE1560'}}>6,000원</Text>
            </View>
            <View style={{flexDirection:'row',alignContent:'center',justifyContent:'space-between'}}>
              <Text style={{flex:1}}>청바지</Text>
              <Text style={{width:50,textAlign:'center'}}>1</Text>
              <Text style={{width:80,textAlign:'right'}}>4,500원</Text>
            </View>
          </View>
        </View>

        <View style={{marginBottom:30,}}>
          <Text style={{fontSize:16,marginBottom:10,paddingHorizontal:10,}}>추가금액</Text>
          <View style={{padding:20,backgroundColor:'#fff',borderTopWidth:1,borderBottomWidth:1,borderColor:'#e2e2e2'}}>
            <Text style={{marginBottom:10,color:'#888'}}>추가사유</Text>
            <Text>와이셔츠 1개가 오염정도가 심해 고급세탁을 진행하였습니다</Text>
            <View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'flex-end',marginTop:20,}}>
              <Text style={{color:'#888',marginRight:20,}}>추가금액</Text>
              <Text style={{fontSize:18,color:'#DE1560'}}>3,000원</Text>
            </View>
          </View>
        </View>

        <View style={{marginBottom:30,}}>
          <Text style={{fontSize:16,marginBottom:10,paddingHorizontal:10,}}>작업취소</Text>
          <View style={{flexDirection:'row',borderTopWidth:1,borderBottomWidth:1,borderColor:'#e2e2e2'}}>  
            <TouchableOpacity
              style={{justifyContent:'space-between',flex:1,borderRightWidth:1,borderColor:'#e2e2e2',padding:15,}}
              onPress={()=>this.RefundModal.current.visible(true)}
            >
              <View>
                <Text style={{fontSize:14}}>부분환불</Text>
                <Text style={{fontSize:12,color:'#888'}}>(배송비제외)</Text>
              </View>
              <Icon name="arrow-right-circle-outline" size={24} color={'#DE1560'} style={{marginTop:10}}></Icon>
            </TouchableOpacity>
            <TouchableOpacity
              style={{justifyContent:'space-between',flex:1,borderRightWidth:1,borderColor:'#e2e2e2',padding:15,}}
              onPress={()=>this.CheckConfirm.current.visible(true)}
            >
              <Text style={{fontSize:14}}>전액환불</Text>
              <Icon name="arrow-right-circle-outline" size={24} color={'#DE1560'} style={{marginTop:10}}></Icon>
            </TouchableOpacity>
            <TouchableOpacity
              style={{justifyContent:'space-between',flex:1,borderRightWidth:1,borderColor:'#e2e2e2',padding:15,backgroundColor:'#f8f8f8'}}
            >
              <Text style={{fontSize:14,color:'#888'}}>작업불가</Text>
              <Icon name="arrow-right-circle-outline" size={24} color={'#ccc'} style={{marginTop:10}}></Icon>
            </TouchableOpacity>
          </View>
        </View>

        <CustomModal ref={this.ConfirmModal}>
          <View>
            <Text style={{fontSize:20,marginBottom:5,}}>작업확인</Text>
            <Text style={{color:'#888'}}>확인완료 처리를 진행할까요?</Text>
          </View>
        </CustomModal>

        <CustomModal ref={this.PhotoModal}>
          <View>
            <Text style={{fontSize:20}}><Text style={{color:'#01a1dd'}}>세탁물</Text>의 수거를 완료하셨나요?</Text>
            <Text style={{marginTop:10,color:"#888"}}>고객님의 세탁물 사진을 등록해주세요</Text>
            <Text style={{color:'#888'}}>물건 분실에 대한 보험처리를 위해 사용됩니다</Text>
          </View>

          <TouchableOpacity style={{height:180,borderWidth:3,borderColor:'#e2e2e2',justifyContent:'center',alignItems:'center',marginTop:20,borderRadius:10,}}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <Icon name="camera-outline" size={32} color={'#ccc'}></Icon>
              <Text style={{marginTop:5,color:'#888'}}>사진을 등록해주세요</Text>
            </View>
          </TouchableOpacity>
        </CustomModal>

        <CustomModal ref={this.InputModal}>
          <View>
            <View>
              <Text style={{fontSize:20}}>
                <Text style={{color:'#01a1dd'}}>결제</Text> 추가요청
              </Text>
              <Text style={{color:'#888',marginTop:5,}}>추가된 금액에 대해 청구할 수 있습니디</Text>
            </View>

            <View style={{height:1,backgroundColor:'#e2e2e2',marginVertical:15,}}></View>
            <Text style={{marginBottom:5,}}>추가금액입력</Text>
            <TextInput 
              style={{borderWidth:1,borderColor:'#e2e2e2',height:40,borderRadius:5,marginBottom:20,paddingHorizontal:10}}
              keyboardType={'number-pad'}
              placeholder={'금액입력'}
            />
            <Text style={{marginBottom:5,}}>사유입력</Text>
            <TextInput
              multiline={true}
              style={{borderWidth:1,borderColor:'#e2e2e2',height:100,borderRadius:5,paddingHorizontal:10,textAlignVertical:'top'}}
              placeholder={'추가금액이 발생된 원인을 상세히 입력해주세요'}
            />
          </View>
        </CustomModal>

        <CustomModal ref={this.WorkFinish}>
          <View>
            <Text style={{fontSize:20,marginBottom:5,}}>세탁완료</Text>
            <Text style={{color:'#888'}}>세탁완료 처리를 진행할까요?</Text>
          </View>
        </CustomModal>

        <CustomModal ref={this.DeliveryFinish}>
          <View>
            <Text style={{fontSize:20}}><Text style={{color:'#01a1dd'}}>세탁물</Text>의 배송을 완료하셨나요?</Text>
            <Text style={{marginTop:10,color:"#888"}}>고객님의 세탁물 사진을 등록해주세요</Text>
            <Text style={{color:'#888'}}>물건 분실에 대한 보험처리를 위해 사용됩니다</Text>
          </View>

          <TouchableOpacity style={{height:180,borderWidth:3,borderColor:'#e2e2e2',justifyContent:'center',alignItems:'center',marginTop:20,borderRadius:10,}}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <Icon name="camera-outline" size={32} color={'#ccc'}></Icon>
              <Text style={{marginTop:5,color:'#888'}}>사진을 등록해주세요</Text>
            </View>
          </TouchableOpacity>
        </CustomModal>

        <CustomModal ref={this.CheckConfirm}>
          <View>
            <Text style={{fontSize:20}}>검수완료</Text>
            <Text style={{marginTop:10,color:"#888"}}>변경된 상품의 수가 <Text style={{color:'#01a1dd'}}>1개</Text>있습니다</Text>
            <Text style={{color:'#888'}}>이대로 진행할까요?</Text>
          </View>
        </CustomModal>

        <CustomModal ref={this.RefundModal}>
          <View>
            <Text style={{fontSize:20}}>부분환불</Text>
            <Text style={{marginTop:10,color:"#888"}}>해당 주문건을 취소할까요?</Text>

            <View style={{marginTop:20}}>
              <Text style={{marginBottom:5,color:'#888'}}>취소금액</Text>
              <TextInput keyboardType="number-pad" style={{borderWidth:1,height:40,borderRadius:5,borderColor:'#aaa',paddingHorizontal:5,}}></TextInput>
            </View>

            <View style={{marginTop:20}}>
              <Text style={{marginBottom:5,color:'#888'}}>취소사유</Text>
              <View style={{borderWidth:1,borderColor:'#aaa',borderRadius:5,marginBottom:10,}}>
                <Picker
                  selectedValue={this.state.select}
                  style={{height:40,width:'100%'}}
                  onValueChange={(itemValue, itemIndex) => this.setState({ select: itemValue })}
                >
                  <Picker.Item label="고객변심으로 인한 취소" value={1}/> 
                  <Picker.Item label="취급하지 않는 세탁물" value={2}/>
                  <Picker.Item label="세탁오염정도가 심함" value={3}/>
                  <Picker.Item label="세탁실패로 인한 환불" value={4}/>
                </Picker>
              </View>
              <TextInput multiline style={{height:100,borderWidth:1,borderColor:'#aaa',borderRadius:5,padding:5,textAlignVertical:'top'}}></TextInput>
            </View>
          </View>
        </CustomModal>
      </ScrollView>
    ) 
  }
}