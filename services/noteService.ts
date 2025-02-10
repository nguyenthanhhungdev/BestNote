// src/services/noteService.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Note } from '@/models/NoteModel';

export const getNotes = async (): Promise<Note[]> => {
    const storedNotes = await AsyncStorage.getItem('notes');
    return storedNotes ? JSON.parse(storedNotes) : [];
};

export const saveNotes = async (notes: Note[]): Promise<void> => {
    await AsyncStorage.setItem('notes', JSON.stringify(notes));
};

export const deleteNote = async (id: string): Promise<Note[]> => {
    const notes = await getNotes();
    const updatedNotes = notes.filter(note => note.id !== id);
    await saveNotes(updatedNotes);
    return updatedNotes;
};
