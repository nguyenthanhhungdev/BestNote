import NoteItem from "@/components/NoteItem";
import { Note} from "@/models/NoteModel";
import {Div} from "react-native-magnus";
// Mock Data
const mockNote = {
    id: "1",
    title: "Learn Expo Router",
    date: new Date().toISOString(), // Ngày hiện tại
} as Note;

// Mock Functions
const handleEdit = () => {
    console.log("Edit Note:", mockNote.id);
};

const handleDelete = () => {
    console.log("Delete Note:", mockNote.id);
};

const handleNoteClick = () => {
    console.log("View Note:", mockNote.id);
}

export default function NoteScreen() {
    return (
        <Div p={20}>
            <Div w={"100%"} bg={"gray800"} p={20} rounded={"md"}>
                <NoteItem item={mockNote} onDelete={handleDelete} onEdit={handleEdit} />
            </Div>
        </Div>
    );
}