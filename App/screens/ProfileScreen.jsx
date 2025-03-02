import React from 'react';
import { AntDesign, EvilIcons, Ionicons } from "@expo/vector-icons";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import { View, Text, StyleSheet, Image, Pressable, ToastAndroid, Alert } from 'react-native'

function ProfileScreen() {
    return (
        <View style={{ paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: "500" }}>Account</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 8, gap: 8 }}>
            <Pressable onPress={() => {
                Alert.alert("Changing Photo")
            }} style={{ position: 'relative' }}>
                <Image source={require('../assets/DP.jpg')} style={styles.accountInfoImage} />
                <AntDesign style={{ backgroundColor: 'white', position: 'absolute', bottom: -8, right: -8, padding: 2, borderRadius: 100 }} name="camerao" size={24} color="black" />
            </Pressable>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 18, fontWeight: '600' }}>Anushka Singh</Text>
                    <Text style={{ fontSize: 14 }}>anushka@gmail.com</Text>
                </View>
                <View style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Pressable>
                        <EvilIcons name="pencil" size={50} color="black" />
                    </Pressable>
                </View>
            </View>

            <View style={{ height: 1, width: '100%', backgroundColor: 'lightgray' }} />

            <View style={{ paddingVertical: 16, gap: 24 }}>
                <View style={{ gap: 12, flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name="qr-code-outline" size={32} color="black" />
                    <Text style={{ fontSize: 16 }}>Scan Code</Text>
                </View>
                <View style={{ gap: 12, flexDirection: 'row', alignItems: 'center' }}>
                    <FontAwesome name="diamond" size={24} color="black" />
                    <Text style={{ fontSize: 16 }}>Splitwise Pro</Text>
                </View>
            </View>

            <Text style={{ fontSize: 22, fontWeight: "500" }}>Preferences</Text>
            <View style={{ paddingVertical: 16, gap: 24 }}>
                <View style={{ gap: 12, flexDirection: 'row', alignItems: 'center' }}>
                    <Fontisto name="email" size={24} color="black" />
                    <Text style={{ fontSize: 16 }}>Email Settings</Text>
                </View>
                <View style={{ gap: 12, flexDirection: 'row', alignItems: 'center' }}>
                    <Feather name="bell" size={24} color="black" />
                    <Text style={{ fontSize: 16 }}>Device and Push Notification Settings</Text>
                </View>
                <View style={{ gap: 12, flexDirection: 'row', alignItems: 'center' }}>
                    <Entypo name="lock" size={24} color="black" />
                    <Text style={{ fontSize: 16 }}>Security</Text>
                </View>
            </View>

            <Text style={{ fontSize: 22, fontWeight: "500" }}>Feedback</Text>
            <View style={{ paddingVertical: 16, gap: 24 }}>
                <View style={{ gap: 12, flexDirection: 'row', alignItems: 'center' }}>
                    <AntDesign name="star" size={24} color="black" />
                    <Text style={{ fontSize: 16 }}>Rate Splitwise</Text>
                </View>
                <View style={{ gap: 12, flexDirection: 'row', alignItems: 'center' }}>
                    <FontAwesome6 name="contact-card" size={24} color="black" />
                    <Text style={{ fontSize: 16 }}>Contact Splitwise Support</Text>
                </View>
            </View>

            <View style={{ height: 1, width: '100%', backgroundColor: 'lightgray' }} />

            <View style={{ paddingVertical: 16, gap: 24 }}>
                <View style={{ gap: 12, flexDirection: 'row', alignItems: 'center' }}>
                    <AntDesign name="logout" size={24} color="red" />
                    <Text style={{ fontSize: 16, color: 'red' }}>Log Out</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
        backgroundColor: "white"
    },
    screenHeading: {
        paddingHorizontal: 14,
        fontSize: 22,
        paddingTop: 8,
        fontWeight: 500,
    },
    accountInfoSection: {
        paddingHorizontal: 14,
        gap: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    accountInfoImage: {
        height: 60,
        width: 60,
        borderRadius: 100,
        backgroundColor: 'orange'
    },
    accountButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 24
    },
    accountButtonsText: {
        flex: 1,
        fontSize: 16,
    },
    avatar: {
        height: 70,
        width: 70,
        borderRadius: 35, // Half of the height and width to make it circular
    }
})

export default ProfileScreen;