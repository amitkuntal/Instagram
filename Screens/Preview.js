import React,{useState} from "react";
import { View, Image, KeyboardAvoidingView,AsyncStorage } from "react-native";
import { Header, Icon, Button, Input } from "react-native-elements";
// import * as firebase from 'firebase'
import * as firebase from "firebase/app";
import "firebase/storage";
import credential from "./credential";
import { TextInput } from "react-native-gesture-handler";
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost'
var storageRef = firebase.storage().ref();

const UPDATE_POST=gql`mutation insert_Post($objects: [Post_insert_input!]!, $User_id: String!) {
    insert_Post(objects: $objects) {
      returning {
        User_id
        Post_id
        Caption
        Image
      }
    }
    update_User(where: {User_id: {_eq: $User_id}}, _inc: {Post: 1}){
      affected_rows
    }
  }
  `

 

export default function Preview(props) {
   
    const[text,setText]=useState(' ')
  
    
    

    const [PostUpdate, { data,error}] = useMutation(UPDATE_POST)

    

    

    React.useEffect(() => {



             if(error){
                 console.log(error);
                 
             }
            if(data){
                console.log(data);
                
            }
       
    }, [data,error])



    

    uploadImageonfirebase = blob => {
      var file = blob;

      var metadata = {
        contentType: "image/jpeg"
      };

      var uploadTask = storageRef
        .child("images/" + file._data.name)
        .put(file, metadata);

      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        function(snapshot) {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED:
              console.log("Upload is paused");
              break;
            case firebase.storage.TaskState.RUNNING:
              console.log("Upload is running");
              break;
          }
        },
        function(error) {
          switch (error.code) {
            case "storage/unauthorized":
              break;

            case "storage/canceled":
              break;

            case "storage/unknown":
              break;
          }
        },
        function() {
          uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
              console.log(downloadURL);
              
            
              
            AsyncStorage.getItem('userId').then((data)=>{
                console.log(text);
                console.log(typeof(text))
                
                
                return (PostUpdate({
                    variables:{
                        "objects": [
                          {
                            "User_id":  data,
                            "Post_id":  Math.random().toString(36).substring(7),
                            "Caption":  text,
                            "Image":downloadURL
                            
                          }
                        ],
                        "User_id": data
                        
                      }
                }))
            })
            
              
             

          });
        }
      );
    };

    uriToBlob = uri => {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function() {
          resolve(xhr.response);
        };

        xhr.onerror = function() {
          reject(new Error("uriToBlob failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", uri, true);

        xhr.send(null);
      });
    };

    function uploadImage(url) {
      uriToBlob(url).then(blob => {
        console.log(blob);

          uploadImageonfirebase(blob)
        
    });
    }
   

    return (
      <View>
        <Header
          backgroundColor="white"
          leftComponent={
            <Icon
              name="arrowleft"
              type="antdesign"
              size={20}
            
            />
          }
          rightComponent={
            <Button
              title="Post"
              type="clear"
              onPress={() =>
                uploadImage(props.navigation.state.params.photo)
              }
            />
          }
        />
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={25}>
          <Image
            style={{ height: "70%", width: "100%" }}
            source={{ uri: `${props.navigation.state.params.photo}` }}
          />
          <View style={{ height: "25%", width: "100%", alignItems: "center" }}>
            <TextInput
                onChangeText={(text) => setText(text)}

              placeholder="Add Caption"
              label="Caption"
              labelStyle={{
                marginTop: 50,
                fontWeight: "bold",
                fontSize: 18,
                color: "black",
                
                
              }}
            />{data?props.navigation.navigate('Profile'):<></>}
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }

