import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text } from "react-native";
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from "expo-location";

function Main(){ 
    const [currentRegion, setCurrentRegion] = useState(null);

    useEffect(() => {
        async function loadInitialPosition(){
            const { granted } = await requestPermissionsAsync();

            if (granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });

                const { latitude, longitude } = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.02,
                })
            }
        }
    }, []);

    if(!currentRegion){
        return null;
    }

    return (
        <MapView initialRegion={currentRegion} style={styles.map}>
            <Marker coordinate={{ latitude: -24.9822717, longitude: -53.4700523}}>
                <Image style={styles.avatar} source={{ uri: 'https://avatars2.githubusercontent.com/u/25481145?s=460&v=4'}} />
                <Callout>
                    <View style={styles.callout}>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                    </View>
                </Callout>
            </Marker>    
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
    avatar: {
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#fff'
    },
})

export default Main;