import React, {useState} from 'react';
import {FlatList, TextInput, Alert} from 'react-native';
import {Div, Button, Text} from 'react-native-magnus';
import {useNotes} from '@/hooks/useNote';
import {deleteNote} from '@/services/noteService';
import NoteItem from '@/components/NoteItem';
import {Note} from '@/models/NoteModel';
import {router} from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function HomeScreen() {
    const {notes, setNotes} = useNotes();
    const [search, setSearch] = useState('');
    const [showSearchButton, setShowSearchButton] = useState(false);
    const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(search.toLowerCase()));
    const handleDelete = async (id: string) => {
        Alert.alert("Xóa Note", "Bạn có chắc muốn xóa note này?", [
            {
                text: "Không",
                style: "cancel"
            },
            {
                text: "Có",
                onPress: async () => {
                    const updatedNotes = await deleteNote(id);
                    setNotes(updatedNotes);
                }
            }
        ]);
    }
    return (
        <Div flex={1} p={20}>
            <Div row alignItems={"center"} borderWidth={1} rounded={25} borderColor={"gray300"} bg={"white"} p={15}
                 h={45}>

                <TextInput
                    style={{flex: 1, marginLeft: 10, height: 30}}
                    placeholder={"Tìm kiếm ghi chú"}
                    value={search}
                    onChangeText={setSearch}
                    onFocus={() => setShowSearchButton(true)}
                    onBlur={() => setTimeout(() => setShowSearchButton(false), 200)}
                />
                {search.length > 0 && showSearchButton && (
                    <AntDesign name={"search1"} size={20} color={"gray500"} onPress={() => {console.log(search)}}/>
                )}
            </Div>
            <FlatList
                data={filteredNotes}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <NoteItem item={item} onDelete={() => handleDelete(item.id)}
                              onEdit={() => router.push('/note'/*, { note: item }*/)}/>
                )}
            />
            <Button mt={20} block onPress={() => router.push("/note")}>
                Thêm Ghi Chú
            </Button>
        </Div>
    )
}
