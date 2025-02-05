// src/components/NoteItem.tsx
import React from 'react';
import { Div, Text, Button } from 'react-native-magnus';
import { Note } from '../models/NoteModel';

interface NoteItemProps {
  item: Note;
  onDelete: () => void;
  onEdit: () => void;
}

export default function NoteItem(/*{ item, onDelete, onEdit }: NoteItemProps*/) {
  return (
      <Div bg="black">
        <Text>Hello</Text>

      </Div>
  )
}
