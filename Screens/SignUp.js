import React from 'react';
import { Text, View } from 'react-native';
import { Avatar, Card, Image, Button, Divider, Input } from 'react-native-elements';
import * as Facebook from 'expo-facebook';
import * as firebase from 'firebase'
import credential from './credential'
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';


firebase.initializeApp(credential.firebaseConfig);
const INSERT_USER = gql`mutation insert_User($objects: [User_insert_input!]! ) {
    insert_User(objects: $objects) {
      returning {
        Name
        Email
        User_id
        Profile
        User_Name
        PhoneNumber
      }
    }
  }`


export default function SignUp({ ...props }) {

    // static navigationOptions = {
    //     drawerLockMode: 'locked-closed',
    // }
    const [insertUser, { loading, data }] = useMutation(INSERT_USER)
     if(loading){
         console.log(null);
         
     }
     else{
         console.log(data);
         props.navigation.navigate('TabNav')
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
                    console.log(user)
                    var firstWord = user.displayName.replace(/ .*/, '');
                    var user_name = `${firstWord}` + Math.floor(1000 + Math.random() * 9000);
                    console.log("This is at label  1")
    
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
                    )
    
    
    
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
                           onPress={()=>{
                               event.preventDefault();
                               return loginWithFacebook}}

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
                        <View style={{ marginTop: "2%" }}>
                            <Input placeholder="Phone Number or Email"
                            />
                        </View>
                        <View style={{ marginTop: "5%" }}>
                            <Input placeholder="Full Name"
                            />
                        </View>
                        <View style={{ marginTop: "5%" }}>
                            <Input placeholder="User Name"
                            />
                        </View>
                        <View style={{ marginTop: "5%" }}>
                            <Input placeholder="Password"
                            />
                        </View>
                        <View style={{ marginTop: "5%" }}>
                            <Button
                                title="SignUp" />
                        </View>
                    </View>



                </View>
            </View>
            <View style={{ height: "7%", width: "100%", backgroundColor: "#F6F6F5", flexDirection: "row", justifyContent: "center" }}>
                <Text style={{ marginTop: "3.5%" }}>Already Have an account? </Text>
                <Text onPress={() => props.navigation.navigate('Login')}
                    style={{ marginTop: "3.5%", color: "#2874A6", fontWeight: "bold" }}>Login</Text>
            </View>
        </View>


    );

}
