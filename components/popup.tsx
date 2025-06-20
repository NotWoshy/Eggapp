import React from 'react';
import { Modal, View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

type popUpProps = {
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const popUp : React.FC<popUpProps> = ({openModal, setOpenModal}) => {
  return (
    <Modal 
      visible={openModal}
      statusBarTranslucent={true}
      transparent={true}
      animationType="fade">
      <View style={styles.content}>
        <View style={styles.card}>
            <Text style={styles.title}>Time's up!</Text>
            <Text style={styles.desc}> The egg has finished cooking</Text>
            <TouchableOpacity style={[styles.button,
            {
              width:"100%",
              marginTop:24,
            }
            ]} onPress={() => setOpenModal(false)}>
                <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default popUp;

const styles = StyleSheet.create({
    desc: {
        fontSize: 30,
        lineHeight: 24,
        opacity: 0.7,
        fontFamily: "Micro5",
        justifyContent: "center",
      },
      title: {
        fontWeight: "600",
        fontSize: 30,
        marginBottom: 12,
        fontFamily: "Micro5",
        justifyContent: "center",
      },
      card: {
        width: "90%",
        padding: 20,
        backgroundColor: "white",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
      },
      content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
      },
      buttonText: {
        fontWeight: "600",
        fontSize: 30,
        color: "white",
        fontFamily: "Micro5",
      },
      button: {
        width: "90%",
        backgroundColor: "#F0BC2C",
        justifyContent: "center",
        alignItems: "center",
        height: 56,
        borderRadius: 8,
      },
      container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
});
