import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  ImageBackground,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
const AboutMe: React.FC = () => {
  // Función para abrir un enlace externo
  const handleLinkPress = (url: string) => {
    if (url.startsWith("mailto:")) {
      Linking.openURL(url);
    } else {
      // Abrir enlaces web normales en un navegador
      Linking.openURL(url);
    }
  };

  // Definir los enlaces a las redes sociales
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/AMGutierrezTrejos",
      icon: "github",
      color: "#24292e",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/arlexmauriciogutierreztrejos/",
      icon: "linkedin-square",
      color: "#0e76a8",
    },
    {
      name: "Portfolio",
      url: "https://portfoliomgt.netlify.app/",
      icon: "laptop",
      color: "#6fc615",
    },
    {
      name: "Email",
      url: "mailto:tucorreo@example.com",
      icon: "mail",
      color: "#7ee3fc",
    },
  ];

  return (
    <ImageBackground
      source={{
        uri: "https://indieground.net/wp-content/uploads/2023/03/Freebie-GradientTextures-Preview-06.jpg",
      }}
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Vista para la luz detrás de la imagen */}
          <View style={styles.lightBehind}>
            <Image
              source={{
                uri: "https://avatars.githubusercontent.com/u/142355026?v=4",
              }}
              style={styles.img}
            />
          </View>
          <Text style={styles.title}>Hello I'm Mauricio!</Text>
          <Text style={styles.detail}>
            Full Stack Developer +3 years of experience, with a background in
            economy from Cali, Colombia ,I am committed to excellence in
            software development, creating innovative solutions that fuse
            technical knowledge and problem solving.
          </Text>
          {/* Botones para las redes sociales */}
          <View style={styles.buttonsContainer}>
            {socialLinks.map((social, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.btn, { backgroundColor: social.color }]}
                onPress={() => handleLinkPress(social.url)}
              >
                <AntDesign
                  name={social.icon}
                  size={20}
                  color="#FFF"
                  style={styles.icon}
                />
                <Text style={styles.text}>{social.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {/* Espacio adicional para permitir el desplazamiento */}
          <View style={styles.extraSpace} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default AboutMe;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  lightBehind: {
    position: "relative",
    overflow: "hidden",
    borderRadius: 75, // El valor debería ser la mitad del tamaño de la imagen
  },
  img: {
    height: 200,
    width: 200,
    resizeMode: "cover",
    borderRadius: 75, // Hacerla redonda
  },
  title: {
    color: "#FFF",
    fontSize: 30,
    marginTop: 20,
  },
  detail: {
    color: "#FFF",
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 20,
    lineHeight: 30,
    marginTop: 30,
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "90%",
  },
  btn: {
    flexDirection: "row", // Mostrar el icono y el texto en una fila
    alignItems: "center", // Alinear verticalmente los elementos
    width: "45%",
    backgroundColor: "#E2443B",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 20,
    color: "#FFF",
    textAlign: "center",
  },
  extraSpace: {
    height: 50, // Ajusta esta altura según sea necesario
  },
});
