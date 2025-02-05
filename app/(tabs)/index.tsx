import {Text, View, StyleSheet, Button} from 'react-native';
import {router} from 'expo-router';
import {HelloWave} from "@/components/HelloWave";
import NoteItem from "@/components/NoteItem";
import "../../global.css";

export default function Index() {
    return (
        <NoteItem />
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#25292e',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     text: {
//         color: '#fff',
//     },
//     button: {
//         fontSize: 20,
//         textDecorationLine: 'underline',
//         color: '#fff',
//     },
// });
