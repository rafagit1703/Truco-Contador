import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [contador, setContador] = useState(0);

  const diminuir = () => {
    setContador(contador - 1);
  };
  const aumentar = () => {
    setContador(contador + 1);
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/logounipar.png")}
        style={styles.minhaImagem}
      />

      <View style={{flexDirection: "row"}}>
        <Text style={{marginRight: 150, fontSize: 40}}>Nós</Text>
        <Text style={{fontSize: 40}}>Eles</Text>
      </View>

      <Text style={{ marginTop: 30, marginBottom: 20, fontSize: 35 }}>
        {contador}
      </Text>

      <View style={styles.botoes}>
        <TouchableOpacity style={styles.botaoAumentar} onPress={aumentar}>
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoDiminuir} onPress={diminuir}>
          <Text style={styles.textoBotao}>-</Text>
        </TouchableOpacity>
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
});
