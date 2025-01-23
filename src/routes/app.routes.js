import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import CustomDrower from '../components/CustomDrower';

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
    return (
        <AppDrawer.Navigator
            drawerContent={(props)=> <CustomDrower {...props}/>}
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: '#171717'
                },
                drawerActiveBackgroundColor: '#6C6C6C',
                drawerActiveTintColor: '#FFF',
                drawerInactiveTintColor: '#FFF'
            }}    
        >
            <AppDrawer.Screen 
                name="Home" 
                component={Home} 
                options={{}}    
            />
        </AppDrawer.Navigator>
    )
}

export default AppRoutes;

