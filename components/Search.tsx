import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import {FontAwesome} from '@expo/vector-icons';


interface Props {
    handleSearchRequest : (search:string) => string,
}

export default function Search(props:Props) {

    const [search, setSearch] = useState('');
    const [suggestion, setSuggestion] = useState([]);
    const [isFocus, setFocus] = useState(false)
    const textMinSearchLength = 2;


    const updateSearchState = (searchText:string) => {
        
    }

    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "#fff", borderRadius: 10, paddingHorizontal: 10, marginTop: 20 }}>
                <FontAwesome name='search' color={'black'} size={14} />
                <TextInput
                    value={search}
                    placeholder='Search for recipes'
                    style={{ padding: 8, flex: 1 }}
                    onFocus={() => {
                        setFocus(true)
                    }}
                    onChangeText={(text) => updateSearchState(text)}
                    onBlur={(e) => {
                        setFocus(false)
                        props.handleSearchRequest(search)
                    }}
                />
            </View>

            {/* <View style={{ position: 'relative', width: '100%', display: isFocus ? "flex" : 'none' }}>
                <View style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, backgroundColor: 'white', width: '100%', borderRadius: 5, paddingHorizontal: 10 }} >
                    {suggestion.map((value, index) =>
                        <TouchableOpacity key={index} style={{ paddingVertical: 10 }} onPress={() => selectFromSuggestion(value.display)}>
                            <Text key={index}>{value.display}</Text>
                            <View style={{ height: 1, marginTop: 5, backgroundColor: 'white' }}></View>
                        </TouchableOpacity>
                    )}
                </View>
            </View> */}

        </View>
    )
}