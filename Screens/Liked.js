import React from "react";
import { View, FlatList, AsyncStorage } from "react-native";
import MyHeader from "../Components/Header";
import Grid from "../Components/Grid";
import { useLazyQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_LIKED = gql`
  query getLike($User_id: String!) {
    Like(where: { User_id: { _eq: $User_id } }) {
      Parent_id
    }
  }
`;

const GET_POST = gql`
  query getUser($Post_id: [String!]!) {
    Post(where: { Post_id: { _in: $Post_id } }) {
      User_id
      Image
      Caption
    }
  }
`;

var parentId = [];

export default function Liked({ ...props }) {
  const [getParentId, { data }] = useLazyQuery(GET_POST);
  //   console.log("loading", loading);
  //   console.log("data", data);

  const [getLike, { data: mydata }] = useLazyQuery(
    GET_LIKED
  );

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  React.useEffect(() => {
    console.log(mydata);

    if (mydata) {
      parentId = mydata.Like.map(parent => parent.Parent_id);
      getParentId({ variables: { Post_id: parentId } });
    }
  }, [mydata]);

  React.useEffect(() => {
    AsyncStorage.getItem("userId").then(data => {
      return getLike({ variables: { User_id: data } });
    })
  }, []);
  if (data) {
    return (
      <View>
        <MyHeader title="Liked Posts" navigationProps={props.navigation} />
        <View style={{ marginBottom: "9%" }}>
          <Grid navigation={props.navigation} data={data} />
        </View>
      </View>
    );
  }
  return (<></>)

}
