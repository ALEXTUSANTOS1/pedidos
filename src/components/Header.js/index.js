import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function Header({ title }) {
    const navigate = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigate.openDrawer()}>
                <Ionicons name="menu" size={50} color="black" />
            </TouchableOpacity>
            {title && (
                <Text>{title}</Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        height: 120
    }
})