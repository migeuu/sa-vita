import React from 'react';
import { FlatList } from "react-native";
import { useRoute } from '@react-navigation/native'
import chatRoomData from '../../../data/Chat';
import ChatMessage from '../../components/ChatMessage';
import InputBox from '../../components/inputBox';

const ChatRoomScreeen = () => {

    const route = useRoute();

    return (
        <>
            <FlatList
                data={chatRoomData.messages}
                renderItem={({ item }) => <ChatMessage message={item} />}
                inverted
            />
            <InputBox />
        </>

    );
}

export default ChatRoomScreeen;