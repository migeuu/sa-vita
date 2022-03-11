import React from 'react';
import { Text } from 'react-native';
import { Message} from '../../../types'
import { View } from '../Themed';
import moment from "moment";
import styles from '../ChatMessage/styles';

export type ChatMessageProps = {
    message: Message;
}

const ChatMessage = (props: ChatMessageProps) => {
    const { message } = props;

    const isMyMessage = () => {
        return message.user.id === 'u2';
    } 

    return (
        <View style={styles.container}>
            <View style={[
                styles.messageBox, {
                    backgroundColor: isMyMessage() ? '#DCF8C5' : '#FFF',
                    marginLeft: isMyMessage() ? 50 : 0,
                    marginRight: isMyMessage()? 0 : 50,
                }
            ]}>
                {!isMyMessage() && <Text style={styles.name} >{message.user.name}</Text>}
                <Text style={styles.message} >{message.content}</Text>
                <Text style={styles.time} >{moment(message.createdAt).fromNow()}</Text>
            </View>
        </View>
    )
        
}

export default ChatMessage;