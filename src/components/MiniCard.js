import React from 'react'
import { StyleSheet, Text as T, View as V, Image as I, Dimensions as D} from 'react-native';


// image :::  https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60
const MiniCard = ({ title, videoId, channel }) => {

        return (
                <V style={{flexDirection: "row", margin: 12, marginBottom: 0}}>
                        
                        <I 
                                source={{uri: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}}
                                style={{ 
                                        width: "45%",
                                        height: 100
                                }}
                        />

                        <V style = {{ paddingLeft: 7}}>
                        
                                <T 
                                        style={{
                                                fontSize: 15,
                                                width: D.get("screen").width/2
                                        }}
                                        ellipsizeMode= "tail"
                                        numberOfLines={3}
                                >
                                        {title}
                                </T>
                                <T style={{fontSize: 10}}>{channel}</T>

                        </V>

                </V>
        )

}

export default MiniCard