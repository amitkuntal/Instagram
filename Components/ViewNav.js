import React from "react";
import { StyleSheet, AsyncStorage, Text, View, TouchableOpacity, Button, SafeAreaView } from "react-native";
import { Avatar, Icon, Divider } from "react-native-elements";
import _ from "lodash";
import MyHeader from "../Components/Header";
import { gql } from "apollo-boost";
import { useLazyQuery } from "@apollo/react-hooks";

const styles = StyleSheet.create({
  counterElem: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  }
});
const GET_USER = gql`
query getUser($User_id: String!) {
  User(where: {User_id: {_eq: $User_id}}) {
      Profile
      User_id
      User_Name
      PhoneNumber 
      Name
      Email
      Post
      Follower
      Following
  }
  Post(where: {User_id: {_eq: $User_id}}) {
    Post_id
    Image
    Caption
    User_id
     User{
      Name
      User_id
      Profile
    }
  }
}

      
  
`;

export default function ViewNav(props) {
  const [getUser, { loading, data }] = useLazyQuery(GET_USER);
  const [posts, setPosts] = React.useState([]);
  if (loading) {
    console.log("null");
  }

  React.useEffect(() => {
    if (data && data.Post) {
      setPosts(data.Post)
    }
  }, [data])



  React.useEffect(() => {

    AsyncStorage.getItem("userId").then(data => {
      getUser({ variables: { User_id: data } })


    })

  }, [])




  const { navigate, state } = props.navigation;
  //   console.log(state.key);
  return (

    <SafeAreaView>
      <MyHeader title={data ? data.User[0].User_Name : ""} navigationProps={props.navigation} />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          margin: "5%"
        }}
      >
        <View
          style={{
            marginRight: "8%"
          }}
        >
          <Avatar
            rounded
            size="large"
            title="User's Name"
            source={{
              uri: data ? data.User[0].Profile : "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: "5%"
          }}
        >
          <View style={(styles.counterElem, { textAlign: "center" })}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>{data ? data.User[0].Post : "0"}</Text>
            <Text>Posts</Text>
          </View>
          <View style={(styles.counterElem, { textAlign: "center" })}>
            <Text
              onPress={() =>
                props.navigation.navigate("followData", {
                  go_back_key: state.key
                })
              }
              style={{ fontWeight: "bold", fontSize: 18 }}
            >
              {data ? data.User[0].Follower : "0"}
            </Text>
            <Text
              onPress={() =>
                props.navigation.navigate("followData", {
                  go_back_key: state.key
                })
              }
            >
              Followers
            </Text>
          </View>
          <View style={(styles.counterElem, { textAlign: "center" })}>
            <Text
              onPress={() =>
                props.navigation.navigate("followData", {
                  go_back_key: state.key
                })
              }
              style={{ fontWeight: "bold", fontSize: 18 }}
            >
              {data ? data.User[0].Following : "0"}

            </Text>
            <Text
              onPress={() =>
                props.navigation.navigate("followData", {
                  go_back_key: state.key
                })
              }
            >
              Following
            </Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 18,
          marginLeft: "4%"
        }}
      >
        {data ? data.User[0].Name : "User's Name"}
      </Text>
      <Text style={{ marginLeft: "4%" }}>
        {data ? (data.User[0].Bio || "") : "Bio"}
      </Text>
      <Divider marginTop={"2%"} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          margin: "2%"
        }}
      >
        <Icon
          onPress={() => props.navigation.navigate("Grid", { posts: posts })}
          // onPress={() => props.navigation.navigate("Grid",{posts:data?data.Post:[{}]})}
          name="apps"
          type="material"
          size={30}
        />

        <Icon
          onPress={() => {
            return props.navigation.navigate("List", { posts: posts });
            // return props.navigation.navigate("List",{posts:data?data.Post:[]});
          }}
          name="format-list-bulleted"
          type="material-community"
          size={30}
        />
      </View>
      <Divider />
    </SafeAreaView>
  );
}