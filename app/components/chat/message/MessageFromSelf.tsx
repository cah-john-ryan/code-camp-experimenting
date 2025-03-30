import {StyleSheet, Text, View} from "react-native";
import {Constants} from "@/constants/Constants";
import {Colors} from "@/constants/Colors";
import MessageType from "@/app/objects/MessageType";

type Props = {
    text: string;
    type: MessageType;
}

export default function MessageFromSelf({text}: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.messageContainer}>
                <Text style={styles.messageTextContainer}>
                    {text}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: Constants.generic.padding,
        display: "flex",
        flexDirection: "row-reverse",
    },
    messageContainer: {
        flexBasis: '80%',
    },
    messageTextContainer: {
        borderRadius: Constants.generic.borderRadius,
        padding: Constants.generic.padding,
        backgroundColor: Colors.default.primaryColor,
        color: Colors.default.color
    }
})
