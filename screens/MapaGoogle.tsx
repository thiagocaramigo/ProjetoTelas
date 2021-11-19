import * as React from "react"
import { View, Text } from "react-native"
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { formato } from "../css/Styles";


export default function MapaGoogle(){

const[markes,setMarkes] = React.useState([
    {
    latIng:{latitude:-23.54512537254123, longitude: -46.474256873698664},
    title:"Arena Corinthians",
    description:"Arena mais linda do Brasil",
    },
    {       
        latIng:{latitude:-23.541082871615988, longitude:  -46.575241746708585},
        title:"Casa do Pastel",
        description:"Restaurante e Lanchonete",
    },
    {       
        latIng:{latitude:-23.539853376257966, longitude: -46.59397429470312},
        title:"Academia Smart-Fit",
        description:"Academia",
    },        
])

    return(
        <View style={formato.conteudo}>
            <MapView
            initialRegion={{
                latitude: -23.54510570131062,
                longitude: -46.47424614486367,
                latitudeDelta: 0.007,
                longitudeDelta: 0.007,
              }}
            style={formato.mapa}>

                {
                    markes.map((m,ix)=>(
                        <Marker
                             key={ix}
                             coordinate={m.latIng}
                             title={m.title}
                             description={m.description}
                        />
                ))
            }

                </MapView>
        </View>
    );
}