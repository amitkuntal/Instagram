import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { Header } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import { DrawerNavigatorItems } from 'react-navigation-drawer';

export default CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView
            style={styles.container}
            forceInset={{ top: 'always', horizontal: 'never' }}
        >
            <Header containerStyle={{ backgroundColor: '#F5F5F5' }}
                leftComponent={{ icon: 'ios-settings', type: 'ionicon', size: 25 }}
                centerComponent={{ text: 'Settings', style: { fontSize: 22, fontWeight: 'bold' } }}
            />
            <DrawerNavigatorItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});