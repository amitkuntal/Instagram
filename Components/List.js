import React from 'react';
import { FlatList } from 'react-native';
import Post from './Post';

class List extends React.Component {
    render() {
        return (
            <FlatList
                data={[1, 2, 3, 4, 5, 6]}
                renderItem={(item) => (<Post navigation={this.props.navigation} />)}
                style={{
                    marginTop: '2%',
                }}
            />
        );
    }
}

export default List;