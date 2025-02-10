// src/components/NoteItem.tsx
import React from 'react';
import { Div, Text, Button } from 'react-native-magnus';
import { Note } from '@/models/NoteModel';
import {TouchableOpacity} from "react-native";

interface NoteItemProps {
  item: Note;
  onDelete: () => void;
  onEdit: () => void;
}

export default function NoteItem({ item, onDelete, onEdit }: NoteItemProps) {
  return (
      <TouchableOpacity onPress={onEdit}>
          <Div bg="gray900" p="lg" rounded="md" mt="lg" row justifyContent={"space-between"} alignItems={"center"}>
              <Div>
                  <Text color="white" fontSize="lg">{item.title}</Text>
                  <Text color="gray500" fontSize="sm">{new Date(item.date).toLocaleDateString()}</Text>
              </Div>
              <Div row >
                  <Button bg="red500" onPress={onDelete}>Delete</Button>
              </Div>
          </Div>
      </TouchableOpacity>

  )
}
