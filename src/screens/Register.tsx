import React, { useState } from 'react';
import { View, Text, TextInput, Button, Pressable } from 'react-native';
import axios from "axios";
import RegisterStyles from './RegisterStyles';

export function Register({ navigation }: any) {{
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
    <View style={RegisterStyles.container}>
      <View style={RegisterStyles.container2}>
        <View style={RegisterStyles.conteudo1}>
          <Text style={RegisterStyles.texto}>Cadastre um nova música em sua Playlist</Text>
        </View>
        <View>
          <TextInput style={RegisterStyles.input}
            placeholder='nome da música'
            onChangeText={setNome}
          />
          <TextInput
            style={RegisterStyles.input}
            placeholder='duração da música'
            onChangeText={setDuracao}
          />
          <TextInput
            style={RegisterStyles.input}
            placeholder='compositor'
            onChangeText={setCompositor}
          />
          <TextInput
            style={RegisterStyles.input}
            placeholder='estilo'
            onChangeText={setEstilo}
          />
          <Pressable onPress={salvar} >
            <Text style={RegisterStyles.botao}>SALVAR</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

}