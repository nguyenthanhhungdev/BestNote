// src/hooks/useNotes.ts
import { useState, useEffect } from 'react';
import { getNotes, saveNotes } from '@/services/noteService';
import { Note } from '@/models/NoteModel';

export function useNotes() {
    const [notes, setNotes] = useState<Note[]>([]);
    useEffect(() => {
        async function fetchNotes() {
            const fetchedNotes = await getNotes();
            setNotes(fetchedNotes);
        }
        fetchNotes().then(r => r);
    }, []);

    const addNote = async (note: Note) => {
        const newNotes = [...notes, note];
        setNotes(newNotes);
        await saveNotes(newNotes);
    };

    return { notes, setNotes, addNote };
}
