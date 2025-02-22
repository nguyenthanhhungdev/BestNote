import NoteItem from "@/components/NoteItem";
import {Note} from "@/models/NoteModel";
import {Div, ScrollDiv, Text, Input, Button} from "react-native-magnus";
import {useLocalSearchParams} from "expo-router";
import {faker} from '@faker-js/faker';
import {Dialog, Divider, PaperProvider, Paragraph, Portal} from 'react-native-paper';
import {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {ScrollView} from "react-native";


export default function NoteScreen() {
    // Lấy giá trị ID từ URL
    const {id} = useLocalSearchParams();
    console.log("ID nhận được:", id, "Kiểu dữ liệu:", typeof id);
    // Tạo note với dữ liệu giả lập
    const [note, setNote] = useState<Note>({
        id: id ? String(id) : "unknown",
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraphs(10),
        date: faker.date.recent().toISOString(),
    });

    // State để kiểm soát chế độ chỉnh sửa
    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState(note.content);
    const [visibleDialog, setVisibleDialog] = useState(false);

    return (
        <PaperProvider>
            <SafeAreaView style={{flex: 1}}>
                <Portal>
                    <Dialog visible={visibleDialog} onDismiss={() => setVisibleDialog(false)}>
                        <Dialog.Title>Chỉnh sửa ghi chú</Dialog.Title>
                        <Dialog.Content>
                            <Text>
                                Bạn có muốn chỉnh sửa ghi chú này không?
                            </Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={() => {
                                setVisibleDialog(false);
                                setIsEditing(true);
                            }}>Có</Button>
                            <Button onPress={() => setVisibleDialog(false)}>Không</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>

                <Div w={"100%"} bg={"gray800"} p={20} flex={1}>
                    <Text fontSize={25} color={"white"}>{note.title}</Text>
                    <Text fontSize={15} color={"gray500"}>Ngày
                        tạo: {new Date(note.date).toLocaleDateString()}</Text>
                    <Divider style={{marginTop: 10, marginBottom: 10}}/>
                    {/* Kiểm tra nếu đang chỉnh sửa thì hiển thị Input, nếu không thì hiển thị Paragraph */}
                    <ScrollView contentContainerStyle={{flexGrow: 1}}>

                        {isEditing ? (
                            <>
                                <Input
                                    multiline
                                    numberOfLines={30}
                                    fontSize={17}
                                    color={"white"}
                                    value={content}
                                    onChangeText={setContent}
                                    style={{color: "white", fontSize: 16, marginTop: 20}}
                                    bg="gray700"
                                    p={10}
                                    borderColor="gray500"
                                />
                            </>
                        ) : (
                            <Text
                                style={{
                                    color: "white",
                                    fontSize: 17,
                                    marginTop: 20,
                                }}
                                onPress={() => {
                                    setVisibleDialog(true);
                                    console.log("Content Click");
                                }}
                            >
                                {content}
                            </Text>
                        )}

                        {/* Hiển thị nút lưu khi đang chỉnh sửa */}
                        {isEditing && (
                            <Button
                                mt={10}
                                bg="blue600"
                                block
                                onPress={() => {
                                    setNote((prev) => ({...prev, content: content}));
                                    setIsEditing(false);
                                }}
                            >
                                Lưu
                            </Button>
                        )}
                    </ScrollView>

                </Div>
            </SafeAreaView>
        </PaperProvider>
    );
}