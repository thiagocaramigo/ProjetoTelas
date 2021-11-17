import * as React from 'react';
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import { formato } from '../css/Styles';

export default function Home({navigation}) {
    return(
        <View> 
                <View style={formato.menu}>
                    <TouchableOpacity style={formato.btn}
                    onPress={()=>{
                        navigation.navigate("Camera");
                    }}>
                        <Text style={formato.txtbtn}> Camera </Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
}