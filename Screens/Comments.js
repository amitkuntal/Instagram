import React from 'react';
import {Text, View,FlatList,BackHandler } from 'react-native';
import {Header,Icon,Avatar,Button,Input} from 'react-native-elements';

class OtherScreen extends React.Component {
     render() {
        const { state } = this.props.navigation;    
        const params = state.params || {};
        BackHandler.addEventListener('hardwareBackPress',()=>this.props.navigation.navigate(params.go_back_key));
   
        return (
          
            <View>
            <Header backgroundColor="white">
            <Button
            icon={
                <Icon
                  name="arrowleft"
                  type="antdesign"
                  size={15}
                  color="black"
                />
              }
              type="clear"
            onPress ={()=>this.props.navigation.navigate(params.go_back_key)}
            />   
            <Text>Comments </Text>
            </Header>
            <View style={{width:"100%",height:"82%"}}>
                    <FlatList data={[1,2,4,5,6,7,8,9,10,11,12,13]}
                        renderItem={({Item})=>
                        <View style={{marginTop:"2%",flexDirection:"row",paddingLeft:"2%"}}>
                        <Avatar
                            rounded
                            size="small"
                            source={{
                                uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                            }}
                            />
                <View>
                    <Text style={{marginTop:"2.4%",marginLeft:"2%",fontSize:14}}>User Name</Text>
                    <Text style={{marginLeft:"2%",marginRight:"4%",fontSize:14}}>CommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsComments</Text>
                </View>
                
                </View>}>
                    </FlatList>
            </View>

            <View style={{flexDirection:"row"}}>
            <View style={{width:"80%"}}>
           <Input
                placeholder="Add a comment"/></View>
                <View style={{width:"20%"}}>
          
               <Button title="Post"
            type="clear"
            onPress ={()=>this.props.navigation.navigate('Home')}
            />
           </View>
            </View>
          
                
            </View>    
        
        );
    }
}

export default OtherScreen;