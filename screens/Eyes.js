import { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Button,Pressable, Modal} from 'react-native';


// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

const test = [
    {
        id: 'visual',
        text: 'Visual Acuaity'

    },
    {
        id: 'color',
        text: 'Color Vision'
    },
    {
        id: 'contrast',
        text: 'Contrast'
    }
]

const Eyes =() => { 
    
    const [modalVisible, setModalVisible] = useState(false);
    
    return (
        <>
            <Modal
                animationType="false"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                        >
                        <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            {test.map((element, i)=>{
                return (
                    <View key={i} style={style.container}>
                        {/* Aquí va el map */}
                        <View style={style.image}/>
                        <Text style={style.text}>
                            {element.text}
                        </Text>
                        <Pressable
                            style={style.button}
                            onPress={()=> setModalVisible(true)}
                        >
                            <Text>
                                Start
                            </Text>
                        </Pressable>
                    </View>
                )
            })}
            
            
        </>
        
    );
}

export default Eyes;




const style = StyleSheet.create({
    container: {
        backgroundColor: '#C5C6D0',
        width: '80%',
        height: 100,
        display: 'flex',
        flexDirection:"row",
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 15,
        borderRadius: 5,
    },
    image: {
        backgroundColor: 'pink',
        width: 80,
        height: 80,
    },
    button: {
        backgroundColor: '#4abbdd',
        width: 60,
        height: 35,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        width: '35%',
        textAlign: 'center',
    }
});

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 0,
      backgroundColor: "#1e1e1e",
    //   borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width: '100%',
      height: '100%'
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });