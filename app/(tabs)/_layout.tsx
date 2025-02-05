import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#ffd33d',
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'About',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: 'Explore',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name= 'explore' color={color} size={24}/>
                    ),
                }}
            />
        </Tabs>
    );
}

/*
*
*
* Khi một màn hình thuộc về Tabs Navigation, nó không có nút Back, vì bản chất Tabs không dùng cơ chế ngăn xếp (Stack). Tabs chỉ hiển thị nội dung mới khi chuyển đổi giữa các tab, chứ không push một màn hình mới lên trên.
*
* */
