import {Image, StyleSheet, Text, View} from "react-native";
import {Constants} from "@/constants/Constants";
import {Colors, GreyScaleColorScheme} from "@/constants/Colors";
import MessageAvatarBubble from "@/app/components/chat/message/MessageAvatarBubble";
import ImageData from "@/app/objects/ImageData";
import React from "react";

type Props = {
    content: string;
    who: string;
    userImage: ImageData | undefined;
}
export default function ImageFromSomeoneElse({content, who, userImage}: Readonly<Props>) {
    return (
        <View style={styles.container}>
            <MessageAvatarBubble who={who} userImage={userImage}/>
            <View style={styles.messageContainer}>
                <Text style={styles.whoText}>{who}</Text>
                <Image source={{uri: content}} style={[styles.messageTextContainer, styles.imageContainer]}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: Constants.generic.padding,
        display: "flex",
        flexDirection: "row",
        gap: Constants.generic.padding,
    },
    messageContainer: {
        flexBasis: '80%',
    },
    whoText: {
        color: GreyScaleColorScheme[4]
    },
    messageTextContainer: {
        borderRadius: Constants.generic.borderRadius,
        padding: Constants.generic.padding,
        backgroundColor: Colors.default.tintColor,
        color: Colors.default.color
    },
    imageContainer: {
        height: 200,
    }
});
