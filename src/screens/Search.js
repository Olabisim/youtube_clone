import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, FlatList, ActivityIndicator as AI } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import MiniCard from '../components/MiniCard';
// import { YOUTUBE_API_KEY } from 'react-native-dotenv'
import TopHeight from 'expo-constants'


const SearchScreen = () => {

        const YOUTUBE_API_KEY = ''

        const [value, setValue] = useState('')
        const [miniCardData, SetMiniCardData] = useState([])
        const [loading, setLoading] = useState(false)

        const fetchData = () => {

                setLoading(true)
                fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=${YOUTUBE_API_KEY}`)
                .then ( res => res.json())
                .then ( data => {
                        // console.log(data)
                        setLoading(false)
                        SetMiniCardData(data.items)
                })
                .catch(err => console.log(err))
        }


        return (
                <View style={{ flex: 1, marginTop: TopHeight.statusBarHeight }}>

                        <View style = {{padding: 5, flexDirection: "row", justifyContent: "space-around", elevation : 5, backgroundColor: "white"}}>

                                <AntDesign name="back" size={24} color="black" />

                                <TextInput 
                                        style = {{width: "70%", backgroundColor: "#e6e6e6"}}
                                        value={value}
                                        onChangeText={(text) => setValue(text)}
                                />

                                <Feather name="send" size={24} color="black" 
                                        onPress={() => fetchData()}
                                />

                                {
                                        loading 
                                        &&
                                        <AI size="large" color="red" style={{marginTop: 10}} />

                                }

                                <FlatList 
                                
                                        data = {miniCardData}
                                        renderItem={({item}) => {
                                                return <MiniCard 
                                                                videoId={item.id.videoId} 
                                                                title={item.snippet.title}
                                                                channel={item.snippet.channelTitle}
                                                        />
                                        }}
                                        keyExtractor={item => item.id.videoId}

                                />

                        </View>
                
                </View>
        )
}


export default SearchScreen