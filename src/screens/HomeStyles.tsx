import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        height: "100%",
        width: "100%",
      
    },
    container2: {
        backgroundColor: "rgba(201, 186, 255, 1)",
        alignItems: "center",
        justifyContent: "space-around",
        borderRadius: 18,
        width: "50%",
        height: "50%",
    },
    containercima: {
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        height: 130,
        borderRadius: 18,
        backgroundColor: "rgba(116, 116, 116, 1)",
    },
    titulo: {
        fontFamily: "Arial, Helvetica, sans-serif",
        color: "white",
        fontSize: 40,
    },
    contItems: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: 500,
        height: 80,
        borderRadius: 10,
        marginRight: 40,
        backgroundColor: "rgba(255, 255, 255, 1)",
        marginBottom: 10,
        
    },
    textoItem:{
        fontFamily: "Arial, Helvetica, sans-serif",
        color: "black",
        fontSize: 20,
    },

    listaFlat: {
        marginLeft: "20%",
        width: "100%",
        height: "90%",
     
    },
    lista:{
        marginBottom: 20,
    }
        
    
});

export default HomeStyles;
