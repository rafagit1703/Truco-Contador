import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";



export default function App() {
  const [nos, setNos] = useState(0);
  const [eles, setEles] = useState(0);

  const aumentarNos = () => setNos(nos + 1);
  const diminuirNos = () => setNos(Math.max(0, nos - 1));

  const aumentarEles = () => setEles(eles + 1);
  const diminuirEles = () => setEles(Math.max(0, eles - 1));

  

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/logounipar.png")}
        style={styles.minhaImagem}
      />

      {/* Botões */}
   <View style={styles.botoes}>
  
  {/* Nós */}
  <View style={styles.coluna}>
    <Text style={styles.textoNome}>Nós</Text>
    <Text style={styles.placar}>{nos}</Text>

    <View style={styles.linhaBotoes}>
      <TouchableOpacity style={styles.botaoAumentar} onPress={aumentarNos}>
        <Text style={styles.textoBotao}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoDiminuir} onPress={diminuirNos}>
        <Text style={styles.textoBotao}>-</Text>
      </TouchableOpacity>
    </View>
  </View>

  {/* Eles */}
  <View style={styles.coluna}>
    <Text style={styles.textoNome}>Eles</Text>
    <Text style={styles.placar}>{eles}</Text>

    <View style={styles.linhaBotoes}>
      <TouchableOpacity style={styles.botaoAumentar} onPress={aumentarEles}>
        <Text style={styles.textoBotao}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoDiminuir} onPress={diminuirEles}>
        <Text style={styles.textoBotao}>-</Text>
      </TouchableOpacity>
    </View>
  </View>

</View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textoNome: {
    fontSize: 35,
    marginRight: 10, // espaço entre os textos
  },
  minhaImagem: {
    width: 200,
    height: 200,
    resizeMode: "contain", //pra não cortar a imagem
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  botaoAumentar: {
    backgroundColor: "green",
    width: 80,
    height: 80,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  botaoDiminuir: {
    backgroundColor: "red",
    width: 80,
    height: 80,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  textoBotao: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  textoNome: {
  fontSize: 35,
},

placar: {
  fontSize: 40,
  fontWeight: "bold",
},

coluna: {
  alignItems: "center",
  marginHorizontal: 20,
},
linhaBotoes: {
  flexDirection: "row",
  marginTop: 10,
},
});
