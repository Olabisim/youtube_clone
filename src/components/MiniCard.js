import React from 'react'
import { StyleSheet, T as T, V as V, I as I, D as D} from 'react-native';


const MiniCard = () => {

        return (
                <V style={{flexDirection: "row", margin: 12, marginBottom: 0}}>
                        
                        <I 
                                source={{uri: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"}}
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
                                        This is an amazing course
                                </T>
                                <T style={{fontSize: 10}}>coders never quit</T>

                        </V>

                </V>
        )

}

export default MiniCard