import React from 'react';
import { Text, View ,AsyncStorage} from 'react-native';
import { Image, Button, Divider, Input, Icon } from 'react-native-elements';
import * as Facebook from 'expo-facebook';
import * as firebase from 'firebase'
import credential from './credential'
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const INSERT_USER = gql`mutation insert_User($objects: [User_insert_input!]! ) {
    insert_User(objects: $objects) {
      returning {
        Name
        Email
        User_id
        Profile
        User_Name
      }
    }
  }`


  

export default function Login({ ...props }) {
    
    // static navigationOptions = {
    //     drawerLockMode: 'locked-closed',
    // }
    const [insertUser, { loading,error, data }] = useMutation(INSERT_USER)
    if(loading){
        console.log(null);
        
    }
    if(error){
        // console.log(error);
       
        // props.navigation.setParams({User:error})
        // props.navigation.navigate('Profile',{id:"6"})   
        AsyncStorage.setItem('userId','OphFULv8SEM5MJqoyAKeqSJV2eg1').then(()=>{
            console.log("is")
            return props.navigation.navigate("Main")})
       .catch((err)=>console.log(err))
          
 }

    if(data){
        
            AsyncStorage.setItem('userId',data.insert_User.returning[0].User_id).then(()=>{
            console.log("is")
            return props.navigation.navigate("Main")})
       .catch((err)=>console.log(err))
        

        
    }

    async function loginWithFacebook() {
        try {
            const { type, token } = await Facebook.logInWithReadPermissionsAsync('955521354781055', { permissions: ['public_profile', 'email', "user_friends"] })
            if (type === 'success') {
                const credential = firebase.auth.FacebookAuthProvider.credential(token)
                // console.log(credential);
                firebase.auth().signInWithCredential(credential).catch((e) => {
                    console.log(e)
                })
            }
            firebase.auth().onAuthStateChanged((user) => {
                if (user != null) {
                 //    console.log(user)
                    var firstWord = user.displayName.replace(/ .*/, '');
                    var user_name = `${firstWord}` + Math.floor(1000 + Math.random() * 9000);
                 //    console.log("This is at label  1")
                 insertUser(
                     {
                         variables: {
                             objects: [
                                 {
                                     "Name": user.displayName,
                                     "Email": user.email,
                                     "User_id": user.uid,
                                     "Profile": user.photoURL,
                                     "User_Name": user_name,
                                     "PhoneNumber":user.phoneNumber
                                 }
                             ]
                         }
                     }
                 );
               
     
     
     
                 }
            })

        } catch (error) {
            console.log(error);


        }
    }


    return (
        <View>
            <View style={{ height: "93%" }}>
                <View style={{ marginTop: "7%", marginLeft: "10%", width: "80%", height: 150 }}>
                    <Image
                        source={{ uri: 'http://assets.stickpng.com/thumbs/5a4e432a2da5ad73df7efe7a.png' }}
                        style={{ width: "100%", height: "100%" }}
                    />
                    <View style={{ marginTop: "7%" }}>
                        <Button
                         onPress={loginWithFacebook}

                            title="Login With Facebook" />
                    </View>
                    <View style={{ marginTop: "10%" }}>
                        <View>
                            <Divider style={{ height: 1 }} />
                            <Text style={{
                                position: "absolute",
                                top: -15,
                                right: '47%',
                                backgroundColor: 'white',
                                padding: 6,
                            }}>OR</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: "7%" }}>
                        <View style={{ marginTop: "5%" }}>
                            <Input placeholder="Phone Number, UserName or Email"
                            />
                        </View>
                        <View style={{ marginTop: "7%" }}>
                            <Input placeholder="Password"
                            />
                        </View>
                        <View style={{ marginTop: "20%" }}>
                            <Button
                                title="Login" />
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ height: "7%", width: "100%", backgroundColor: "#F6F6F5", flexDirection: "row", justifyContent: "center" }}>
                <Text style={{ marginTop: "3.5%" }}>Don't Have an account? </Text>
                <Text onPress={() => props.navigation.navigate('SignUp')}
                    style={{ marginTop: "3.5%", color: "#2874A6", fontWeight: "bold" }}>SignUp</Text>
            </View>
        </View>


    );

}

