import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { Ionicons } from "@expo/vector-icons"; //ícones
import axios from 'axios'; //manipulação dos dados da API
import HomeStyles from './HomeStyles';
export function Home({ navigation }: any) {
    const [musicas, setMusicas] = useState<any[]>([]); //useState recebendo um vetor

    function navToRegister() {
        navigation.navigate("register");
    }

    useEffect(() => { 
        axios.
            get("http://127.0.0.1:8000/api/musicas")
            .then((res) => setMusicas(res.data))
            .catch((err) => console.error("Erro ao carregar músicas:", err))
    }, [])

    return (
        <View style={HomeStyles.container}>
           
                <View style={HomeStyles.containercima}>
                    <Text style={HomeStyles.titulo}>
                        Lista de Músicas
                    </Text>
                    <Pressable onPress={navToRegister}>
                        <Ionicons name="add-circle" size={60} color="#000000ff" />
                    </Pressable>
                </View>
                <View style={HomeStyles.listaFlat}>
                    <FlatList 
                        data={musicas}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={HomeStyles.lista}>
                                <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.nome}</Text>
                                <View style={HomeStyles.contItems}>
                                    <Text style={HomeStyles.textoItem}>{item.compositor}</Text>
                                    <Text style={HomeStyles.textoItem}>{item.duracao}</Text>
                                    <Text style={HomeStyles.textoItem}>{item.estilo}</Text>
                                </View>
                            
                            </View>
                        )}/>
            </View>
        </View>
    );
}

