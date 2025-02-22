import React, {useState} from 'react';
import {FlatList, Alert, ListRenderItemInfo} from 'react-native';
import {Div, Button, Text, Input} from 'react-native-magnus';
import {useNotes} from '@/hooks/useNote';
import {deleteNote} from '@/services/noteService';
import NoteItem from '@/components/NoteItem';
import {Note} from '@/models/NoteModel';
import {router} from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import {faker} from '@faker-js/faker';

// Mock Data
const generateMockNotes = (count: number): Note[] => {
    const notes: Note[] = [];

    for (let i = 1; i <= count; i++) {
        const note: Note = {
            id: i.toString(),
            title: faker.lorem.sentence(),
            content: faker.lorem.paragraphs(2),
            date: faker.date.recent().toISOString(),
        };
        notes.push(note);
    }

    return notes;
};


const mockNotes = generateMockNotes(10);


export default function HomeScreen() {
    const {notes, setNotes} = useNotes();
    const [search, setSearch] = useState("");
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
    const handleEdit = (id: string) => {
        router.push({
            pathname: "/note/[id]",
            params: {
                id: id
            }
        });
    }
    const renderItem = ({item}: ListRenderItemInfo<Note>) => {
        return (
            <NoteItem item={item} onDelete={() => handleDelete(item.id)} onEdit={() => handleEdit(item.id)}/>
        )
    }
    return (
        <Div flex={1} p={20}>

            <Input p={10} mt={10}
                placeholder={"Tìm kiếm ghi chú"}
                value={search}
                onChangeText={setSearch}
                onFocus={() => setShowSearchButton(true)}
                onBlur={() => setTimeout(() => setShowSearchButton(false), 200)}
                suffix={
                    !!search.length && showSearchButton && (
                        <AntDesign name={"search1"} size={20} color={"gray500"} onPress={() => console.log(search)}/>
                    )
                }
                prefix={
                    !!search.length > 0 && (
                        <AntDesign name={"close"} size={20} color={"gray500"} onPress={() => setSearch('')}/>
                    )
                }
            />

            <FlatList
                data={mockNotes}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
            <Button mt={20} block onPress={() => router.push("/note")}>
                Thêm Ghi Chú
            </Button>
        </Div>
    )
}
