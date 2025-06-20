import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  titleContainer: {
    width: "100%",
    alignItems: "center",
    paddingTop: 80, 
    //backgroundColor: "#F1D895",
  },
  title: {
    fontSize: 60,
    marginBottom: 0,
    fontFamily: "Micro5",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    //backgroundColor: "#F1D895",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius:5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: "Micro5",
  },
  image: {
    width: "90%",
    height: "90%",
    resizeMode: "contain",
    position: "absolute"
  },
  timerText: {
    fontSize: 50,
    fontFamily: 'Micro5',
  },
  buttonImage: {
    width: 170,
    height: 170,
    resizeMode: "contain"
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "repeat",
  }
});
