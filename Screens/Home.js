import React from 'react';
import { View, FlatList, AsyncStorage } from 'react-native';
import { gql } from "apollo-boost";
import { useLazyQuery } from "@apollo/react-hooks";
import MyHeader from '../Components/Header';
import Post from '../Components/Post';

const GET_POST = gql`
query getUser($User_id: String!) {
  Post(where: {User_id: {_neq: $User_id}}) {
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
}`;


function Home(props) {
    AsyncStorage.getItem('userId').then((data) => console.log(data))
    const [getPost, { loading, data }] = useLazyQuery(GET_POST);
    const [posts, setPosts] = React.useState([]);
    if (loading) {
        console.log("null");
    }

    React.useEffect(() => {
        if (data) {
            setPosts(data);
            console.log(data);
        }
    }, [data])

    React.useEffect(() => {
        AsyncStorage.getItem("userId").then(data => {
            getPost({ variables: { User_id: data } })
        })

    }, [])

    if (data) {
        return (
            <View>
                {/* {console.log(data)} */}
                <MyHeader title="Instagram" navigationProps={props.navigation} />
                <View style={{ marginBottom: "12%" }}>
                    <FlatList data={[...data.Post]}
                        renderItem={(item) => (<Post navigation={props.navigation} postData={{ ...item }} />)}>
                    </FlatList>
                </View>
            </View>
        )
    }
    return (<></>)

}

export default Home;