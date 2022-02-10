import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Eyes =() => { 
    return (
        <>
            <View style={style.container}>
                <View style={style.square}>
                    <View 
                        style={style.redSquare}
                    />
                    <View 
                        style={style.blueSquare}
                    />
                </View>
            </View>
            <View style={style.buttonsContainer}>
                <View style={style.downButton}>

                </View>
                <View style={style.upButton}>

                </View>

            </View>
        </>
        
    );
}

export default Eyes;

const style = StyleSheet.create({
    container: {
        backgroundColor: '#1e1e1e',
        width: '100%',
        height: '80%',
        display: 'flex',
        flexDirection:"row",
        justifyContent: 'center',
        alignItems: 'center',

    },
    square: {
        backgroundColor: 'black',
        width: .5*windowWidth,
        height: .5*windowWidth,
        display: 'flex',
        flexDirection:"row"
    },
    redSquare: {
        position: 'absolute',
        backgroundColor: 'red',
        width: 25,
        height: 100,
        borderRadius: 5,
        top: 10,
        

    },
    blueSquare: {
        position: 'absolute',
        backgroundColor: 'blue',
        width: 25,
        height: 100,
        borderRadius: 5,
        left: 25,
    },
    buttonsContainer: {
        backgroundColor: 'pink',
        height: '20%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    downButton: {
        backgroundColor: 'black',
        borderRadius: 5,
        width: 75,
        height: 75,
        margin: 5,
    },
    upButton: {
        backgroundColor: 'black',
        borderRadius: 5,
        width: 75,
        height: 75,
        margin: 5,
    }

})