import { Stack } from 'expo-router';
import {DarkTheme, DefaultTheme, ThemeProvider} from "@react-navigation/native";

export default function RootLayout() {
    return (
        <ThemeProvider value={ DarkTheme }>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" />
                <Stack.Screen name="note" options={{title: "Note Item"}}/>
            </Stack>
        </ThemeProvider>
    );
}

/*
*
*
*
Tên "tabs" có thể là thư mục chứa Tabs của bạn

    expo-router sử dụng tên thư mục làm tên tuyến đường.
    Nếu thư mục của bạn là (tabs), bạn cần sử dụng chính tên này khi khai báo Stack.Screen.

Nếu không sửa, expo-router có thể coi Tabs là một màn hình riêng biệt

    Khi đó, Stack sẽ hiển thị một tiêu đề mặc định cho màn hình Tabs, gây ra lỗi thanh (tabs) ở trên cùng.
*
* */
