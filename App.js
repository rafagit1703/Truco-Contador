import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);
  const [vitorias1, setVitorias1] = useState(0);
  const [vitorias2, setVitorias2] = useState(0);

  const adicionarPontos = (valor, setFunc, time) => {
    setFunc((prev) => {
      const novo = prev + valor;

      if (novo >= 12) {
        Alert.alert("Fim de jogo", `${time} ganhou!`);

        if (time === "Nós") {
          setVitorias1((prev) => prev + 1);
        } else {
          setVitorias2((prev) => prev + 1);
        }

        setContador(0);
        setContador2(0);

        return 0;
      }

      return novo;
    });
  };

  const diminuir = () => setContador((prev) => prev - 1);
  const aumentar = () => adicionarPontos(1, setContador, "Nós");

  const diminuir2 = () => setContador2((prev) => prev - 1);
  const aumentar2 = () => adicionarPontos(1, setContador2, "Eles");

  const reiniciar = () => {
    setContador(0);
    setContador2(0);
  };

  const novoJogo = () => {
    setContador(0);
    setContador2(0);
    setVitorias1(0);
    setVitorias2(0);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/logounipar.png")}
        style={styles.minhaImagem}
      />

      <View style={styles.containerLinha}>
        <View style={styles.coluna}>
          <Text style={styles.nome}>Nós</Text>

          <Text style={styles.contador}>{contador}</Text>
          <Text style={styles.ganhou}>Ganhou {vitorias1}</Text>

          <View style={styles.botoesDuplo}>
            <TouchableOpacity style={styles.botaoAumentar} onPress={aumentar}>
              <Text style={styles.textoBotao}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoDiminuir} onPress={diminuir}>
              <Text style={styles.textoBotao}>-</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.botoesTruco}>
            <TouchableOpacity
              style={styles.botaoTruco}
              onPress={() => adicionarPontos(3, setContador, "Nós")}
            >
              <Text style={styles.textoBotao}>Truco</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoTruco}
              onPress={() => adicionarPontos(6, setContador, "Nós")}
            >
              <Text style={styles.textoBotao}>6</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoTruco}
              onPress={() => adicionarPontos(9, setContador, "Nós")}
            >
              <Text style={styles.textoBotao}>9</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoTruco}
              onPress={() => adicionarPontos(12, setContador, "Nós")}
            >
              <Text style={styles.textoBotao}>12</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.coluna}>
          <Text style={styles.nome}>Eles</Text>

          <Text style={styles.contador}>{contador2}</Text>
          <Text style={styles.ganhou}>Ganhou {vitorias2}</Text>

          <View style={styles.botoesDuplo}>
            <TouchableOpacity style={styles.botaoAumentar} onPress={aumentar2}>
              <Text style={styles.textoBotao}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoDiminuir} onPress={diminuir2}>
              <Text style={styles.textoBotao}>-</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.botoesTruco}>
            <TouchableOpacity
              style={styles.botaoTruco}
              onPress={() => adicionarPontos(3, setContador2, "Eles")}
            >
              <Text style={styles.textoBotao}>Truco</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoTruco}
              onPress={() => adicionarPontos(6, setContador2, "Eles")}
            >
              <Text style={styles.textoBotao}>6</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoTruco}
              onPress={() => adicionarPontos(9, setContador2, "Eles")}
            >
              <Text style={styles.textoBotao}>9</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoTruco}
              onPress={() => adicionarPontos(12, setContador2, "Eles")}
            >
              <Text style={styles.textoBotao}>12</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.botoesControle}>
        <TouchableOpacity style={styles.botaoControle} onPress={reiniciar}>
          <Text style={styles.textoBotao}>Reiniciar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoControle} onPress={novoJogo}>
          <Text style={styles.textoBotao}>Novo Jogo</Text>
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

  minhaImagem: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },

  containerLinha: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  coluna: {
    width: 160,
    alignItems: "center",
  },

  nome: {
    fontSize: 40,
  },

  contador: {
    fontSize: 60,
    marginVertical: 10,
  },

  ganhou: {
    fontSize: 18,
    marginBottom: 10,
  },

  botoesDuplo: {
    flexDirection: "row",
    marginBottom: 10,
  },

  botoesTruco: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
  },

  botoesControle: {
    flexDirection: "row",
    marginTop: 30,
  },

  botaoControle: {
    backgroundColor: "#073b43",
    padding: 12,
    borderRadius: 10,
    marginHorizontal: 10,
  },

  botaoAumentar: {
    backgroundColor: "green",
    width: 60,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  botaoDiminuir: {
    backgroundColor: "red",
    width: 60,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  botaoTruco: {
    backgroundColor: "#171a7a",
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    width: 100,
    alignItems: "center",
  },

  textoBotao: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
