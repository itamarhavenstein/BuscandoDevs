import React, { useEffect, useState } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, Image, View, Text } from 'react-native';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

function Main() {
    const [currentRegion, setCurrentRegion] = useState(null);
    useEffect(() => {
        async function loadInitialPosition() {
            const { granted } = await requestPermissionsAsync();

            if (granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });
                const { latitude, longitude } = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                })
            }
        }
        loadInitialPosition();
    }, []);

    if (!currentRegion) {
        return null;
    }
    // -26.8640636,-48.6437952
    return <MapView initialRegion={currentRegion} style={styles.map} >
        <Marker coordinate={{ latitude: -26.8640636, longitude: -48.6437952 }}>
            <Image style={styles.avatar} source={{ uri: 'https://avatars1.githubusercontent.com/u/28792479?s=460&u=6e0fb5523c1df65393d446eba713e507e8bfe50f&v=4' }} />
            <Callout onPress={() => {
                //navegação
                
            }}>
                <View style={styles.callout}>
                    <Text style={styles.devName}>Itamar Havenstein</Text>
                    <Text style={styles.devBio}>Desenvolvedor de software na HavensTech</Text>
                    <Text style={styles.devTechs}>ReactJs, React Native, JavaScript</Text>
                </View>
            </Callout>
        </Marker>
    </MapView>
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    avatar: {
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#FFF',
    },
    callout: {
        width: 260,
    },
    devName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    devBio: {
        color: '#666',
        marginTop: 5,
    },
    devTechs: {
        marginTop: 5,
    },
})

export default Main;
