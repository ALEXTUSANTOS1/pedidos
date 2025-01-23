import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { DrawerItemList, DrawerContentScrollView} from "@react-navigation/drawer";


export default function CustomDrower(props) {
    return(
        <DrawerContentScrollView {...props}>
            <View style={styles.profileArea}>
                <Image  source={require('../../../assets/img/user.png')} style={styles.imageProfile} />
                <Text style={styles.title}>Nome do Usuário</Text>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    profileArea:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderBottomColor: '#666e7e',
        borderBottomWidth: 1,
        marginBottom: 20
    },
    imageProfile:{
        resizeMode: 'cover',
        width: 100,
        height: 100,
        borderRadius: 25
    },
    title:{
        fontSize: 20,
        marginTop: 10,
        color: '#fff'
    }
})