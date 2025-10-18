import React, { useState } from 'react';
import { View, Text, TextInput, Button, Pressable } from 'react-native';
import axios from "axios";

export function Register({ navigation }: any) {
  const [nome, setNome] = useState("");
  const [duracao, setDuracao] = useState("");
  const [compositor, setCompositor] = useState("");
  const [estilo, setEstilo] = useState("");

  const salvar = async () => {
    try {
      const payload = {
        nome: nome.trim(),
        duracao: duracao.trim(),
        compositor: compositor.trim(),
        estilo: estilo.trim()
      }
      const headers: any = { "Content-Type": "application/json" };
      const response = await axios.post("http://127.0.0.1:8000/api/musicas", payload, { headers });
      console.log("Salvo!")
      navigation.navigate("home");
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <View>
      <View>
        <Text>Cadastre um nova música em sua Playlist</Text>
      </View>
      <View>
        <TextInput
          placeholder='nome da música'
          onChangeText={setNome}
        />
        <TextInput
          placeholder='duração da música'
          onChangeText={setDuracao}
        />
        <TextInput
          placeholder='compositor'
          onChangeText={setCompositor}
        />
        <TextInput
          placeholder='estilo'
          onChangeText={setEstilo}
        />
        <Pressable onPress={salvar}>
          <Text>SALVAR</Text>
        </Pressable>
      </View>
    </View>
  );
}

