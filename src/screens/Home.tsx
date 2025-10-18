import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { Ionicons } from "@expo/vector-icons"; //ícones
import axios from 'axios'; //manipulação dos dados da API

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
        <View>
            <View>
                <Text>
                    Lista de Músicas
                </Text>
                <Pressable onPress={navToRegister}>
                    <Ionicons name="add-circle" size={60} color="#000000ff" />
                </Pressable>
            </View>
            <FlatList
                data={musicas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.nome}</Text>
                        <View>
                            <Text>{item.compositor}</Text>
                            <Text>{item.duracao}</Text>
                            <Text>{item.estilo}</Text>
                        </View>
                        <Ionicons name="play-circle" size={30} style={{ marginLeft: 10, color: "#3057f3ff" }} />
                    </View>
                )}/>
        </View>
    );
}

