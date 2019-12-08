import React from 'react';
import { FlatList } from 'react-native';
import Post from './Post';

class List extends React.Component {
    render() {
        return (
            <FlatList
                data={[...this.props.data.Post]}
                renderItem={(item) => (<Post navigation={this.props.navigation} postData={{ ...item }} />)}
                style={{
                    marginTop: '2%',
                }}
            />
        );
    }
}

export default List;