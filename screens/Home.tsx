import * as React from 'react';
import { Button } from 'react-native';
import { ImageBackground, View, Text, TouchableOpacity, TextInput } from 'react-native';
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

                    <TouchableOpacity style={formato.btn}
                    onPress={()=>{
                        navigation.navigate("Galeria");
                    }}>
                        <Text style={formato.txtbtn}> Galeria </Text>
                    
                        
                    </TouchableOpacity>   

                </View>
        </View>
    );
}