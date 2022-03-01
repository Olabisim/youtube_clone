import React from 'react';
import { StyleSheet as SS, Text as T, View as V } from 'react-native';
import TopHeight from 'expo-constants'


const VideoPlayer = () => {

        return (
                <V style={{ flex: 1, marginTop: TopHeight.statusBarHeight }}>
                        <T>
                                VideoPlayer
                        </T>
                </V>
        )
}

export default VideoPlayer;