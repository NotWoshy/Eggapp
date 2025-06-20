import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, TouchableOpacity, Image, ImageBackground, Animated } from "react-native";
import { Link } from "expo-router";
import { Audio } from 'expo-av';
import icons from "../constants/icons";
import React, {useRef, useEffect} from 'react';
import { styles } from "../constants/index-styles";

const buttons = [
  { image: icons.softBoiled, route: "../(tabs)/soft" },
  { image: icons.runnyYolk, route: "../(tabs)/runny" },
  { image: icons.hardBoiled, route: "../(tabs)/hard" },
  { image: icons.overcooked, route: "../(tabs)/overcooked" },
];

export default function App() {

  const scrollX = React.useRef(new Animated.Value(0)).current;
  const soundRef = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    const loadSound = async () => {
      try {
        const { sound } = await Audio.Sound.createAsync(
          require('../assets/audio/select.mp3')
        );
        soundRef.current = sound;
      } catch (error) {
        console.error("Sound error: ", error);
      }
    };
    loadSound();

    return () => {
      soundRef.current?.unloadAsync();
    };
  }, []);

  const playSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/audio/select.mp3')
      );
      await sound.playAsync();
    } catch (error) {
      console.error("Sound error: ", error);
    }
  };

  return (
    <>
      <ImageBackground source={icons.background} style={styles.background} resizeMode="repeat">
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Tamago</Text>
          <Text style={styles.subtitle}>Select your egg</Text>
        </View>

        <View style={styles.contentContainer}>
          <StatusBar style="auto" />
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            scrollEventThrottle={16}
          >
            {buttons.map((button, index) => {
              const inputRange = [
                (index - 1) * 500, // botón anterior
                index * 500,       // centro
                (index + 1) * 500  // boton siguiente
              ];

              const scale = scrollX.interpolate({
                inputRange,
                outputRange: [1, 1.1, 1], // Crece al estar centrado
                extrapolate: 'clamp',
              });

              return (
                <Link key={index} href={button.route as any} asChild>
                  <TouchableOpacity style={styles.button} onPress={playSound}>
                    <Animated.Image
                      source={button.image}
                      style={[styles.image, { transform: [{ scale }] }]}
                    />
                  </TouchableOpacity>
                </Link>
              );
            })}
          </ScrollView>
        </View>
      </ImageBackground>
    </>
  );
}
