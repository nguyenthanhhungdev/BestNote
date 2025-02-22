// src/components/NoteItem.tsx
import React from 'react';
import { Div, Text, Button } from 'react-native-magnus';
import { Note } from '@/models/NoteModel';
import {TouchableOpacity} from "react-native";

interface NoteItemProps {
  item: Note;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

export default function NoteItem({ item, onDelete, onEdit }: NoteItemProps) {
  return (
      <TouchableOpacity onPress={() => onEdit(item.id)}>
          <Div bg="gray900" p="lg" rounded="md" mt="lg" row justifyContent={"space-between"} alignItems={"center"}>
              <Div flex={1} pr="md">
                  <Text color="white" fontSize="lg" numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
                  <Text color="gray500" fontSize="sm">{new Date(item.date).toLocaleDateString()}</Text>
              </Div>
              <Div row >
                  <Button bg="red500" onPress={() => onDelete(item.id)}>Delete</Button>
              </Div>
          </Div>
      </TouchableOpacity>

  )
}
