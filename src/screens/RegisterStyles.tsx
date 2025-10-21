import { StyleSheet } from "react-native";

const RegisterStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    container2: {
        backgroundColor: "rgba(255, 255, 255, 1)",
        alignItems: "center",
        justifyContent: "space-around",
        borderRadius: 18,
        width: "50%",
        height: "70%",
        
    },
    texto:{
        fontFamily: "Arial, Helvetica, sans-serif",
        color: "black",
        fontSize: 40,
    },
    conteudo1:{
        backgroundColor: "white",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        height: "20%",
    },
    input: {
        backgroundColor: "rgba(236, 232, 255, 1)",
        borderRadius: 5,
        borderWidth: 0,
        padding: 10,
        marginVertical: 5,
        width: 400,
        fontSize: 25,
        marginBottom: 10,
    },
    botao:{
        marginTop: 20,
        backgroundColor: "rgba(91, 91, 255, 1)",
        borderRadius: 5,
        padding: 10,
        marginVertical: 5,
        width: 400,
        alignItems: "center",
        color: "white",
        textAlign: "center",
    }
});

export default RegisterStyles;
