import { Text, View, TouchableOpacity, Image, ImageBackground, Vibration, Animated, Easing } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { styles } from "../../constants/tabs-styles";
import { StatusBar } from "expo-status-bar";
import  PopUp from "../../components/popup";
import React, {useState, useEffect} from 'react';
import icons from "../../constants/icons";
import {Audio} from 'expo-av';
import {useKeepAwake} from 'expo-keep-awake';

const timer = () => {
  useKeepAwake();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [key, setKey] = React.useState(0);
  const [openModal, setOpenModal] = React.useState(false);
  const [sound, setSound] = useState<Audio.Sound | undefined>(undefined);
  const swing = React.useRef(new Animated.Value(0)).current;
  const swingAnimation = swing.interpolate({inputRange:[-1,1],outputRange:['-5deg','5deg']});

  async function tictocSound() {
      const {sound} = await Audio.Sound.createAsync(
        require('../../assets/audio/clock.mp3'),
        {isLooping: true}
      );
      setSound(sound);
      await sound.playAsync();
    }
    
    async function stoptictocSound() {
      setSound(undefined);
      await sound?.stopAsync();
      await sound?.unloadAsync();
    }
    
    useEffect(() => {
      return sound ? () => {
        sound.unloadAsync();
      } : undefined;
    },[sound])

  const playSound = async() => {
    try {
      const {sound} = await Audio.Sound.createAsync(
        require('../../assets/audio/sound2.mp3')
      );
      await sound.playAsync();
    } catch (error) {
      console.error("Sound error: ",error);
    }
  };

  React.useEffect(() => {
    const swingAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(swing, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(swing, {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(swing, {
          toValue: -1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(swing, {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    );
    swingAnimation.start();
  }, []);  

  const handleStartRestart = () => {
    if (isPlaying) {
      setIsPlaying(false);
      setKey((prevKey) => prevKey + 1);
    } else {
      setIsPlaying(true);
    }
  };

  const handleComplete = () => {
    playSound();
    stoptictocSound();
    Vibration.vibrate();
    setIsPlaying(false);
    setOpenModal(true);
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <>
    <ImageBackground source={icons.background} style={styles.background} resizeMode="repeat">
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You are cooking:</Text>
      </View>

      <View style={styles.contentContainer}>
        <Animated.Image source={icons.softBoiled} style={[styles.image, {transform: [{ rotate: swingAnimation }] }]} />
      </View>

      <View style={styles.contentContainer}>
        <StatusBar style="auto" />
        <CountdownCircleTimer
          key={key}
          isPlaying={isPlaying}
          duration={480} // 8 Minutos
          colors={[
            '#FAB12F',  // Amarillo
            '#FA812F', // Naranja
            '#FA4032',  // Rojo
          ]}
          colorsTime={[480,240,0]}
          onComplete={handleComplete}
        >
          {({ remainingTime }) => (
            <Text style={styles.timerText}>
              {Math.floor(remainingTime / 60)}:
              {('0' + (remainingTime % 60)).slice(-2)}
            </Text>
          )}
        </CountdownCircleTimer>

        <TouchableOpacity style={styles.button} onPress={() => {
          if (isPlaying) {
            stoptictocSound();
            handleStartRestart();
          } else {
            setIsPlaying(true);
            tictocSound();
          }
          }}>
          <Image 
            source={isPlaying ? icons.restart : icons.start}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>
      <PopUp openModal={openModal} setOpenModal={setOpenModal} />
      </ImageBackground>
    </>
  );
};

export default timer